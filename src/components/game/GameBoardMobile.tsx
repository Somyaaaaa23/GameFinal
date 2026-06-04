import { GameCard as GameCardComponent } from '../GameCard'
import { Button } from '../ui/Button'
import { PlayerBoard } from './PlayerBoard'
import { GameLog } from './GameLog'
import { TurnTimer } from './TurnTimer'

import { formatWealth } from '../../types/game'
import { TURN_TIME_LIMIT_MS } from '../../lib/gameEngine'
import type { GameBoardProps } from './GameBoard'
import { LevelHUD } from './LevelHUD'

export function GameBoardMobile({
  gameState,
  myPlayerId,
  isMultiplayer,
  uiPhase,
  onlinePlayers = new Set(),
  onDrawCard,
  onPlayCard,
  onTargetSelect,
  onDecision,
  onTimeout,
  onCancelTargeting,
}: GameBoardProps) {
  const myPlayerIndex = gameState.players.findIndex(p => p.id === myPlayerId)
  const isMyTurn = gameState.players[gameState.currentPlayerIndex]?.id === myPlayerId
  const myPlayer = myPlayerIndex >= 0 ? gameState.players[myPlayerIndex] : null
  const currentPlayer = gameState.players[gameState.currentPlayerIndex]

  // Rearrange players for display so local player is always first
  const displayPlayers = [...gameState.players]
  if (myPlayerIndex > 0) {
    const me = displayPlayers.splice(myPlayerIndex, 1)[0]
    displayPlayers.unshift(me)
  }

  return (
    <div className="game-board-layout" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px 16px', gap: 16, width: '100%', height: 'calc(100vh - 60px)', overflow: 'hidden' }}>
      
      {/* TOP/MAIN CONTENT: Players & Action */}
      <div className="game-left-col" style={{ display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto', paddingBottom: 16, flex: 1 }}>
        {/* Players */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          {displayPlayers.map((player) => {
            const originalIndex = gameState.players.findIndex(p => p.id === player.id)
            return (
              <div key={player.id}>
                <PlayerBoard
                  player={player}
                  isCurrent={originalIndex === gameState.currentPlayerIndex}
                  isMe={player.id === myPlayerId}
                  isTarget={uiPhase === 'targeting' && player.id !== myPlayerId}
                  isOffline={isMultiplayer && !onlinePlayers.has(player.id)}
                  wealthGoal={gameState.wealthGoal}
                  seatIndex={originalIndex}
                  onClick={() => onTargetSelect(originalIndex)}
                  compact={true}
                />
              </div>
            )
          })}
        </div>

        {/* Level HUD (if campaign level is active) */}
        {gameState.levelState && (
          <div style={{ padding: '0 16px', marginBottom: 16 }}>
            <LevelHUD levelState={gameState.levelState} />
          </div>
        )}

        {/* Action panel */}
        <div className="glass-panel" style={{
          borderRadius: 20, padding: '24px', boxShadow: 'none'
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 23, color: 'var(--text-dark)', fontWeight: 700 }}>
            {isMyTurn ? <span style={{ color: '#60a5fa' }}>Your Turn</span> : <span>{currentPlayer?.name}'s Turn</span>}
          </h2>
          <div style={{ fontSize: 15, color: '#475569', fontWeight: 700 }}>TURN {gameState.turn}</div>
        </div>
        
        <TurnTimer 
          turnStartTime={gameState.turnStartTime} 
          timeLimit={TURN_TIME_LIMIT_MS} 
          active={
            gameState.phase !== 'game_over' && (
              isMyTurn || 
              (!isMultiplayer && gameState.players[0].id === myPlayerId) || 
              (isMultiplayer && gameState.players[0].id === myPlayerId && !onlinePlayers.has(gameState.players[gameState.currentPlayerIndex]?.id))
            )
          }
          onTimeout={onTimeout} 
        />

        {/* Not my turn */}
        {!isMyTurn && uiPhase === 'playing' && (
          <div style={{ textAlign: 'center', padding: '36px 0' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>⏳</div>
            <div style={{ fontSize: 19, fontWeight: 600, color: '#94a3b8', marginBottom: 4 }}>
              Waiting for {currentPlayer?.name}...
            </div>
            <div style={{ fontSize: 16, color: '#475569' }}>Their turn to play</div>
          </div>
        )}

        {/* Draw phase */}
        {isMyTurn && gameState.phase === 'draw' && (
          <div style={{ textAlign: 'center', padding: '28px 0' }}>
            <div style={{ fontSize: 16, color: '#94a3b8', marginBottom: 18 }}>
              Your turn! Draw a card to start.
            </div>
            <Button size="lg" variant="gold" onClick={onDrawCard}>
              Draw a Card ({gameState.deck.length} left in deck)
            </Button>
          </div>
        )}

        {/* Play phase — show full hand, pick one to play */}
        {isMyTurn && gameState.phase === 'play' && uiPhase === 'playing' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <p style={{ fontSize: 16, color: '#94a3b8' }}>
                {gameState.drawnCard ? `Drew "${gameState.drawnCard.name}" — pick a card to play:` : 'Pick a card to play:'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2" style={{ justifyItems: 'center' }}>
              {myPlayer?.hand.map(card => (
                <GameCardComponent key={card.id} card={card} onClick={() => onPlayCard(card)} />
              ))}
            </div>
          </div>
        )}



        {/* Action card targeting phase (Select opponent) */}
        {uiPhase === 'targeting' && gameState.playedCard && (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ fontSize: 22, marginBottom: 12 }}>🎯</div>
            <div style={{ fontSize: 18, color: '#f1f5f9', fontWeight: 700, marginBottom: 8 }}>
              Select a target for {gameState.playedCard.name}
            </div>
            <div style={{ fontSize: 15, color: '#94a3b8', marginBottom: 20 }}>
              Click on an opponent's panel above to target them.
            </div>
            <Button variant="secondary" onClick={onCancelTargeting}>Cancel</Button>
          </div>
        )}
      </div>
      {/* END LEFT COLUMN */}
      </div>

      {/* BOTTOM COLUMN: Game Log */}
      <div className="game-right-col" style={{ width: '100%', marginTop: 8, flexShrink: 0 }}>
        <GameLog log={gameState.log} mobileCompact={true} />
      </div>

      {/* Decision card POPUP (Moved outside left-col to fix z-index overlapping) */}
      {uiPhase === 'decision' && gameState.pendingDecision && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 20
        }}>
          <div style={{
            background: '#ffffff', borderRadius: 24, width: '100%', maxWidth: 360,
            padding: '20px 16px', position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            {/* Close button */}
            <button 
              onClick={onCancelTargeting}
              style={{
                position: 'absolute', top: 14, right: 14,
                background: 'transparent', border: 'none',
                fontSize: 18, color: '#94a3b8', cursor: 'pointer', padding: 4
              }}
            >
              ✕
            </button>

            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-display)', marginBottom: 4 }}>
                {gameState.pendingDecision.card.name}
              </h3>
              <p style={{ color: '#0ea5e9', fontSize: 15, fontWeight: 600 }}>{gameState.pendingDecision.card.flavor}</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {gameState.pendingDecision.card.options?.map(opt => {
                const colors = {
                  spend: { bg: '#fff1f2', border: '#fda4af', labelColor: '#e11d48', labelBg: '#ffe4e6' },
                  save: { bg: '#f0fdf4', border: '#86efac', labelColor: '#16a34a', labelBg: '#dcfce7' },
                  invest: { bg: '#eff6ff', border: '#93c5fd', labelColor: '#2563eb', labelBg: '#dbeafe' }
                }
                const c = colors[opt.type as keyof typeof colors] || colors.save
                let effectVal = opt.effect.value ?? 0
                if (opt.effect.type === 'wealth_pct' && myPlayer) {
                  effectVal = Math.floor(myPlayer.wealth * (effectVal / 100))
                }
                const sign = effectVal >= 0 ? '+' : ''
                
                let failVal = opt.failEffect?.value ?? 0
                if (opt.failEffect?.type === 'wealth_pct' && myPlayer) {
                  failVal = Math.floor(myPlayer.wealth * (failVal / 100))
                }
                
                return (
                  <button
                    key={opt.type}
                    onClick={() => onDecision(opt.type as any)}
                    style={{
                      padding: '10px 14px', borderRadius: 16,
                      background: c.bg, border: `2px solid ${c.border}`,
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      color: 'var(--text-dark)', cursor: 'pointer', textAlign: 'left',
                      fontFamily: 'inherit', width: '100%'
                    }}
                  >
                    <div>
                      <div style={{ 
                        display: 'inline-block', fontSize: 12, fontWeight: 800, 
                        color: c.labelColor, background: c.labelBg, 
                        padding: '2px 8px', borderRadius: 8, marginBottom: 4 
                      }}>
                        {opt.label}
                      </div>
                      <div style={{ fontSize: 14, color: '#475569', fontWeight: 600 }}>{opt.description}</div>
                      {opt.investRisk && opt.failEffect && (
                        <div style={{ fontSize: 11, color: '#dc2626', fontWeight: 700, marginTop: 4, background: 'rgba(220, 38, 38, 0.1)', padding: '2px 6px', borderRadius: 4, display: 'inline-block' }}>
                        ⚠️ {opt.investRisk}% Risk: {failVal < 0 ? '-' : '+'}{formatWealth(Math.abs(failVal))}
                      </div>
                      )}
                    </div>
                    
                    <div style={{ fontSize: 22, fontWeight: 800, color: effectVal >= 0 ? '#16a34a' : '#e11d48', fontFamily: 'var(--font-display)', textAlign: 'right' }}>
                      {sign}{formatWealth(Math.abs(effectVal))}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
