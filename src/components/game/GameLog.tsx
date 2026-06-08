import { useState, useEffect } from 'react'
import { ScrollText, ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { BASE_CARDS, ACTION_CARDS, LEGENDARY_CARDS } from '../../data/cards'
import { LEVEL_SITUATION_CARDS } from '../../data/levelCards'

const cardTranslationMap: Record<string, string> = {}
;[...BASE_CARDS, ...ACTION_CARDS, ...LEGENDARY_CARDS, ...LEVEL_SITUATION_CARDS].forEach(c => {
  if (c.nameHi) cardTranslationMap[c.name] = c.nameHi
})

function translateLogEntry(text: string, lang: string) {
  if (lang !== 'hi') return text
  
  let translated = text

  // Common phrases
  translated = translated.replace('Game started! First to', 'खेल शुरू हुआ! पहले')
  translated = translated.replace('wins.', 'जीतता है।')
  translated = translated.replace('Deck reshuffled.', 'डेक फिर से मिला दिया गया।')
  translated = translated.replace('Fresh deck created.', 'नया डेक बनाया गया।')
  translated = translated.replace('played', 'ने खेला')
  translated = translated.replace('is skipping their turn.', 'अपनी बारी छोड़ रहे हैं।')
  translated = translated.replace('took too long! Turn skipped.', 'ने बहुत समय लिया! बारी छूट गई।')
  translated = translated.replace('defended with', 'के साथ बचाव किया')
  translated = translated.replace('Auto-Defended!', 'स्वतः बचाव किया!')
  translated = translated.replace('Investment Failed!', 'निवेश विफल रहा!')
  translated = translated.replace('Season Boost!', 'सीज़न बूस्ट!')
  translated = translated.replace('Level Complete! Reached', 'स्तर पूरा हुआ! तक पहुंचे')
  translated = translated.replace('in time.', 'समय पर।')
  translated = translated.replace('Turn limit reached! You failed to reach the goal.', 'बारी की सीमा समाप्त! आप लक्ष्य तक पहुँचने में विफल रहे।')
  translated = translated.replace('reached', 'पहुंच गया')
  translated = translated.replace('and WINS!', 'और जीत गया!')
  translated = translated.replace('Everyone else forfeited!', 'बाकी सभी ने हार मान ली!')
  translated = translated.replace('affects all!', 'सबको प्रभावित करता है!')

  translated = translated.replace('SPEND', 'खर्च')
  translated = translated.replace('SAVE', 'बचत')
  translated = translated.replace('INVEST', 'निवेश')

  // Translate cards
  for (const [en, hi] of Object.entries(cardTranslationMap)) {
    if (translated.includes(en)) {
      translated = translated.replace(en, hi)
    }
  }

  return translated
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("")
  
  useEffect(() => {
    if (typeof text !== 'string') return;
    let index = 0
    setDisplayed("")
    const interval = setInterval(() => {
      setDisplayed(text.substring(0, index + 1))
      index++
      if (index >= text.length) clearInterval(interval)
    }, 20) // 20ms per character for a fast typewriter effect
    
    return () => clearInterval(interval)
  }, [text])
  
  return <>{displayed}</>
}

interface GameLogProps {
  log: string[]
  mobileCompact?: boolean
  playerName?: string
}

export function GameLog({ log, mobileCompact, playerName }: GameLogProps) {
  const { t, i18n } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(!mobileCompact)
  const itemsToShow = (!mobileCompact || isExpanded) ? 10 : 1

  const getEntryColor = (entry: string, isFirst: boolean) => {
    if (!playerName || typeof entry !== 'string') return isFirst ? 'var(--text-dark)' : 'var(--text-muted)'

    const iPlayedIt = entry.startsWith(`${playerName} played`) || entry.startsWith('You played')
    const iAmTarget = entry.includes(`→ ${playerName}`) || entry.includes('→ You')
    const isDecision = /→\s+[A-Z]+\s+\(/.test(entry)

    // If I got attacked
    if (iAmTarget) {
      if (entry.includes('(-₹')) return '#b91c1c'
      if (entry.includes('(+₹')) return '#15803d'
    }

    // If I played a card
    if (iPlayedIt) {
      if (isDecision && entry.includes('(-₹')) return '#b91c1c'
      if (entry.includes('(+₹')) return '#15803d'
      // If it's an attack on someone else that doesn't gain me money, leave it default!
    }

    // Global events
    if (entry.includes('affects all!')) {
      if (entry.includes('(-₹')) return '#b91c1c'
      if (entry.includes('(+₹')) return '#15803d'
    }

    return isFirst ? 'var(--text-dark)' : 'var(--text-muted)'
  }

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderRadius: 20,
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: 12, marginBottom: 4, cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ScrollText size={18} color="var(--text-muted)" />
          <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
            {t('game.gameLog')}
          </h3>
        </div>
        <div className="mobile-only" style={{ color: 'var(--text-muted)', display: mobileCompact ? 'block' : 'none' }}>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      <div className={`game-log-content ${isExpanded ? 'expanded' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingRight: 4, overflowY: 'auto', maxHeight: 'calc(100vh - 160px)' }}>
        {log.length === 0 ? (
          <div style={{ fontSize: 15, color: 'var(--text-muted)', fontStyle: 'italic' }}>
            {i18n.language === 'hi' ? 'खेल शुरू हुआ। पहली चाल की प्रतीक्षा की जा रही है...' : 'Game started. Waiting for first move...'}
          </div>
        ) : (
          log.slice(0, itemsToShow).map((entry, i) => {
            const entryStr = typeof entry === 'string' ? entry : String(entry);
            const translatedEntry = translateLogEntry(entryStr, i18n.language);
            return (
              <div key={i} style={{
                fontSize: 15,
                color: getEntryColor(entryStr, i === 0),
                fontWeight: i === 0 ? 600 : 400,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 8,
                lineHeight: 1.5,
              }}>
                <span style={{ color: i === 0 ? 'var(--blue-deep)' : 'var(--text-muted)', marginTop: 2 }}>•</span>
                {i === 0 ? <TypewriterText text={translatedEntry} /> : translatedEntry}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
