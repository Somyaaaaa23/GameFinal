import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import {
  createRoom, joinRoom, leaveRoom, setReady, startGame,
  subscribeToRoom, getRoomPlayers, broadcastPlayersChanged,
  type Room, type RoomPlayer,
} from '../lib/multiplayerEngine'
import type { MultiplayerMode } from '../types/game'
import type { RealtimeChannel } from '@supabase/supabase-js'
import { useTranslation } from 'react-i18next'

type LobbyView = 'menu' | 'waiting'

type MenuTab = 'choice' | 'create' | 'join'

export function Lobby() {
  const { t } = useTranslation()
  const { profile } = useAuth()
  const navigate = useNavigate()

  const [view, setView] = useState<LobbyView>('menu')
  const [menuTab, setMenuTab] = useState<MenuTab>('choice')
  const [joinCode, setJoinCode] = useState('')
  const [maxPlayers, setMaxPlayers] = useState(2)
  const [gameMode, setGameMode] = useState<MultiplayerMode>('standard')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [room, setRoom] = useState<Room | null>(null)
  const [roomPlayers, setRoomPlayers] = useState<RoomPlayer[]>([])
  const channelRef = useRef<RealtimeChannel | null>(null)

  const isHost = room?.host_id === profile?.id
  const myPlayer = roomPlayers.find(p => p.player_id === profile?.id)
  // Host doesn't need to click Ready — their intent to start is enough.
  // All non-host players must be ready, and there must be at least 2 players total.
  const nonHostPlayers = roomPlayers.filter(p => p.player_id !== room?.host_id)
  const allReady = roomPlayers.length >= 2 && nonHostPlayers.length > 0 && nonHostPlayers.every(p => p.is_ready)
  const canStart = isHost && allReady

  useEffect(() => {
    return () => {
      channelRef.current?.unsubscribe()
    }
  }, [])

  // Watch for game start — redirect non-host players too
  useEffect(() => {
    if (room?.status === 'in_progress' && room.game_state) {
      navigate(`/multiplayer/${room.id}`)
    }
  }, [room?.status, room?.id, navigate])  

  const enterRoom = useCallback((newRoom: Room) => {
    setRoom(newRoom)
    setView('waiting')

    // Subscribe to realtime
    if (channelRef.current) channelRef.current.unsubscribe()
    channelRef.current = subscribeToRoom(
      newRoom.id,
      (updatedRoom) => setRoom(updatedRoom as Room),
      (players) => setRoomPlayers(players),
    )
  }, [])

  const handleCreate = async () => {
    if (!profile) {
      setError('Profile not found. If you just signed up, your username might have been taken. Try signing out and signing up again with a different username.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const newRoom = await createRoom(profile.id, profile.username, maxPlayers, gameMode)
      const players = await getRoomPlayers(newRoom.id)
      setRoomPlayers(players)
      enterRoom(newRoom)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to create room')
    } finally {
      setLoading(false)
    }
  }

  const handleJoin = async () => {
    if (!profile) {
      setError('Profile not found. If you just signed up, your username might have been taken. Try signing out and signing up again with a different username.')
      return
    }
    if (!joinCode.trim()) return
    setLoading(true)
    setError('')
    try {
      const joinedRoom = await joinRoom(joinCode.trim(), profile.id, profile.username)
      const players = await getRoomPlayers(joinedRoom.id)
      setRoomPlayers(players)
      enterRoom(joinedRoom)
      // After subscribing in enterRoom, broadcast so host sees the new player immediately
      setTimeout(() => broadcastPlayersChanged(joinedRoom.id), 500)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to join room')
    } finally {
      setLoading(false)
    }
  }

  const handleToggleReady = async () => {
    if (!room || !profile) return
    try {
      await setReady(room.id, profile.id, !myPlayer?.is_ready)
      // Broadcast change so everyone updates immediately
      await broadcastPlayersChanged(room.id)
      // Also update local state immediately for responsiveness
      const players = await getRoomPlayers(room.id)
      setRoomPlayers(players)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to update ready status')
    }
  }

  const handleStartGame = async () => {
    if (!room || !profile || !canStart) return
    setLoading(true)
    setError('')
    try {
      await startGame(room.id, roomPlayers)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to start game')
      setLoading(false)
    }
  }

  const handleLeave = async () => {
    if (!room || !profile) return
    await leaveRoom(room.id, profile.id)
    await broadcastPlayersChanged(room.id)
    channelRef.current?.unsubscribe()
    setRoom(null)
    setRoomPlayers([])
    setView('menu')
  }

  if (view === 'waiting' && room) {
    return (
      <WaitingRoom
        room={room}
        roomPlayers={roomPlayers}
        nonHostPlayers={nonHostPlayers}
        isHost={isHost}
        myPlayer={myPlayer}
        canStart={canStart}
        allReady={allReady}
        loading={loading}
        error={error}
        onToggleReady={handleToggleReady}
        onStart={handleStartGame}
        onLeave={handleLeave}
      />
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 24px' }}>
      <div style={{ width: '100%', maxWidth: menuTab === 'create' ? 760 : 500, animation: 'slideUp 0.4s ease' }}>
        <button
          onClick={() => {
            if (menuTab !== 'choice') setMenuTab('choice')
            else navigate('/dashboard')
          }}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 16, fontFamily: 'inherit', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 6 }}
        >
          ← {menuTab === 'choice' ? 'Back to Dashboard' : 'Back'}
        </button>

        {menuTab !== 'create' && (
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 50 }}>🌐</div>
            </div>
            <h1 style={{ fontSize: 35, fontWeight: 800, color: '#1A202C', fontFamily: 'var(--font-display)', margin: 0 }}>
              {menuTab === 'choice' ? t('dashboard.playOnline') : t('lobby.joinRoom')}
            </h1>
            {menuTab === 'choice' && (
              <p style={{ color: 'var(--text-muted)', fontSize: 18, marginTop: 8 }}>
                {t('dashboard.playOnlineDesc')}
              </p>
            )}
          </div>
        )}

        {menuTab === 'create' && (
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <h1 style={{ fontSize: 48, fontWeight: 800, color: '#1A284D', fontFamily: 'var(--font-display)', margin: 0, letterSpacing: '-0.03em' }}>
              Create Room
            </h1>
          </div>
        )}
        
        {menuTab === 'join' && (
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <h1 style={{ fontSize: 48, fontWeight: 800, color: '#1A284D', fontFamily: 'var(--font-display)', margin: 0, letterSpacing: '-0.03em' }}>
              Join Room
            </h1>
          </div>
        )}

        {error && (
          <div style={{ background: 'rgba(224,80,32,0.1)', border: '1px solid var(--orange-primary)', borderRadius: 10, padding: '12px 16px', fontSize: 16, color: 'var(--orange-soft)', marginBottom: 20 }}>
            {error}
          </div>
        )}

        {menuTab === 'choice' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Button size="lg" onClick={() => setMenuTab('create')} style={{ width: '100%', fontSize: 20, padding: 24 }}>
              {t('lobby.createRoom')}
            </Button>
            <Button size="lg" variant="secondary" onClick={() => setMenuTab('join')} style={{ width: '100%', fontSize: 20, padding: 24 }}>
              {t('lobby.joinRoom')}
            </Button>
          </div>
        )}

        {menuTab === 'create' && (
          <div style={{ background: '#C2E3D2', borderRadius: 24, padding: '32px', marginBottom: 16, animation: 'slideUp 0.3s ease' }}>
            
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: '#111827', fontFamily: 'var(--font-display)', margin: '0 0 4px 0', letterSpacing: '-0.02em' }}>
                Choose Your Room
              </h2>
              <div style={{ fontSize: 18, color: '#4B5563', fontWeight: 500 }}>
                Choose number of opponents
              </div>
            </div>
            
            {/* Max Players / Opponents */}
            <div style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                {[
                  { num: 1, label: 'one', maxP: 2 },
                  { num: 2, label: 'two', maxP: 3 },
                  { num: 3, label: 'three', maxP: 4 }
                ].map(opt => {
                  const isSelected = maxPlayers === opt.maxP;
                  return (
                    <div
                      key={opt.num}
                      onClick={() => setMaxPlayers(opt.maxP)}
                      style={{
                        width: 120, height: 100, borderRadius: 12,
                        background: '#1A284D',
                        opacity: isSelected ? 1 : 0.6,
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', transition: 'all 0.15s',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#38D6A3' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span style={{ fontSize: 42, fontWeight: 400, color: '#fff', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{opt.num}</span>
                      </div>
                      <div style={{ fontSize: 16, color: '#38D6A3', marginTop: 4 }}>{opt.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{ fontSize: 16, color: '#4B5563', marginBottom: 20, fontWeight: 500, paddingLeft: 8 }}>
              Playing against {maxPlayers - 1} AI opponents
            </div>
            
            {/* Game Mode */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {[
                { id: 'blitz', title: 'BLITZ', desc: '15 minutes', reward: '15 Lakh' },
                { id: 'standard', title: 'STANDARD', desc: '15 minutes', reward: '15 Lakh' },
                { id: 'epic', title: 'EPIC', desc: '15 minutes', reward: '15 Lakh' }
              ].map(m => {
                const isSelected = gameMode === m.id;
                return (
                  <div
                    key={m.id}
                    onClick={() => setGameMode(m.id as MultiplayerMode)}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '14px 24px', borderRadius: 16, cursor: 'pointer',
                      background: '#D9EFE3',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 24, color: '#0F172A', fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}>{m.title}</div>
                      <div style={{ fontSize: 15, color: '#6B7280', marginTop: 2 }}>{m.desc}</div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                      <div style={{ 
                        background: '#34D399', color: '#064E3B', 
                        padding: '6px 14px', borderRadius: 20, 
                        fontWeight: 800, fontSize: 15, 
                        display: 'flex', alignItems: 'center', gap: 6,
                        boxShadow: '0 2px 4px rgba(52, 211, 153, 0.3)'
                      }}>
                        <span style={{ fontSize: 14 }}>🪙</span> {m.reward}
                      </div>
                      
                      <div style={{
                        width: 24, height: 24, borderRadius: '50%', border: `2px solid #111827`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'transparent'
                      }}>
                        {isSelected && <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#111827' }} />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              onClick={handleCreate} 
              disabled={loading}
              style={{ 
                width: '100%', height: 64, padding: '0 24px', borderRadius: 16, border: 'none',
                background: '#1A284D',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                color: '#4ADE80', cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(26, 40, 77, 0.3)', opacity: loading ? 0.8 : 1,
                transition: 'transform 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
                <line x1="6" y1="12" x2="10" y2="12"></line>
                <line x1="8" y1="10" x2="8" y2="14"></line>
                <line x1="15" y1="13" x2="15.01" y2="13"></line>
                <line x1="18" y1="11" x2="18.01" y2="11"></line>
              </svg>
              
              <span style={{ fontSize: 24, fontWeight: 800, fontFamily: 'var(--font-display)' }}>
                {loading ? 'Creating...' : 'Create Room'}
              </span>
              
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#4ADE80', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1A284D" stroke="#1A284D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </button>
          </div>
        )}

        {menuTab === 'join' && (
          <div style={{ background: '#BCE2CF', border: '1px solid rgba(0,0,0,0.15)', borderRadius: 8, padding: '32px 40px', marginBottom: 16, animation: 'slideUp 0.3s ease', maxWidth: 540, margin: '0 auto', boxShadow: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: '#111827', fontFamily: 'var(--font-display)', margin: 0, letterSpacing: '-0.02em' }}>
                Join an existing room
              </h2>
              <button onClick={() => setMenuTab('choice')} style={{ background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer', fontSize: 16, fontWeight: 600 }}>
                Cancle
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <input
                value={joinCode}
                onChange={e => setJoinCode(e.target.value.toUpperCase())}
                placeholder="ROOM CODE"
                maxLength={6}
                onKeyDown={e => e.key === 'Enter' && handleJoin()}
                style={{
                  width: '100%', height: 60, padding: '0 20px', 
                  background: '#75CFA3',
                  border: 'none', borderRadius: 8,
                  color: '#064E3B', fontSize: 20, fontWeight: 800,
                  letterSpacing: '0.1em', fontFamily: 'var(--font-display)',
                  outline: 'none', textTransform: 'uppercase',
                  textAlign: 'center'
                }}
              />
              
              <button 
                onClick={handleJoin} 
                disabled={loading || joinCode.length < 4}
                style={{ 
                  width: '100%', height: 64, padding: '0 24px', borderRadius: 8, border: 'none',
                  background: '#142145',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  color: '#4ADE80', cursor: (loading || joinCode.length < 4) ? 'not-allowed' : 'pointer',
                  opacity: (loading || joinCode.length < 4) ? 0.6 : 1,
                  transition: 'transform 0.2s', boxShadow: 'none'
                }}
                onMouseEnter={e => { if (!loading && joinCode.length >= 4) e.currentTarget.style.transform = 'scale(1.02)' }}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
                  <line x1="6" y1="12" x2="10" y2="12"></line>
                  <line x1="8" y1="10" x2="8" y2="14"></line>
                  <line x1="15" y1="13" x2="15.01" y2="13"></line>
                  <line x1="18" y1="11" x2="18.01" y2="11"></line>
                </svg>
                
                <span style={{ fontSize: 24, fontWeight: 800, fontFamily: 'var(--font-display)' }}>
                  {loading ? 'Joining...' : 'Create Room'}
                </span>
                
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#4ADE80', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#142145" stroke="#142145" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function WaitingRoom({
  room, roomPlayers, nonHostPlayers, isHost, myPlayer, canStart, allReady, loading, error,
  onToggleReady, onStart, onLeave,
}: {
  room: Room
  roomPlayers: RoomPlayer[]
  nonHostPlayers: RoomPlayer[]
  isHost: boolean
  myPlayer: RoomPlayer | undefined
  canStart: boolean
  allReady: boolean
  loading: boolean
  error: string
  onToggleReady: () => void
  onStart: () => void
  onLeave: () => void
}) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(room.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const modeStr = (room.game_state as any)?.multiplayerMode || 'standard'

  return (
    <div style={{ minHeight: '100vh', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, position: 'relative' }}>
      <button
        onClick={onLeave}
        style={{ position: 'absolute', top: 24, left: 24, background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 16, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6 }}
      >
        ← Back to Dashboard
      </button>
      <div style={{ width: '100%', maxWidth: 520, animation: 'slideUp 0.4s ease' }}>

        {/* Room Code */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {t('lobby.shareCode')}
          </div>
          <div
            onClick={copyCode}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 14px)',
              background: 'rgba(0,0,0,0.05)', border: '2px solid var(--orange-dark)',
              borderRadius: 16, padding: 'clamp(10px, 3vw, 16px) clamp(16px, 4vw, 32px)', cursor: 'pointer',
              transition: 'all 0.2s', userSelect: 'none',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--orange-primary)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--orange-dark)' }}
          >
            <span style={{ fontSize: 'clamp(30px, 8vw, 45px)', fontWeight: 800, letterSpacing: '0.2em', color: 'var(--orange-dark)', fontFamily: 'var(--font-display)' }}>
              {room.code}
            </span>
            <span style={{ fontSize: 'clamp(12px, 3.5vw, 15px)', color: copied ? 'var(--green-primary)' : 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>
              {copied ? t('lobby.copied') : t('lobby.clickToCopy')}
            </span>
          </div>

          <div style={{ marginTop: 16, padding: '10px 16px', background: 'rgba(0,0,0,0.03)', borderRadius: 12, display: 'inline-flex', alignItems: 'center', gap: 12, border: '1px solid rgba(0,0,0,0.05)' }}>
             <div style={{ fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-dark)', letterSpacing: '0.05em' }}>
               {modeStr === 'blitz' ? 'Blitz Mode' : modeStr === 'epic' ? 'Epic Mode' : 'Standard Mode'}
             </div>
             <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--text-muted)' }} />
             <div style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
               {modeStr === 'blitz' ? '15 Min / ₹15L Goal' : modeStr === 'epic' ? '40 Min / ₹50L Goal' : '25 Min / ₹35L Goal'}
             </div>
          </div>
        </div>

        {error && (
          <div style={{ background: 'rgba(224,80,32,0.1)', border: '1px solid var(--orange-primary)', borderRadius: 10, padding: '12px 16px', fontSize: 16, color: 'var(--orange-soft)', marginBottom: 16 }}>
            {error}
          </div>
        )}

        {/* Players List */}
        <Card style={{ padding: 20, marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h2 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-dark)', fontFamily: 'var(--font-display)' }}>
              Players ({roomPlayers.length}/{room.max_players})
            </h2>
            <div style={{ fontSize: 15, color: 'var(--text-muted)' }}>
              {allReady
                ? <span style={{ color: 'var(--green-primary)', fontWeight: 700 }}>All ready!</span>
                : nonHostPlayers.length === 0
                  ? <span>Waiting for players...</span>
                  : <span>{nonHostPlayers.filter(p => p.is_ready).length}/{nonHostPlayers.length} ready</span>
              }
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {roomPlayers.map(p => (
              <div
                key={p.id}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 14px', borderRadius: 10,
                  background: p.player_id === room.host_id ? 'rgba(224,80,32,0.06)' : 'rgba(0,0,0,0.05)',
                  border: `1px solid ${p.player_id === room.host_id ? 'var(--orange-primary)' : 'rgba(0,0,0,0.1)'}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: `hsl(${p.seat_order * 55 + 140}, 60%, 40%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 19, fontWeight: 700, color: '#fff', flexShrink: 0,
                  }}>
                    {p.username[0]?.toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-dark)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 120 }}>{p.username}</div>
                    <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                      {p.player_id === room.host_id ? '👑 Host' : `Player ${p.seat_order + 1}`}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: 15, fontWeight: 700, padding: '5px 12px', borderRadius: 6,
                  background: p.is_ready ? 'rgba(32,160,96,0.12)' : 'rgba(0,0,0,0.05)',
                  color: p.is_ready ? 'var(--green-primary)' : 'var(--text-muted)',
                  border: `1px solid ${p.is_ready ? 'var(--green-primary)' : 'rgba(0,0,0,0.1)'}`,
                }}>
                  {p.is_ready ? '✓ Ready' : 'Not Ready'}
                </div>
              </div>
            ))}

            {Array.from({ length: Math.max(0, room.max_players - roomPlayers.length) }).map((_, i) => (
              <div
                key={`empty-${i}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '12px 14px', borderRadius: 10,
                  border: '1px dashed rgba(0,0,0,0.15)',
                }}
              >
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 23, color: 'var(--text-muted)' }}>
                  +
                </div>
                <div style={{ fontSize: 16, color: 'var(--text-muted)' }}>Waiting for player...</div>
              </div>
            ))}
          </div>
        </Card>

        {roomPlayers.length < 2 && (
          <div style={{ fontSize: 16, color: 'var(--text-muted)', textAlign: 'center', marginBottom: 14 }}>
            Need at least 2 players to start
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {isHost ? (
            <Button
              variant="gold"
              size="lg"
              onClick={onStart}
              disabled={!canStart}
              loading={loading}
              style={{ flex: 1 }}
            >
              {loading ? 'Starting...' : canStart ? 'Start Game!' : nonHostPlayers.length === 0 ? 'Waiting for players...' : `Waiting for ${nonHostPlayers.filter(p => !p.is_ready).length} to ready up...`}
            </Button>
          ) : (
            <Button
              variant={myPlayer?.is_ready ? 'secondary' : 'primary'}
              size="lg"
              onClick={onToggleReady}
              style={{ flex: 1 }}
            >
              {myPlayer?.is_ready ? 'Cancel Ready' : 'Ready Up!'}
            </Button>
          )}
          <Button variant="secondary" size="lg" onClick={onLeave} style={{ flex: '1 1 100%' }}>
            Leave
          </Button>
        </div>

        {isHost && nonHostPlayers.length > 0 && !allReady && (
          <p style={{ fontSize: 15, color: 'var(--text-muted)', textAlign: 'center', marginTop: 12 }}>
            All other players must click "Ready Up!" before you can start
          </p>
        )}
      </div>
    </div>
  )
}
