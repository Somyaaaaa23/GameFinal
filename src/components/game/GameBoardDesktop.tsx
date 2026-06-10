import { GameCard as GameCardComponent } from '../GameCard'
import { Button } from '../ui/Button'
import { PlayerBoard } from './PlayerBoard'
import { GameLog } from './GameLog'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'

import { formatWealth } from '../../types/game'
import { TURN_TIME_LIMIT_MS } from '../../lib/gameEngine'
import type { GameBoardProps } from './GameBoard'
import { LevelHUD } from './LevelHUD'

export function GameBoardDesktop({
  gameState,
  myPlayerId,
  isMultiplayer,
  uiPhase,
  onlinePlayers = new Set(),
  onDrawCard,
  onPlayCard,
  onTargetSelect,
  onDecision,
  onCancelTargeting,
  daanikCoins,
  onBuyExtraCard,
  activeEmotes,
  onSendEmote,
}: GameBoardProps) {
  const { t, i18n } = useTranslation()
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
    <div className="game-board-layout" style={{ flex: 1, display: 'flex', padding: '16px 24px', gap: 24, maxWidth: 1440, margin: '0 auto', width: '100%', height: 'calc(100vh - 60px)', overflow: 'hidden' }}>
      
      {/* LEFT COLUMN: Players & Action */}
      <div className="game-left-col" style={{ flex: '1 1 900px', display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto', paddingRight: 8, paddingBottom: 32 }}>
        {/* Players */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {displayPlayers.map((player) => {
            const originalIndex = gameState.players.findIndex(p => p.id === player.id)
            return (
              <div key={player.id}>
                <PlayerBoard
                  player={player}
                  isCurrent={originalIndex === gameState.currentPlayerIndex}
                  isMe={player.id === myPlayerId}
                  isTarget={uiPhase === 'targeting' && player.id !== myPlayerId}
                  isOffline={isMultiplayer && !onlinePlayers?.has(player.id)}
                  wealthGoal={gameState.wealthGoal}
                  seatIndex={originalIndex}
                  onClick={() => onTargetSelect(originalIndex)}
                  turnStartTime={gameState.turnStartTime}
                  timeLimit={TURN_TIME_LIMIT_MS}
                  activeEmote={activeEmotes?.[player.id]}
                  onSendEmote={onSendEmote}
                />
              </div>
            )
          })}
        </div>

        {/* Level HUD (if campaign level is active) */}
        {gameState.levelState && (
          <LevelHUD levelState={gameState.levelState} />
        )}

        {/* Action panel */}
        <div className="glass-panel" style={{
          borderRadius: 20, padding: '24px', boxShadow: 'none'
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 23, color: 'var(--text-dark)', fontWeight: 700 }}>
            {isMyTurn ? <span style={{ color: '#60a5fa' }}>{t('game.yourTurn')}</span> : <span>{t('game.playerTurn', { name: currentPlayer?.name })}</span>}
          </h2>
          <div style={{ fontSize: 15, color: '#475569', fontWeight: 700 }}>{t('game.turn').toUpperCase()} {gameState.turn}</div>
        </div>
        
        

        {/* Not my turn */}
        {!isMyTurn && uiPhase === 'playing' && (
          <div style={{ textAlign: 'center', padding: '36px 0' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>⏳</div>
            <div style={{ fontSize: 19, fontWeight: 600, color: '#94a3b8', marginBottom: 4 }}>
              {t('game.waitingFor', { name: currentPlayer?.name })}
            </div>
            <div style={{ fontSize: 16, color: '#475569' }}>{t('game.theirTurnToPlay')}</div>
            {/* Show my hand while waiting */}
            {myPlayer && myPlayer.hand.length > 0 && (
              <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                <p style={{ fontSize: 15, color: '#475569', marginBottom: 10 }}>
                  {t('game.yourHand', { count: myPlayer.hand.length })}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3" style={{ justifyItems: 'center' }}>
                  {myPlayer.hand.map(card => (
                    <GameCardComponent key={card.id} card={card} compact disabled />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {isMyTurn && gameState.phase === 'draw' && (
          <div style={{ textAlign: 'center', padding: '28px 0' }}>
            <div style={{ fontSize: 16, color: '#94a3b8', marginBottom: 18 }}>
              {t('game.yourTurnDraw')}
            </div>
            <Button size="lg" variant="gold" onClick={onDrawCard}>
              {t('game.drawCardBtn', { count: gameState.deck.length })}
            </Button>
            {myPlayer && myPlayer.hand.length > 0 && (
              <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                <p style={{ fontSize: 15, color: '#475569', marginBottom: 10 }}>{t('game.yourCurrentHand')}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3" style={{ justifyItems: 'center' }}>
                  {myPlayer.hand.map(card => (
                    <GameCardComponent key={card.id} card={card} compact disabled />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Play phase — show full hand, pick one to play */}
        {isMyTurn && gameState.phase === 'play' && uiPhase === 'playing' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <p style={{ fontSize: 16, color: '#94a3b8' }}>
                {gameState.drawnCard ? `${t('game.drew')} "${i18n.language === 'hi' && gameState.drawnCard.nameHi ? gameState.drawnCard.nameHi : gameState.drawnCard.name}" — ${t('game.pickCard')}` : t('game.pickCard')}
              </p>
              <Button
                variant="gold"
                size="sm"
                onClick={onBuyExtraCard}
                disabled={daanikCoins < 25}
                title="Draw an extra card for 25 DAANIK coins"
              >
                {t('game.buyExtraCard')}
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3" style={{ justifyItems: 'center' }}>
              <AnimatePresence>
                {myPlayer?.hand.map(card => (
                  <GameCardComponent key={card.id} card={card} onClick={() => onPlayCard(card)} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Decision card */}
        {uiPhase === 'decision' && gameState.pendingDecision && (
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Left Side: Hand & Context */}
            <div style={{ flex: '1 1 200px' }}>
              <div style={{ marginBottom: 16, display: 'none' /* hidden for cleaner look */ }}>
                <h3 style={{ fontSize: 21, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>
                  {i18n.language === 'hi' && gameState.pendingDecision.card.nameHi ? gameState.pendingDecision.card.nameHi : gameState.pendingDecision.card.name}
                </h3>
                <p style={{ fontSize: 16, color: '#475569' }}>
                  {i18n.language === 'hi' && gameState.pendingDecision.card.flavorHi ? gameState.pendingDecision.card.flavorHi : gameState.pendingDecision.card.flavor}
                </p>
              </div>
              
              <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                <p style={{ fontSize: 15, color: '#475569', marginBottom: 10 }}>{t('game.yourCurrentHand')}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3" style={{ justifyItems: 'center' }}>
                  {myPlayer?.hand.map(card => (
                    <div key={card.id} style={{ position: 'relative' }}>
                      {card.id === gameState.pendingDecision!.card.id && (
                        <div style={{ position: 'absolute', inset: -4, borderRadius: 16, background: 'var(--blue-primary)', opacity: 0.3, filter: 'blur(8px)', animation: 'pulse 2s infinite' }} />
                      )}
                      <div style={{ transform: card.id === gameState.pendingDecision!.card.id ? 'translateY(-12px)' : 'none', transition: 'transform 0.2s ease', position: 'relative', zIndex: 1 }}>
                        <GameCardComponent card={card} compact onClick={() => onPlayCard(card)} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Decision Options */}
            <div style={{ flex: '1 1 240px', minWidth: 220, display: 'flex', flexDirection: 'column', gap: 8, borderLeft: '1px solid rgba(0,0,0,0.1)', paddingLeft: 24, animation: 'fadeIn 0.3s ease', paddingRight: 8 }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-dark)', marginBottom: 4, fontFamily: 'var(--font-display)' }}>
                {i18n.language === 'hi' && gameState.pendingDecision.card.nameHi ? gameState.pendingDecision.card.nameHi : gameState.pendingDecision.card.name}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 12 }}>
                {i18n.language === 'hi' && gameState.pendingDecision.card.flavorHi ? gameState.pendingDecision.card.flavorHi : gameState.pendingDecision.card.flavor}
              </p>
              
              {gameState.pendingDecision.card.options?.map(opt => {
                const colors = {
                  spend: { bg: 'rgba(234, 88, 12, 0.08)', border: '#ea580c', labelColor: '#c2410c', hoverBg: 'rgba(234, 88, 12, 0.15)', borderFocus: '#9a3412' },
                  save: { bg: 'rgba(16, 185, 129, 0.08)', border: '#10b981', labelColor: '#047857', hoverBg: 'rgba(16, 185, 129, 0.15)', borderFocus: '#059669' },
                  invest: { bg: 'rgba(59, 130, 246, 0.08)', border: '#3b82f6', labelColor: '#1d4ed8', hoverBg: 'rgba(59, 130, 246, 0.15)', borderFocus: '#1e40af' }
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
                      padding: '8px 12px', borderRadius: 10,
                      background: c.bg, border: `2px solid ${c.border}`,
                      color: 'var(--text-dark)', cursor: 'pointer', textAlign: 'left',
                      transition: 'all 0.2s', fontFamily: 'inherit',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = c.hoverBg; (e.currentTarget as HTMLButtonElement).style.borderColor = c.borderFocus }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = c.bg; (e.currentTarget as HTMLButtonElement).style.borderColor = c.border }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 800, color: c.labelColor, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                      {i18n.language === 'hi' && opt.type === 'spend' ? 'खर्च' : i18n.language === 'hi' && opt.type === 'save' ? 'बचत' : i18n.language === 'hi' && opt.type === 'invest' ? 'निवेश' : opt.type}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 2 }}>
                      {i18n.language === 'hi' && opt.labelHi ? opt.labelHi : (i18n.language === 'hi' && opt.label === 'Spend' ? 'खर्च करें' : i18n.language === 'hi' && opt.label === 'Save' ? 'बचत करें' : i18n.language === 'hi' && opt.label === 'Invest' ? 'निवेश करें' : opt.label)}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4, lineHeight: 1.2 }}>
                      {i18n.language === 'hi' && opt.descriptionHi ? opt.descriptionHi : opt.description}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: effectVal >= 0 ? '#059669' : '#c2410c', fontFamily: 'var(--font-display)' }}>
                      {sign}{formatWealth(Math.abs(effectVal))}
                      {opt.effect.type === 'wealth_next_turn' && <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginLeft: 4 }}>next turn</span>}
                      {opt.effect.type === 'wealth_end_game' && <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginLeft: 4 }}>at game end</span>}
                    </div>
                    {opt.investRisk && opt.failEffect && (
                      <div style={{ fontSize: 12, color: '#dc2626', fontWeight: 700, marginTop: 4, background: 'rgba(220, 38, 38, 0.1)', padding: '4px 8px', borderRadius: 6, display: 'inline-block' }}>
                        ⚠️ {opt.investRisk}% Risk: {failVal < 0 ? '-' : '+'}{formatWealth(Math.abs(failVal))}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Action card targeting phase (Select opponent) */}
        {uiPhase === 'targeting' && gameState.pendingTarget && (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ fontSize: 22, marginBottom: 12 }}>🎯</div>
            <div style={{ fontSize: 18, color: '#1e293b', fontWeight: 800, marginBottom: 8 }}>
              {t('game.selectTarget', { card: gameState.pendingTarget.card.name })}
            </div>
            <div style={{ fontSize: 15, color: '#475569', marginBottom: 20 }}>
              {t('game.clickOpponentTarget')}
            </div>
            <Button variant="secondary" onClick={onCancelTargeting}>{t('common.cancel')}</Button>
          </div>
        )}
      </div>
      {/* END LEFT COLUMN */}
      </div>

      {/* RIGHT COLUMN: Game Log & Deck (Desktop only if space tight) */}
      <div className="game-right-col" style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto', paddingRight: 8, paddingBottom: 32 }}>
      <GameLog log={gameState.log} playerName={myPlayer?.name} />
      </div>
    </div>
  )
}
