import { motion } from 'framer-motion'
import type { GameCard as GameCardType } from '../types/game'
import { FileWarning, Shield, Zap, IndianRupee } from 'lucide-react'
import './GameCard.css'

interface GameCardProps {
  card: GameCardType
  onClick?: () => void
  selected?: boolean
  disabled?: boolean
  compact?: boolean
  faceDown?: boolean
}

// Map card types to background themes and button labels
const TYPE_CONFIG = {
  action: {
    bgTop: '#4c1115', bgBottom: '#271315',
    icon: Zap,
    btnClass: 'action-btn',
    btnText: 'Action Card',
    glowColor: '255, 70, 70', // Red
  },
  defense: {
    bgTop: '#15274e', bgBottom: '#172141',
    icon: Shield,
    btnClass: 'defense-btn',
    btnText: 'Defense Card',
    glowColor: '36, 119, 242', // Blue
  },
  decision: {
    bgTop: '#063f2b', bgBottom: '#092b22',
    icon: FileWarning,
    btnClass: '', // no explicit class for decision in template, we'll use inline
    btnText: 'Decision Card',
    glowColor: '60, 255, 170', // Green
  }
}

// Map tiers to border/accent colors
const TIER_CONFIG = {
  common: {
    accent: 'rgba(255, 255, 255, 0.4)',
    light: 'rgba(255, 255, 255, 0.8)',
    glowOpacity: 0.1,
  },
  rare: {
    accent: '#2477f2',
    light: '#61a0ff',
    glowOpacity: 0.35,
  },
  epic: {
    accent: '#8d3df2',
    light: '#b867ff',
    glowOpacity: 0.45,
  },
  legendary: {
    accent: '#eab308', // Gold
    light: '#fde047',
    glowOpacity: 0.5,
  }
}

export function GameCard({ card, onClick, selected, disabled, compact, faceDown }: GameCardProps) {
  const typeCfg = TYPE_CONFIG[card.type] ?? TYPE_CONFIG.decision
  const tierCfg = TIER_CONFIG[card.tier] ?? TIER_CONFIG.common
  const Icon = typeCfg.icon

  if (faceDown) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`game-card-premium ${compact ? 'compact' : ''}`}
        style={{
          background: 'linear-gradient(135deg, #004030, #002020)',
          border: '3px dashed #FFD050',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        }}
      >
        <IndianRupee style={{ color: '#facc15' }} size={compact ? 24 : 48} />
      </motion.div>
    )
  }

  // Construct CSS Variables
  const cssVars = {
    '--bg-top': typeCfg.bgTop,
    '--bg-bottom': typeCfg.bgBottom,
    '--accent': selected ? '#eab308' : tierCfg.accent,
    '--accent-light': selected ? '#fef08a' : tierCfg.light,
    '--accent-glow': selected ? 'rgba(234, 179, 8, 0.6)' : `rgba(${typeCfg.glowColor}, ${tierCfg.glowOpacity})`,
    '--icon-glow-inner': `rgba(${typeCfg.glowColor}, 0.15)`,
    '--icon-glow-outer': `rgba(${typeCfg.glowColor}, 0.25)`,
    '--icon-glow-outer2': `rgba(${typeCfg.glowColor}, 0.15)`,
  } as React.CSSProperties

  const classNames = [
    'game-card-premium',
    compact ? 'compact' : '',
    selected ? 'is-selected' : '',
    disabled ? 'disabled' : ''
  ].filter(Boolean).join(' ')

  return (
    <motion.button
      layoutId={card.id}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      onClick={!disabled ? onClick : undefined}
      className={classNames}
      style={cssVars}
    >
      <div className="rarity">{card.tier}</div>

      <div className="icon-circle">
        <Icon className="card-icon" />
      </div>

      <h2 className="card-title">{card.name}</h2>

      <p className="card-desc">
        {card.flavor}
      </p>

      {/* Bottom element depends on card type & features */}
      {card.type === 'decision' && card.options ? (
        <div className="bottom-bars">
          {card.options.map(opt => {
             const optColor = opt.type === 'save' ? 'bar-green' : opt.type === 'invest' ? 'bar-blue' : 'bar-red'
             return <span key={opt.type} className={optColor}></span>
          })}
        </div>
      ) : (
        <div className={`card-button ${typeCfg.btnClass}`}>
          {typeCfg.btnText}
        </div>
      )}
    </motion.button>
  )
}
