import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { RankBadge } from '../components/RankBadge'
import { SEASONS } from '../data/mockData'
import { formatWealth } from '../types/game'
import { supabase } from '../lib/supabase'
import { TutorialModal } from '../components/TutorialModal'


type Tab = 'home' | 'leaderboard' | 'contracts' | 'profile'


interface LeaderboardEntry {
  id: string
  user_id: string
  username: string
  wins: number
  losses: number
  total_games: number
  highest_net_worth: number
}

export function Dashboard() {
  const { profile, logout } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('home')
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [leaderboardLoading, setLeaderboardLoading] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [onlineUsers, setOnlineUsers] = useState(() => Math.floor(Math.random() * 301) + 200)

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(prev => {
        const diff = Math.random() > 0.5 ? 1 : -1
        const changeAmount = Math.floor(Math.random() * 4) + 1
        return Math.max(200, Math.min(500, prev + (diff * changeAmount)))
      })
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (localStorage.getItem('justRegistered') === 'true') {
      setShowTutorial(true)
      localStorage.removeItem('justRegistered')
      localStorage.setItem('hasSeenTutorial', 'true')
    }
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  useEffect(() => {
    if (tab === 'leaderboard') fetchLeaderboard()
  }, [tab])

  const fetchLeaderboard = async () => {
    setLeaderboardLoading(true)
    const { data } = await supabase
      .from('leaderboard')
      .select('*')
      .order('wins', { ascending: false })
    setLeaderboard(data ?? [])
    setLeaderboardLoading(false)
  }

  const rp = profile?.rank_points ?? 0
  const coins = profile?.daank_coins ?? 100
  const currentSeason = SEASONS[0]


  return (
    <div style={{ height: '100vh', background: 'transparent', display: 'flex', flexDirection: 'column', color: 'var(--text-dark)', overflow: 'hidden' }}>
      {showTutorial && (
        <TutorialModal onClose={() => {
          setShowTutorial(false)
          localStorage.setItem('hasSeenTutorial', 'true')
        }} />
      )}
      {/* Top Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--green-primary)',
        padding: '0 20px',
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button 
            className="desktop-only"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            style={{ background: 'transparent', border: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontSize: 25, display: 'flex', alignItems: 'center', padding: 4 }}
          >
            ☰
          </button>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(18px, 5vw, 23px)', color: 'var(--green-primary)' }}>BHAO</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 16px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8, padding: '5px clamp(6px, 2vw, 12px)' }}>
            <span style={{ fontSize: 'clamp(14px, 4vw, 18px)' }}>🪙</span>
            <span style={{ fontSize: 'clamp(14px, 4vw, 18px)', fontWeight: 700, color: 'var(--orange-dark)', whiteSpace: 'nowrap' }}>{coins.toLocaleString()} DC</span>
          </div>
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 'clamp(14px, 4vw, 16px)', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>Sign Out</button>
        </div>
      </nav>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar (Desktop) */}
        <aside className="glass-panel desktop-flex" style={{
          width: isSidebarOpen ? 220 : 80, 
          flexShrink: 0,
          borderTop: 'none', borderLeft: 'none', borderBottom: 'none',
          padding: isSidebarOpen ? '24px 16px' : '24px 12px',
          flexDirection: 'column', gap: 6,
          position: 'sticky', top: 60, height: 'calc(100vh - 60px)',
          overflowY: 'auto', overflowX: 'hidden',
          borderRadius: 0,
          borderRight: '1px solid var(--green-primary)',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease'
        }}>
          {([
            { id: 'home', label: 'Home', icon: '🏠' },
            { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
            { id: 'contracts', label: 'Contracts', icon: '📋' },
            { id: 'profile', label: 'Profile', icon: '👤' },
          ] as const).map(item => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              title={item.label}
              style={{
                display: 'flex', alignItems: 'center', 
                justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                gap: 10,
                padding: '12px 16px', borderRadius: 12, border: 'none',
                background: tab === item.id ? 'rgba(0,0,0,0.05)' : 'transparent',
                color: tab === item.id ? 'var(--green-primary)' : 'var(--text-muted)',
                cursor: 'pointer', fontSize: 16, fontWeight: 600, fontFamily: 'inherit',
                textAlign: 'left', width: '100%',
                transition: 'all 0.15s',
                boxShadow: tab === item.id ? 'inset 4px 0 0 var(--green-primary)' : 'none'
              }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              {isSidebarOpen && <span>{item.label}</span>}
            </button>
          ))}

          <div style={{ marginTop: 'auto', padding: '12px 0', borderTop: '1px solid var(--green-primary)' }}>
            <button
              onClick={() => setShowTutorial(true)}
              title="How to Play"
              style={{
                display: 'flex', alignItems: 'center', 
                justifyContent: isSidebarOpen ? 'flex-start' : 'center',
                gap: 10,
                padding: '12px 16px', borderRadius: 12,
                background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)',
                color: 'var(--text-dark)',
                cursor: 'pointer', fontSize: 16, fontWeight: 700, fontFamily: 'inherit',
                textAlign: 'left', width: '100%', marginBottom: 16,
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 20 }}>📖</span>
              {isSidebarOpen && <span style={{ whiteSpace: 'nowrap' }}>How to Play</span>}
            </button>
            {profile && isSidebarOpen && <RankBadge rp={rp} showProgress size="sm" />}
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, minWidth: 0, padding: 'clamp(12px, 3vw, 24px)', overflowY: 'auto', animation: 'fadeIn 0.3s ease', paddingBottom: '90px' }}>
          {tab === 'home' && <HomeTab navigate={navigate} profile={profile} currentSeason={currentSeason} onlineUsers={onlineUsers} />}
          {tab === 'leaderboard' && <LeaderboardTab leaderboard={leaderboard} loading={leaderboardLoading} profile={profile} onRefresh={fetchLeaderboard} />}
          {tab === 'contracts' && <ContractsTab />}
          {tab === 'profile' && <ProfileTab />}
        </main>
      </div>

      {/* Bottom Nav (Mobile) */}
      <nav className="glass-panel mobile-flex bottom-nav" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
        padding: '8px 16px',
        justifyContent: 'space-around', alignItems: 'center',
        borderLeft: 'none', borderRight: 'none', borderBottom: 'none',
        borderRadius: 0,
        flexWrap: 'nowrap',
        display: 'none', // Hidden by default, shown by .mobile-flex
      }}>
        {([
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
          { id: 'contracts', label: 'Contracts', icon: '📋' },
          { id: 'profile', label: 'Profile', icon: '👤' },
        ] as const).map(item => (
          <button
            key={item.id}
            className="bottom-nav-btn"
            onClick={() => setTab(item.id)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: '8px', border: 'none', background: 'transparent',
              color: tab === item.id ? 'var(--green-primary)' : 'var(--text-muted)',
              cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'inherit',
              transition: 'all 0.15s',
            }}
          >
            <span style={{ fontSize: 25, marginBottom: 2 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

function HomeTab({ navigate, profile, currentSeason, onlineUsers }: { navigate: (path: string) => void; profile: ReturnType<typeof useAuth>['profile']; currentSeason: typeof SEASONS[0], onlineUsers: number }) {
  const [seasonTimeLeft, setSeasonTimeLeft] = useState('Calculating...')

  useEffect(() => {
    const end = new Date()
    end.setDate(end.getDate() + 12)
    end.setHours(end.getHours() + 4)
    const endTime = end.getTime()

    const updateTimer = () => {
      const diff = endTime - Date.now()
      if (diff <= 0) {
        setSeasonTimeLeft('Ended')
        return
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      setSeasonTimeLeft(`${d}d ${h}h`)
    }
    updateTimer()
    const interval = setInterval(updateTimer, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900, width: '100%', margin: '0 auto' }}>
      {/* Welcome */}
      <div style={{ background: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.6)', borderRadius: 16, padding: '24px 28px', boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'var(--font-display)', marginBottom: 4 }}>
              Welcome, {profile?.username ?? 'Mogul'} 👋
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 18 }}>Ready to build your empire?</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, color: '#10b981', fontWeight: 700, letterSpacing: '0.02em', marginTop: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.8)', animation: 'pulse 2s infinite' }} />
              {onlineUsers} Players Online Now
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => navigate('/campaign')}>Your Journey</Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/multiplayer')} style={{ border: '2px solid var(--orange-dark)', color: 'var(--orange-dark)', background: 'transparent' }}>Play Online</Button>
          </div>
        </div>
      </div>

      {profile?.games_played === 0 ? (
        <Card style={{ padding: '24px', textAlign: 'center', background: 'rgba(59,130,246,0.05)', borderColor: 'rgba(59,130,246,0.2)' }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--blue-deep)', marginBottom: 8 }}>Welcome to BHAO!</h3>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 16 }}>Play your first game to start tracking your stats.</p>
          <Button variant="primary" onClick={() => navigate('/campaign')}>Play your first game →</Button>
        </Card>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          {[
            { label: 'Games Played', value: (profile?.games_played ?? 0).toString(), icon: '🎮', color: 'var(--blue-deep)' },
            { label: 'Games Won', value: (profile?.games_won ?? 0).toString(), icon: '🏆', color: 'var(--green-primary)' },
            { label: 'Win Streak', value: `${profile?.win_streak ?? 0}`, icon: '🔥', color: 'var(--orange-dark)' },
            { label: 'Total XP', value: (profile?.total_xp ?? 0).toLocaleString(), icon: '⭐', color: 'var(--orange-dark)' },
          ].map(stat => (
            <Card key={stat.label} className="p-2 sm:p-4">
              <div className="text-xl sm:text-2xl" style={{ marginBottom: 6 }}>{stat.icon}</div>
              <div className="text-lg sm:text-2xl font-bold" style={{ color: stat.color, fontFamily: 'var(--font-display)' }}>{stat.value}</div>
              <div className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)', marginTop: 2 }}>{stat.label}</div>
            </Card>
          ))}
        </div>
      )}

      {/* Career Journey Banner */}
      <Card style={{ padding: '24px', background: '#08543b', borderRadius: 16, border: 'none', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Background Arrow Graphic */}
        <svg width="240" height="240" viewBox="0 0 24 24" style={{ position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)', opacity: 0.1, zIndex: 0 }} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 6l-9.5 9.5-5-5L1 18"/>
          <path d="M17 6h6v6"/>
        </svg>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, position: 'relative', zIndex: 1 }}>
          {/* Left Section: Avatar & Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            {/* Avatar Circle */}
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#fff', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={profile?.avatar_url || '/avatars/1.png'} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 16 }}>🌱</span>
                <span style={{ color: '#fff', fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-display)' }}>Rookie Investor</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff', margin: 0, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                  Level 3
                </h2>
                <span style={{ color: '#FBBF24', fontSize: 16, fontWeight: 700 }}>
                  ↑ 150 XP
                </span>
              </div>

              {/* Progress Bar Container */}
              <div style={{ width: '100%', minWidth: 200, maxWidth: 280 }}>
                <div style={{ width: '100%', height: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: '37.5%', height: '100%', background: '#10B981', borderRadius: 4 }}></div>
                </div>
                <div style={{ textAlign: 'right', color: '#E5E7EB', fontSize: 12, marginTop: 6, fontWeight: 500 }}>
                  150 / 400 XP
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Button */}
          <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', minWidth: 160 }}>
            <button onClick={() => navigate('/campaign')} style={{ 
              background: '#065e43', 
              border: '2px solid #FBBF24', 
              borderRadius: 12, 
              padding: '12px 28px', 
              color: '#FBBF24', 
              fontSize: 20, 
              fontWeight: 700, 
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              position: 'relative',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              width: '100%',
              maxWidth: 200,
              justifyContent: 'center'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'} 
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              {/* Sparkles */}
              <span style={{ position: 'absolute', top: 6, left: 8, fontSize: 12 }}>✨</span>
              <span style={{ position: 'absolute', bottom: 6, right: 8, fontSize: 12 }}>✨</span>
              
              Continue <span style={{ marginLeft: 2 }}>→</span>
            </button>
          </div>
        </div>
      </Card>

      {/* Season Banner */}
      {/* Season Banner */}
      <Card style={{ padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'stretch', background: 'linear-gradient(to right, #022c22 0%, #047857 40%, #d1fae5 100%)', border: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ width: 260, position: 'relative', flexShrink: 0 }}>
          
          {/* Decorations */}
          <div style={{ position: 'absolute', top: 20, left: 25, fontSize: 18, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>✨</div>
          <div style={{ position: 'absolute', top: 45, right: 60, fontSize: 16, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>✨</div>
          <div style={{ position: 'absolute', bottom: 30, right: 50, fontSize: 18, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>🪙</div>
          <div style={{ position: 'absolute', bottom: 20, left: 35, fontSize: 16, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>🪙</div>
          
          {/* Trophy */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <span style={{ fontSize: 80, filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))', transform: 'translateY(-2px)' }}>🏆</span>
          </div>
        </div>

        <div style={{ flex: 1, padding: '24px 24px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontSize: 13, color: '#d97706', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>ACTIVE SEASON</div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: '#ffffff', marginBottom: 6, fontFamily: 'var(--font-display)', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              Season {currentSeason.number}: {currentSeason.name}
            </h2>
            <p style={{ color: '#f8fafc', fontSize: 15, marginBottom: 12, fontWeight: 500, textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>{currentSeason.theme}</p>

          </div>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
            <div>
              <div style={{ fontSize: 13, color: '#4b5563', marginBottom: 4 }}>Season ends in</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#dc2626', fontFamily: 'var(--font-display)' }}>{seasonTimeLeft}</div>
            </div>
            <button style={{ background: '#047857', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(4, 120, 87, 0.4)' }}>
              View Rewards
            </button>
          </div>
        </div>
      </Card>


    </div>
  )
}

const PodiumTopper = ({ rank }: { rank: 1|2|3 }) => {
  const defs = (
    <defs>
      <linearGradient id={`grad-main-${rank}`} x1="0%" y1="0%" x2="0%" y2="100%">
        {rank === 1 ? (
          <><stop offset="0%" stopColor="#FDE047"/><stop offset="50%" stopColor="#EAB308"/><stop offset="100%" stopColor="#A16207"/></>
        ) : rank === 2 ? (
          <><stop offset="0%" stopColor="#F1F5F9"/><stop offset="50%" stopColor="#94A3B8"/><stop offset="100%" stopColor="#475569"/></>
        ) : (
          <><stop offset="0%" stopColor="#FDBA74"/><stop offset="50%" stopColor="#D97706"/><stop offset="100%" stopColor="#78350F"/></>
        )}
      </linearGradient>
      <linearGradient id={`grad-dark-${rank}`} x1="0%" y1="0%" x2="0%" y2="100%">
        {rank === 1 ? (
          <><stop offset="0%" stopColor="#CA8A04"/><stop offset="100%" stopColor="#713F12"/></>
        ) : rank === 2 ? (
          <><stop offset="0%" stopColor="#64748B"/><stop offset="100%" stopColor="#334155"/></>
        ) : (
          <><stop offset="0%" stopColor="#B45309"/><stop offset="100%" stopColor="#451A03"/></>
        )}
      </linearGradient>
      <linearGradient id={`grad-light-${rank}`} x1="0%" y1="0%" x2="0%" y2="100%">
        {rank === 1 ? (
           <><stop offset="0%" stopColor="#FEF08A"/><stop offset="100%" stopColor="#FACC15"/></>
        ) : rank === 2 ? (
           <><stop offset="0%" stopColor="#FFFFFF"/><stop offset="100%" stopColor="#CBD5E1"/></>
        ) : (
           <><stop offset="0%" stopColor="#FDE68A"/><stop offset="100%" stopColor="#F59E0B"/></>
        )}
      </linearGradient>
      <filter id={`drop-shadow-${rank}`} x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
      </filter>
    </defs>
  );

  return (
    <svg width="100%" viewBox="0 0 200 130" style={{ zIndex: 2, position: 'relative', overflow: 'visible', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))' }}>
      {defs}
      <g>
        {/* Decorative side elements (wings/laurels) */}
        <path d="M 60 60 L 20 55 L 30 75 L 10 80 L 40 95 L 60 90 Z" fill={`url(#grad-dark-${rank})`} />
        <path d="M 140 60 L 180 55 L 170 75 L 190 80 L 160 95 L 140 90 Z" fill={`url(#grad-dark-${rank})`} />

        {/* Base Block / Pedestal */}
        <path d="M 0 100 L 200 100 L 200 120 L 0 120 Z" fill={`url(#grad-main-${rank})`} />
        <path d="M 10 90 L 190 90 L 200 100 L 0 100 Z" fill={`url(#grad-light-${rank})`} />
        <path d="M 0 120 L 200 120 L 190 130 L 10 130 Z" fill={`url(#grad-dark-${rank})`} />

        {/* Central Shield */}
        <path d="M 60 40 L 70 30 L 130 30 L 140 40 L 140 70 C 140 100, 100 120, 100 120 C 100 120, 60 100, 60 70 Z" fill={`url(#grad-main-${rank})`} filter={`url(#drop-shadow-${rank})`} />
        <path d="M 68 44 L 74 38 L 126 38 L 132 44 L 132 68 C 132 92, 100 108, 100 108 C 100 108, 68 92, 68 68 Z" fill={`url(#grad-light-${rank})`} />
        
        {/* Crown */}
        <g filter={`url(#drop-shadow-${rank})`}>
          <path d="M 75 35 L 70 10 L 85 20 L 100 0 L 115 20 L 130 10 L 125 35 Q 100 40 75 35 Z" fill={`url(#grad-main-${rank})`} />
          <circle cx="70" cy="10" r="5" fill={`url(#grad-light-${rank})`} />
          <circle cx="100" cy="0" r="6" fill={`url(#grad-light-${rank})`} />
          <circle cx="130" cy="10" r="5" fill={`url(#grad-light-${rank})`} />
        </g>
        
        {/* Rank Number */}
        <text x="100" y="85" fontSize="38" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" fill="#FFFFFF" textAnchor="middle" filter={`url(#drop-shadow-${rank})`}>
          {rank}
        </text>
      </g>
    </svg>
  );
}

const PodiumStep = ({ rank, player, profile }: { rank: 1|2|3; player?: any; profile?: any }) => {
  if (!player) return <div style={{ width: '30%', minWidth: 100 }} />

  const is1 = rank === 1;
  const isMe = player.user_id === profile?.id;
  const displayUsername = isMe && profile?.username ? profile.username : player.username;

  const colors = {
    1: { bg: '#FFFDF0', border: '#EAB308' },
    2: { bg: '#F8FAFC', border: '#94A3B8' },
    3: { bg: '#FFFBEB', border: '#D97706' }
  }[rank];

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      width: is1 ? '28%' : '24%',
      minWidth: is1 ? 140 : 120,
      maxWidth: is1 ? 220 : 190,
      position: 'relative',
      zIndex: is1 ? 10 : 1,
      marginTop: is1 ? 0 : 20,
      transition: 'transform 0.3s',
      cursor: 'default'
    }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
      <PodiumTopper rank={rank} />

      <div style={{
        background: colors.bg,
        width: '100%',
        border: `2px solid ${colors.border}`,
        borderTop: 'none',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        padding: is1 ? '20px 8px 16px' : '16px 8px 12px',
        textAlign: 'center',
        boxShadow: `0 10px 25px rgba(0,0,0,0.1)`,
        marginTop: -2,
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ fontWeight: 800, fontSize: is1 ? 16 : 14, color: '#1f2937', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {displayUsername}
        </div>
        <div style={{ fontWeight: 900, fontSize: is1 ? 22 : 18, color: '#111827' }}>
          {formatWealth(player.highest_net_worth)}
        </div>
      </div>
    </div>
  )
}

function LeaderboardTab({ leaderboard, loading, profile, onRefresh }: { leaderboard: LeaderboardEntry[]; loading: boolean; profile: ReturnType<typeof useAuth>['profile']; onRefresh: () => void }) {
  const [showAll, setShowAll] = useState(false)
  const [sortField, setSortField] = useState<'wins' | 'winRate' | 'highest_net_worth'>('wins')
  const [sortAsc, setSortAsc] = useState(false)

  const handleSort = (field: 'wins' | 'winRate' | 'highest_net_worth') => {
    if (sortField === field) setSortAsc(!sortAsc)
    else { setSortField(field); setSortAsc(false) }
  }

  const enrichedLeaderboard = leaderboard.map(p => ({
    ...p,
    winRate: p.total_games > 0 ? Math.round((p.wins / p.total_games) * 100) : 0
  }))

  const sortedLeaderboard = [...enrichedLeaderboard].sort((a, b) => {
    let diff = 0
    if (sortField === 'wins') diff = a.wins - b.wins
    if (sortField === 'winRate') diff = a.winRate - b.winRate
    if (sortField === 'highest_net_worth') diff = a.highest_net_worth - b.highest_net_worth
    return sortAsc ? diff : -diff
  })

  // Pre-calculate ranks before pinning
  const rankedLeaderboard = sortedLeaderboard.map((p, index) => ({ ...p, rank: index + 1 }))
  
  const top3 = rankedLeaderboard.slice(0, 3)
  const remaining = rankedLeaderboard.slice(3)

  const displayData = showAll ? remaining : remaining.slice(0, 9)

  return (
    <div style={{ maxWidth: 800, width: '100%', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'Space Grotesk, sans-serif' }}>Leaderboard</h2>
        <button onClick={onRefresh} style={{ background: 'var(--green-primary)', border: 'none', borderRadius: 8, padding: '6px 14px', color: '#fff', cursor: 'pointer', fontSize: 16, fontFamily: 'inherit', fontWeight: 600 }}>
          Refresh
        </button>
      </div>
      <Card style={{ overflow: 'hidden', padding: 0, background: '#f0fdf4' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
            <div style={{ width: 28, height: 28, border: '2px solid rgba(0,0,0,0.1)', borderTopColor: 'var(--orange-primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 12px' }} />
            Loading leaderboard...
          </div>
        ) : leaderboard.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🏆</div>
            No entries yet. Be the first to play!
          </div>
        ) : (
          <div style={{ width: '100%' }}>
            {top3.length > 0 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 16, padding: '32px 20px 40px', background: 'transparent' }}>
                <PodiumStep rank={2} player={top3[1]} profile={profile} />
                <PodiumStep rank={1} player={top3[0]} profile={profile} />
                <PodiumStep rank={3} player={top3[2]} profile={profile} />
              </div>
            )}
            
            <div className="scroll-x">
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 650 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.1)', background: 'transparent' }}>
                  {['Rank', 'Player'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 13, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                  ))}
                  <th onClick={() => handleSort('wins')} style={{ cursor: 'pointer', padding: '12px 16px', textAlign: 'left', fontSize: 13, color: sortField === 'wins' ? 'var(--green-primary)' : 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Wins {sortField === 'wins' && (sortAsc ? '↑' : '↓')}</th>
                  <th onClick={() => handleSort('highest_net_worth')} style={{ cursor: 'pointer', minWidth: 140, padding: '12px 16px', textAlign: 'left', fontSize: 13, color: sortField === 'highest_net_worth' ? 'var(--green-primary)' : 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Best Wealth {sortField === 'highest_net_worth' && (sortAsc ? '↑' : '↓')}</th>
                </tr>
              </thead>
              <tbody>
                {displayData.map((player) => {
                  const isMe = player.user_id === profile?.id
                  const displayUsername = isMe && profile?.username ? profile.username : player.username
                  return (
                    <tr key={player.id} style={{ 
                      borderBottom: '1px solid rgba(0,0,0,0.05)', 
                      background: isMe ? 'rgba(32,160,96,0.1)' : 'transparent',
                      border: isMe ? '1px solid var(--green-primary)' : 'none',
                      borderRadius: isMe ? 8 : 0,
                      transition: 'background 0.2s' 
                    }} onMouseEnter={e => e.currentTarget.style.background = isMe ? 'rgba(32,160,96,0.15)' : 'rgba(0,0,0,0.05)'} onMouseLeave={e => e.currentTarget.style.background = isMe ? 'rgba(32,160,96,0.1)' : 'transparent'}>
                      <td style={{ padding: '14px 16px', fontSize: 16, fontWeight: 700, color: 'var(--text-muted)' }}>
                        {player.rank}
                      </td>
                      <td style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: isMe ? 'var(--green-primary)' : 'rgba(0,0,0,0.1)', color: isMe ? '#fff' : 'var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800 }}>
                          {displayUsername[0]?.toUpperCase() || '?'}
                        </div>
                        <span style={{ fontSize: 16, color: 'var(--text-dark)', fontWeight: isMe ? 800 : 600 }}>{displayUsername} {isMe && '(you)'}</span>
                      </td>
                      <td style={{ padding: '14px 16px', fontSize: 16, fontWeight: 700, color: isMe ? 'var(--green-primary)' : 'var(--green-primary)' }}>{player.wins}</td>
                      <td style={{ padding: '14px 16px', fontSize: 15, color: 'var(--orange-dark)', fontWeight: 700 }}>{formatWealth(player.highest_net_worth)}</td>
                    </tr>
                  )
                })}
              </tbody>
              </table>
            </div>
            
            {!showAll && remaining.length > 9 && (
              <div style={{ padding: 20, textAlign: 'center' }}>
                <button 
                  onClick={() => setShowAll(true)}
                  style={{
                    background: 'var(--orange-primary)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '10px 24px',
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)'
                  }}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        )}
      </Card>
    </div>
  )
}


function ContractsTab() {
  const { profile } = useAuth()
  const [contracts, setContracts] = useState<any[]>([])
  const [progressData, setProgressData] = useState<Record<string, { progress: number, completed: boolean }>>({})
  const [resetTime, setResetTime] = useState('Calculating...')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchContracts() {
      if (!profile) return
      try {
        const { data: activeContracts } = await supabase
          .from('daily_contracts')
          .select('*')
          .gte('contract_date', new Date().toISOString().split('T')[0])
        
        if (activeContracts) setContracts(activeContracts)

        const { data: pContracts } = await supabase
          .from('player_contracts')
          .select('*')
          .eq('player_id', profile.id)

        if (pContracts) {
          const pMap: Record<string, { progress: number, completed: boolean }> = {}
          for (const pc of pContracts) {
            pMap[pc.contract_id] = { progress: pc.progress, completed: pc.completed }
          }
          setProgressData(pMap)
        }
      } catch (err) {
        console.error('Error fetching contracts:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchContracts()
  }, [profile])

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setHours(24, 0, 0, 0)
      const diff = tomorrow.getTime() - now.getTime()
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const m = Math.floor((diff / 1000 / 60) % 60)
      setResetTime(`${h}h ${m}m`)
    }
    updateTimer()
    const interval = setInterval(updateTimer, 60000)
    return () => clearInterval(interval)
  }, [])

  const difficultyColors: Record<string, string> = { easy: '#10b981', medium: '#f59e0b', hard: '#ef4444' }

  return (
    <div style={{ maxWidth: 700 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'Space Grotesk, sans-serif' }}>Daily Contracts</h2>
        <div style={{ fontSize: 16, color: 'var(--text-muted)' }}>Resets in <span style={{ color: 'var(--orange-dark)', fontWeight: 700 }}>{resetTime}</span></div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 40 }}>Loading active contracts...</div>
      ) : contracts.length === 0 ? (
        <Card style={{ padding: 24, textAlign: 'center', background: 'rgba(0,0,0,0.02)', borderColor: 'rgba(0,0,0,0.05)' }}>
          <div style={{ color: 'var(--text-muted)' }}>No active contracts for today. Check back tomorrow!</div>
        </Card>
      ) : (
        <>
          {Object.keys(progressData).length === 0 && (
            <Card style={{ padding: 24, textAlign: 'center', marginBottom: 20, background: 'rgba(59,130,246,0.05)', borderColor: 'rgba(59,130,246,0.2)' }}>
              <div style={{ fontSize: 30, marginBottom: 8 }}>🎮</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--blue-deep)', marginBottom: 4 }}>Start Your Journey</h3>
              <p style={{ fontSize: 18, color: 'var(--text-muted)' }}>Play a game to start earning contract progress and unlock rewards!</p>
            </Card>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {contracts.map(contract => {
              const progress = progressData[contract.id]?.progress ?? 0
              const completed = progressData[contract.id]?.completed ?? false
              const pct = Math.min(100, (progress / contract.requirement_value) * 100)
              const color = difficultyColors[contract.difficulty] || '#3b82f6'

              return (
                <Card key={contract.id} style={{ padding: 20, borderColor: completed ? 'rgba(16,185,129,0.5)' : contract.is_weekly ? 'rgba(245,158,11,0.4)' : 'rgba(0,0,0,0.1)', background: completed ? 'rgba(16,185,129,0.05)' : contract.is_weekly ? 'rgba(245,158,11,0.04)' : 'rgba(255,255,255,0.5)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: `${color}22`, color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {contract.difficulty}
                        </span>
                        {contract.is_weekly && <span style={{ fontSize: 14, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: 'rgba(245,158,11,0.2)', color: '#d97706' }}>WEEKLY</span>}
                        {completed && <span style={{ fontSize: 14, fontWeight: 700, color: '#059669' }}>✓ COMPLETE</span>}
                      </div>
                      <div style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 4, fontFamily: 'Space Grotesk, sans-serif' }}>{contract.title}</div>
                      <div style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 10 }}>{contract.description}</div>

                      <div style={{ height: 4, background: 'rgba(0,0,0,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${pct}%`, background: completed ? '#10b981' : color, borderRadius: 2, transition: 'width 0.5s ease' }} />
                      </div>
                      <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 4 }}>{Math.min(progress, contract.requirement_value)}/{contract.requirement_value}</div>
                    </div>

                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 23, fontWeight: 800, color: 'var(--orange-dark)', fontFamily: 'Space Grotesk, sans-serif' }}>🪙 {contract.reward_dc}</div>
                      {contract.reward_card_tier && (
                        <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 2 }}>+ 1 {contract.reward_card_tier} card</div>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

function ProfileTab() {
  const { profile, logout, refreshProfile } = useAuth()
  const [isEditingAvatar, setIsEditingAvatar] = useState(false)
  const [isEditingName, setIsEditingName] = useState(false)
  const [newName, setNewName] = useState(profile?.username || '')
  const [updating, setUpdating] = useState(false)

  const rp = profile?.rank_points ?? 0
  const winRate = profile && profile.games_played > 0 ? Math.round((profile.games_won / profile.games_played) * 100) : 0
  
  // Use first character of username if no avatar is set, or generic fallback
  const fallbackAvatar = profile?.username ? profile.username[0].toUpperCase() : '👤'
  const avatar = profile?.avatar_url || fallbackAvatar

  const AVATARS = [
    '/avatars/avatar1.jpeg',
    '/avatars/avatar2.jpeg',
    '/avatars/avatar3.jpeg',
    '/avatars/avatar4.jpeg',
    '/avatars/avatar5.jpeg',
    '/avatars/avatar6.jpeg',
    '/avatars/avatar7.jpeg',
    '/avatars/avatar8.jpeg',
  ]

  const handleUpdateAvatar = async (newAvatar: string) => {
    if (!profile) return
    setUpdating(true)
    await supabase.from('profiles').update({ avatar_url: newAvatar }).eq('id', profile.id)
    await refreshProfile()
    setIsEditingAvatar(false)
    setUpdating(false)
  }

  const handleUpdateName = async () => {
    if (!profile || !newName.trim() || newName === profile.username) {
      setIsEditingName(false)
      return
    }
    setUpdating(true)
    await supabase.from('profiles').update({ username: newName.trim() }).eq('id', profile.id)
    await supabase.from('leaderboard').update({ username: newName.trim() }).eq('user_id', profile.id)
    await refreshProfile()
    setIsEditingName(false)
    setUpdating(false)
  }

  // Update local input state if profile updates externally
  useEffect(() => {
    if (profile?.username && !isEditingName) {
      setNewName(profile.username)
    }
  }, [profile?.username, isEditingName])

  return (
    <div style={{ maxWidth: 750, width: '100%', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'Space Grotesk, sans-serif' }}>Player Profile</h2>
      </div>

      <Card style={{ padding: 0, overflow: 'hidden', marginBottom: 32, border: '1px solid rgba(0,0,0,0.1)' }}>
        {/* Banner */}
        <div style={{ height: 140, background: 'linear-gradient(135deg, var(--green-primary), var(--green-deep))', position: 'relative', overflow: 'hidden' }}>
           {/* Subtle pattern or badge watermark */}
           <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.1, fontSize: 180, transform: 'rotate(15deg)' }}>🏆</div>
        </div>

        {/* Profile Info */}
        <div style={{ padding: '0 clamp(16px, 4vw, 32px) 32px' }}>
          <div style={{ marginTop: -50, marginBottom: 16, display: 'flex' }}>
            <div 
              onClick={() => setIsEditingAvatar(!isEditingAvatar)}
              style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--card-paper)', border: '4px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 50, cursor: 'pointer', position: 'relative', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', transition: 'transform 0.2s', zIndex: 10 }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {avatar.startsWith('/') ? <img src={avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} /> : avatar}
              <div style={{ position: 'absolute', bottom: 0, right: 0, background: '#fff', width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, border: '1px solid rgba(0,0,0,0.1)', color: '#64748b', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                ✎
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ minWidth: 0, flex: 1, display: 'flex', alignItems: 'center', gap: 20 }}>
              <div>
                {isEditingName ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <input 
                      autoFocus
                      type="text" 
                      value={newName} 
                      onChange={e => setNewName(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleUpdateName()}
                      style={{ fontSize: 24, fontWeight: 800, padding: '4px 12px', borderRadius: 8, border: '2px solid var(--green-primary)', outline: 'none', fontFamily: 'Space Grotesk, sans-serif', width: '100%', maxWidth: 250 }}
                    />
                    <button onClick={handleUpdateName} disabled={updating} style={{ background: 'var(--green-primary)', color: 'white', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 700, cursor: 'pointer' }}>
                      {updating ? 'Saving...' : 'Save'}
                    </button>
                    <button onClick={() => { setIsEditingName(false); setNewName(profile?.username || '') }} disabled={updating} style={{ background: 'transparent', color: 'var(--text-muted)', border: 'none', cursor: 'pointer', fontSize: 14 }}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <h2 style={{ fontSize: 'clamp(24px, 6vw, 36px)', fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8, letterSpacing: '-0.02em', wordBreak: 'break-all', display: 'flex', alignItems: 'center', gap: 12 }}>
                    {profile?.username ?? 'Unknown Player'}
                    <button onClick={() => setIsEditingName(true)} style={{ background: 'rgba(0,0,0,0.05)', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)' }} title="Edit Username">
                      ✎
                    </button>
                  </h2>
                )}
                <div style={{ maxWidth: 300 }}>
                  <RankBadge rp={rp} showProgress />
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'right', background: 'rgba(32,160,96,0.05)', padding: '12px 20px', borderRadius: 12, border: '1px solid rgba(32,160,96,0.1)', alignSelf: 'center' }}>
              <div style={{ fontSize: 13, color: 'var(--green-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4, fontWeight: 700 }}>Total XP</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: 'var(--green-deep)', fontFamily: 'Space Grotesk, sans-serif' }}>{(profile?.total_xp ?? 0).toLocaleString()} <span style={{fontSize:18}}>⭐</span></div>
            </div>
          </div>

          {/* Avatar Selector */}
          {isEditingAvatar && (
            <div style={{ marginTop: 28, padding: 20, background: 'rgba(0,0,0,0.2)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: 15, color: '#94a3b8', marginBottom: 16, fontWeight: 600 }}>Choose your avatar:</div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {AVATARS.map(a => (
                  <button
                    key={a}
                    onClick={() => handleUpdateAvatar(a)}
                    disabled={updating}
                    style={{ width: 52, height: 52, borderRadius: '50%', background: avatar === a ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)', border: avatar === a ? '2px solid #3b82f6' : '1px solid rgba(255,255,255,0.1)', fontSize: 28, cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: updating ? 0.5 : 1 }}
                    onMouseEnter={e => { if (avatar !== a) e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                    onMouseLeave={e => { if (avatar !== a) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                  >
                    {a.startsWith('/') ? <img src={a} alt="Avatar option" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} /> : a}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Stats Grid */}
      <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-dark)', marginBottom: 20, fontFamily: 'Space Grotesk, sans-serif' }}>Career Stats</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" style={{ marginBottom: 40 }}>
        {[
          { label: 'DAANIK Coins', value: `${(profile?.daank_coins ?? 0).toLocaleString()}`, icon: '🪙' },
          { label: 'Win Rate', value: `${winRate}%`, icon: '🎯' },
          { label: 'Games Won', value: (profile?.games_won ?? 0).toString(), icon: '🏆' },
          { label: 'Games Played', value: (profile?.games_played ?? 0).toString(), icon: '🎮' },
          { label: 'Best Win Streak', value: `${profile?.max_win_streak ?? 0}`, icon: '🔥' },
          { label: 'Current Streak', value: `${profile?.win_streak ?? 0}`, icon: '⚡' },
        ].map(stat => (
          <Card key={stat.label} className="p-3 sm:p-4 flex" style={{ alignItems: 'center', gap: '12px', background: 'var(--card-paper)', border: '1px solid rgba(32,160,96,0.2)', boxShadow: '0 4px 12px rgba(32,160,96,0.05)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: 16, background: 'rgba(32,160,96,0.1)', color: 'var(--green-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
              {stat.icon}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold" style={{ color: 'var(--green-deep)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
              <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-dark)', fontFamily: 'Space Grotesk, sans-serif' }}>{stat.value}</div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 32, display: 'flex', justifyContent: 'center' }}>
        <Button variant="ghost" onClick={logout} style={{ color: '#dc2626', border: '1px solid rgba(220,38,38,0.3)', background: 'rgba(220,38,38,0.05)', padding: '12px 24px', fontSize: 16 }}>
          Sign Out of Account
        </Button>
      </div>
    </div>
  )
}
