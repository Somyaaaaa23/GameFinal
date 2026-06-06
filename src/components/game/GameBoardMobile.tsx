import { useState } from 'react'
import { GameCard as GameCardComponent } from '../GameCard'
import { Button } from '../ui/Button'
import { PlayerBoard } from './PlayerBoard'
import { GameLog } from './GameLog'
import { TurnTimer } from './TurnTimer'

import { formatWealth } from '../../types/game'
import { TURN_TIME_LIMIT_MS } from '../../lib/gameEngine'
import type { GameBoardProps } from './GameBoard'
import { LevelHUD } from './LevelHUD'
import './GameBoardMobile.css'

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
  const [previewCard, setPreviewCard] = useState<any>(null)

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
    <div className="mobile-board-wrapper">
      
      {/* TOP/MAIN CONTENT: Players & Action */}
      <div className="mobile-left-col">
        {/* Players */}
        <div className="mobile-players-grid">
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
          <div className="mobile-level-hud-container">
            <LevelHUD levelState={gameState.levelState} />
          </div>
        )}

        {/* Action panel */}
        <div className="glass-panel mobile-action-panel">
        <div className="mobile-action-header">
          <h2 className="mobile-action-title">
            {isMyTurn ? <span style={{ color: '#60a5fa' }}>Your Turn</span> : <span>{currentPlayer?.name}'s Turn</span>}
          </h2>
          <div className="mobile-action-turn">TURN {gameState.turn}</div>
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
          <div className="mobile-wait-state">
            <div style={{ fontSize: 40, marginBottom: 12 }}>⏳</div>
            <div style={{ fontSize: 19, fontWeight: 600, color: '#94a3b8', marginBottom: 4 }}>
              Waiting for {currentPlayer?.name}...
            </div>
            <div style={{ fontSize: 16, color: '#475569' }}>Their turn to play</div>
          </div>
        )}

        {/* Draw phase */}
        {isMyTurn && gameState.phase === 'draw' && (
          <div className="mobile-draw-state">
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
            <div className="mobile-hand-grid">
              {myPlayer?.hand.map(card => (
                <GameCardComponent key={card.id} card={card} onClick={() => setPreviewCard(card)} />
              ))}
            </div>
          </div>
        )}



        {/* Action card targeting phase (Select opponent) */}
        {uiPhase === 'targeting' && gameState.pendingTarget && (
          <div className="mobile-targeting-state">
            <div style={{ fontSize: 22, marginBottom: 8 }}>🎯</div>
            <div style={{ fontSize: 16, color: '#f1f5f9', fontWeight: 700, marginBottom: 4 }}>
              Select a target for {gameState.pendingTarget.card.name}
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
      <div className="mobile-right-col">
        <GameLog log={gameState.log} mobileCompact={true} playerName={myPlayer?.name} />
      </div>

      {/* Decision card POPUP (Moved outside left-col to fix z-index overlapping) */}
      {uiPhase === 'decision' && gameState.pendingDecision && (
        <div className="mobile-decision-overlay">
          <div className="mobile-decision-modal">
            {/* Close button */}
            <button 
              onClick={onCancelTargeting}
              className="mobile-decision-close"
            >
              ✕
            </button>

            <div className="mobile-decision-header">
              <h3 className="mobile-decision-title">
                {gameState.pendingDecision.card.name}
              </h3>
              <p style={{ color: '#0ea5e9', fontSize: 15, fontWeight: 600 }}>{gameState.pendingDecision.card.flavor}</p>
            </div>
            
            <div className="mobile-decision-options">
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
                    className="mobile-decision-btn"
                    style={{
                      background: c.bg, border: `2px solid ${c.border}`
                    }}
                  >
                    <div>
                      <div className="mobile-decision-badge" style={{ 
                        color: c.labelColor, background: c.labelBg 
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

      {/* Preview Card POPUP */}
      {previewCard && (
        <div className="mobile-preview-overlay">
          <div className="mobile-preview-modal">
            {/* Close button */}
            <button 
              onClick={() => setPreviewCard(null)}
              className="mobile-decision-close"
            >
              ✕
            </button>
            <div className="mobile-preview-title">Preview Card</div>
            <div className="mobile-preview-card-wrapper">
              <GameCardComponent card={previewCard} />
            </div>
            <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
              <Button variant="secondary" onClick={() => setPreviewCard(null)} style={{ flex: 1 }}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => {
                onPlayCard(previewCard)
                setPreviewCard(null)
              }} style={{ flex: 1 }}>
                Play Card
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
