import { useState, useEffect } from 'react'
import { GameCard as GameCardComponent } from '../GameCard'
import { Button } from '../ui/Button'
import { GameLog } from './GameLog'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'
import { formatWealth } from '../../types/game'
import type { GameBoardProps } from './GameBoard'

export function GameBoardDesktop({
  gameState,
  myPlayerId,
  uiPhase,
  onDrawCard,
  onPlayCard,
  onTargetSelect,
  onDecision,
  onCancelTargeting,
}: GameBoardProps) {
  const { t, i18n } = useTranslation()
  const [showGameLog, setShowGameLog] = useState(false)
  const myPlayerIndex = gameState.players.findIndex(p => p.id === myPlayerId)
  const isMyTurn = gameState.players[gameState.currentPlayerIndex]?.id === myPlayerId
  const myPlayer = myPlayerIndex >= 0 ? gameState.players[myPlayerIndex] : null
  const currentPlayer = gameState.players[gameState.currentPlayerIndex]

  const [scale, setScale] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const paddingX = 40;
        const paddingY = 80;
        const scaleX = (window.innerWidth - paddingX) / 1246;
        const scaleY = (window.innerHeight - paddingY) / 614;
        setScale(Math.min(1, scaleX, scaleY));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Star calculation based on wealth goal progress
  const progressRatio = myPlayer ? Math.min(1, myPlayer.wealth / gameState.wealthGoal) : 0;
  const starsEarned = progressRatio >= 1 ? 3 : progressRatio >= 0.66 ? 2 : progressRatio >= 0.33 ? 1 : 0;

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Wrapper to maintain physical footprint of scaled element */}
      <div style={{ width: 1246 * scale, height: 614 * scale, position: 'relative' }}>
        
        {/* Central Glass Panel Stage */}
        <div className="game-stage-bg" style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'absolute', top: 0, left: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 40
        }}>
          
          {/* Not my turn */}
        {!isMyTurn && uiPhase === 'playing' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>⏳</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              {t('game.waitingFor', { name: currentPlayer?.name })}
            </div>
            <div style={{ fontSize: 18, color: '#94a3b8' }}>{t('game.theirTurnToPlay')}</div>
          </div>
        )}

        {/* Draw phase */}
        {isMyTurn && gameState.phase === 'draw' && (
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 24, color: '#fff', marginBottom: 16, fontWeight: 700 }}>
              {t('game.yourTurnDraw')}
            </div>
            
            <img src="/avatars/card sshower.png" style={{ height: 260, objectFit: 'contain', marginBottom: -40, zIndex: 10, pointerEvents: 'none' }} alt="Card shower" />

            <button
              onClick={onDrawCard}
              style={{
                background: 'url("/avatars/cnfoirmchoice.png") center / 100% 100% no-repeat', color: '#fff',
                border: 'none', width: 340, height: 80,
                fontSize: 28, fontWeight: 700, zIndex: 20,
                cursor: 'pointer', fontFamily: 'Avengenz, sans-serif'
              }}
            >
              DRAW CARD
            </button>
          </div>
        )}

        {/* Play phase — show full hand, pick one to play */}
        {isMyTurn && gameState.phase === 'play' && uiPhase === 'playing' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="grid grid-cols-4 gap-4" style={{ justifyItems: 'center', marginBottom: 40 }}>
              <AnimatePresence>
                {myPlayer?.hand.map(card => (
                  <GameCardComponent key={card.id} card={card} onClick={() => onPlayCard(card)} />
                ))}
              </AnimatePresence>
            </div>
            {/* The mock CONFIRM CHOICE button (optional if clicking card plays it directly) */}
            <button
              style={{
                background: 'url("/avatars/cnfoirmchoice.png") center / 100% 100% no-repeat', color: '#fff',
                border: 'none', width: 340, height: 80,
                fontSize: 28, fontWeight: 700,
                cursor: 'default', fontFamily: 'Avengenz, sans-serif',
                opacity: 0.5 // Dimmed since card click triggers play right now
              }}
            >
              CONFIRM CHOICE
            </button>
          </div>
        )}

        {/* Decision card */}
        {uiPhase === 'decision' && gameState.pendingDecision && (
          <div style={{ display: 'flex', gap: 60, alignItems: 'center', width: '100%', justifyContent: 'center' }}>
            {/* Left Side: Selected Card */}
            <div>
              <GameCardComponent card={gameState.pendingDecision.card} compact={false} />
            </div>

            {/* Right Side: Decision Options */}
            <div style={{ width: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 8, fontFamily: 'Avengenz, sans-serif' }}>
                {i18n.language === 'hi' && gameState.pendingDecision.card.nameHi ? gameState.pendingDecision.card.nameHi : gameState.pendingDecision.card.name}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: 18, marginBottom: 24, lineHeight: 1.4 }}>
                {i18n.language === 'hi' && gameState.pendingDecision.card.flavorHi ? gameState.pendingDecision.card.flavorHi : gameState.pendingDecision.card.flavor}
              </p>
              
              {[...(gameState.pendingDecision.card.options || [])].sort((a, b) => {
                const order = { spend: 1, save: 2, invest: 3 };
                return (order[a.type as keyof typeof order] || 0) - (order[b.type as keyof typeof order] || 0);
              }).map(opt => {
                const effectValBase = opt.effect.value ?? 0;
                let effectVal = effectValBase;
                if (opt.effect.type === 'wealth_pct' && myPlayer) {
                  effectVal = Math.floor(myPlayer.wealth * (effectVal / 100));
                }

                let failVal = opt.failEffect?.value ?? 0;
                if (opt.failEffect?.type === 'wealth_pct' && myPlayer) {
                  failVal = Math.floor(myPlayer.wealth * (failVal / 100));
                }

                return (
                  <button
                    key={opt.type}
                    className={`decision-btn ${opt.type}`}
                    onClick={() => onDecision(opt.type as any)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div className={`decision-badge ${opt.type}`}>
                        {opt.type}
                      </div>
                      <div className="decision-label">
                        {opt.label}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="decision-amount" style={{ color: effectVal >= 0 ? '#10B981' : '#EF4444' }}>
                        {effectVal >= 0 ? '+' : ''}{formatWealth(Math.abs(effectVal))}
                      </div>
                      {opt.investRisk && (
                        <div style={{ fontSize: 12, color: '#EF4444', marginTop: 4 }}>
                          {opt.investRisk}% Risk: {failVal < 0 ? '-' : '+'}{formatWealth(Math.abs(failVal))}
                        </div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Action card targeting phase (Select opponent) */}
        {uiPhase === 'targeting' && gameState.pendingTarget && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 20 }}>🎯</div>
            <div style={{ fontSize: 24, color: '#fff', fontWeight: 800, marginBottom: 12 }}>
              {t('game.selectTarget', { card: gameState.pendingTarget.card.name })}
            </div>
            <div style={{ fontSize: 18, color: '#94a3b8', marginBottom: 30 }}>
              {t('game.clickOpponentTarget')}
            </div>
            {/* Render buttons for opponents */}
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 30 }}>
               {gameState.players.map((p, i) => {
                 if (i === myPlayerIndex) return null;
                 return (
                   <button key={p.id} onClick={() => onTargetSelect(i)} style={{
                     padding: '16px 32px', background: 'rgba(239, 68, 68, 0.2)', border: '2px solid #EF4444',
                     borderRadius: 8, color: '#fff', fontSize: 18, fontWeight: 700, cursor: 'pointer'
                   }}>
                     Target {p.name}
                   </button>
                 )
               })}
            </div>
            <Button variant="secondary" onClick={onCancelTargeting}>{t('common.cancel')}</Button>
          </div>
        )}

      </div>
      {/* END CENTRAL STAGE */}
      </div> {/* End Wrapper for Scaling */}

      {/* BOTTOM LEFT: Local Player HUD */}
      {myPlayer && (
        <div style={{ 
          position: 'absolute', bottom: 40, left: 40, 
          display: 'flex', alignItems: 'center', gap: 16,
          background: 'url("/avatars/mainplayercard.png") center / 100% 100% no-repeat',
          padding: '16px 20px', width: 340, height: 110
        }}>
          {/* Avatar Area */}
          <div style={{ 
            width: 78, height: 78, 
            background: 'url("/avatars/player avatar holder.png") center / contain no-repeat',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0
          }}>
            <img src={'https://api.dicebear.com/9.x/avataaars/svg?seed=' + myPlayer.name} style={{ width: 62, height: 62, borderRadius: '50%' }} alt="Avatar" />
          </div>

          {/* Info Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, paddingRight: 8 }}>
            <div style={{ fontSize: 20, fontWeight: 500, color: '#6ee7b7', fontFamily: 'Inter, sans-serif' }}>
              {myPlayer.name}
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', fontFamily: 'Inter, sans-serif', marginTop: -4 }}>
              {formatWealth(myPlayer.wealth)}
            </div>
            
            {/* Progress Bar & Stars */}
            <div style={{ position: 'relative', height: 24, width: '100%', marginTop: 2, display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                position: 'absolute', top: '50%', transform: 'translateY(-50%)', 
                left: 0, right: 0, height: 8, 
                background: 'url("/avatars/level bar.png") center / 100% 100% no-repeat',
                borderRadius: 4
              }} />
              
              <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px' }}>
                {[1, 2, 3].map(s => (
                  <img 
                    key={s} 
                    src="/avatars/star.png" 
                    alt="star"
                    style={{ 
                      width: 20, 
                      height: 20, 
                      opacity: starsEarned >= s ? 1 : 0.3, 
                      filter: starsEarned >= s ? 'drop-shadow(0 0 5px #FBBF24)' : 'none',
                      zIndex: 2,
                      transform: 'translateY(-1px)'
                    }} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM RIGHT: Game Log Toggle Button */}
      <div style={{ position: 'absolute', bottom: 40, right: 40 }}>
        <button
          onClick={() => setShowGameLog(!showGameLog)}
          style={{
            background: 'url("/avatars/gamelogbutton.png") center / contain no-repeat',
            width: 200, height: 60, border: 'none', cursor: 'pointer',
            backgroundColor: 'transparent'
          }}
        >
        </button>
      </div>

      {/* Game Log Modal Overlay */}
      {showGameLog && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.7)', zIndex: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'
        }} onClick={() => setShowGameLog(false)}>
          <div onClick={e => e.stopPropagation()} style={{ width: 600, maxHeight: '80vh', overflowY: 'auto' }}>
            <GameLog log={gameState.log} playerName={myPlayer?.name} />
          </div>
        </div>
      )}

    </div>
  )
}
