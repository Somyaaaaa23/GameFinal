import { useState, useEffect } from 'react'
import { ScrollText, ChevronDown, ChevronUp } from 'lucide-react'

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
            Game Log
          </h3>
        </div>
        <div className="mobile-only" style={{ color: 'var(--text-muted)', display: mobileCompact ? 'block' : 'none' }}>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      <div className={`game-log-content ${isExpanded ? 'expanded' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingRight: 4, overflowY: 'auto', maxHeight: 'calc(100vh - 160px)' }}>
        {log.length === 0 ? (
          <div style={{ fontSize: 15, color: 'var(--text-muted)', fontStyle: 'italic' }}>Game started. Waiting for first move...</div>
        ) : (
          log.slice(0, itemsToShow).map((entry, i) => {
            const entryStr = typeof entry === 'string' ? entry : String(entry);
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
                {i === 0 ? <TypewriterText text={entryStr} /> : entryStr}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
