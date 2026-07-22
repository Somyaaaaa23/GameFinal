import { motion } from 'framer-motion'
import type { GameCard as GameCardType } from '../types/game'
import { useTranslation } from 'react-i18next'

interface GameCardProps {
  card: GameCardType
  onClick?: () => void
  selected?: boolean
  disabled?: boolean
  compact?: boolean
  faceDown?: boolean
}

const TIER_STYLES = {
  common: {
    bg: 'linear-gradient(180deg, #515151 0%, #151515 100%)',
    badgeText: '#A1A1A1',
    badgeBg: '#2A2A2A',
  },
  rare: {
    bg: 'linear-gradient(180deg, #1A4B8B 0%, #0B1930 100%)',
    badgeText: '#60A5FA',
    badgeBg: '#1E3A8A',
  },
  epic: {
    bg: 'linear-gradient(180deg, #5D2E8C 0%, #1A0B2E 100%)',
    badgeText: '#C084FC',
    badgeBg: '#4C1D95',
  },
  legendary: {
    bg: 'linear-gradient(180deg, #B5842F 0%, #30200B 100%)',
    badgeText: '#FDE047',
    badgeBg: '#713F12',
  }
}

export function GameCard({ card, onClick, selected, disabled, compact, faceDown }: GameCardProps) {
  const { t, i18n } = useTranslation()
  const tierStyle = TIER_STYLES[card.tier] ?? TIER_STYLES.common

  if (faceDown) {
    return (
      <div style={{ width: compact ? 120 : 220, height: compact ? 160 : 320, background: 'linear-gradient(180deg, #1A4B8B 0%, #0B1930 100%)', borderRadius: 16, border: '4px solid #00202E' }} />
    )
  }

  const title = i18n.language === 'hi' && card.nameHi ? card.nameHi : card.name;
  const flavor = i18n.language === 'hi' && card.flavorHi ? card.flavorHi : card.flavor;

  return (
    <motion.button
      layoutId={card.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!disabled ? { scale: 1.05, y: -5 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      onClick={!disabled ? onClick : undefined}
      style={{
        width: compact ? 140 : 220,
        height: compact ? 200 : 320,
        background: tierStyle.bg,
        borderRadius: 16,
        border: '4px solid #00202E',
        padding: compact ? 12 : 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        boxShadow: selected ? '0 0 20px #66D575' : '0 8px 16px rgba(0,0,0,0.4)',
        outline: 'none',
      }}
    >
      <div style={{ fontSize: compact ? 36 : 48, marginBottom: 12 }}>
        💼
      </div>
      
      <div style={{ 
        background: tierStyle.badgeBg, color: tierStyle.badgeText, 
        padding: '4px 12px', borderRadius: 12, fontSize: compact ? 10 : 12, fontWeight: 700,
        textTransform: 'uppercase', marginBottom: compact ? 8 : 16
      }}>
        {t(`common.${card.tier}`, card.tier.toUpperCase())}
      </div>

      <h3 style={{ 
        fontSize: compact ? 16 : 20, fontWeight: 800, textAlign: 'center', 
        marginBottom: compact ? 4 : 12, lineHeight: 1.2, fontFamily: 'Avengenz, sans-serif',
        display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
      }}>
        {title}
      </h3>

      {!compact && (
        <p style={{ fontSize: 13, color: '#D1D5DB', textAlign: 'center', lineHeight: 1.4, flex: 1, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {flavor}
        </p>
      )}

      {!compact && card.type === 'decision' && (
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: 8, 
          fontSize: 12, fontWeight: 700, width: '100%', textAlign: 'center', color: '#66D575',
          marginTop: 'auto'
        }}>
          OPPORTUNITY
        </div>
      )}
    </motion.button>
  )
}
