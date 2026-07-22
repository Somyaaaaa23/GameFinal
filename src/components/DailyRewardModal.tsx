import { useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { playSound } from '../lib/audio'

interface DailyRewardModalProps {
  onClose: () => void
  onClaim: (day: number, rewardAmount: number) => void
  currentStreak: number
}

export function DailyRewardModal({ onClose, onClaim, currentStreak }: DailyRewardModalProps) {
  const [claimed, setClaimed] = useState(false)
  
  const REWARDS = [
    { day: 1, amount: 10, icon: '🪙' },
    { day: 2, amount: 20, icon: '🪙' },
    { day: 3, amount: 30, icon: '🪙' },
    { day: 4, amount: 50, icon: '💰' },
    { day: 5, amount: 100, icon: '💰' },
    { day: 6, amount: 200, icon: '💎' },
    { day: 7, amount: 500, icon: '🎁', label: 'Mega Bonus' },
  ]

  const todayIndex = Math.min(currentStreak, 6)
  const currentReward = REWARDS[todayIndex]

  const handleClaim = () => {
    playSound('win')
    setClaimed(true)
    setTimeout(() => {
      onClaim(todayIndex + 1, currentReward.amount)
    }, 2500)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16
    }}>
      {claimed && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={300} />}
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        style={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
          borderRadius: 24, padding: '32px 24px', maxWidth: 500, width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
          position: 'relative', overflow: 'hidden'
        }}
      >
        <button 
          onClick={onClose} 
          style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#64748b' }}
        >
          ×
        </button>

        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#000', fontFamily: 'var(--font-display)', marginBottom: 8 }}>
            Daily Login reward
          </h2>
          <p style={{ color: '#64748b', fontSize: 16 }}>Come back every day to earn more daanik coins</p>
        </div>

        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 24 
        }}>
          {REWARDS.slice(0, 4).map((r, i) => (
            <RewardBox key={r.day} reward={r} isToday={i === todayIndex} isPast={i < todayIndex} />
          ))}
        </div>
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 32 
        }}>
          {REWARDS.slice(4).map((r, i) => (
            <RewardBox key={r.day} reward={r} isToday={i + 4 === todayIndex} isPast={i + 4 < todayIndex} />
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {!claimed ? (
            <button 
              onClick={handleClaim} 
              style={{ 
                padding: '16px 40px', fontSize: 22, fontWeight: 700,
                background: '#0F203B', color: '#4ADE80',
                border: 'none', borderRadius: 12, cursor: 'pointer',
                boxShadow: '0 8px 16px rgba(15, 32, 59, 0.2)'
              }}
            >
              Claim {currentReward.amount}DC
            </button>
          ) : (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              style={{ fontSize: 22, fontWeight: 800, color: '#10b981' }}
            >
              ✓ Claimed!
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

function RewardBox({ reward, isToday, isPast }: { reward: any, isToday: boolean, isPast: boolean }) {
  const bg = isToday ? '#FDE68A' : isPast ? '#D8F3C6' : '#FFFFFF'
  const border = isToday ? '#FBBF24' : isPast ? '#B7E495' : '#E2E8F0'
  const textColor = isToday ? '#4B5563' : isPast ? '#7B966F' : '#64748b'
  const amountColor = isToday ? '#1A202C' : isPast ? '#7B966F' : '#475569'
  
  return (
    <div style={{
      background: bg, border: `2px solid ${border}`, borderRadius: 16,
      padding: '16px 8px', textAlign: 'center',
      position: 'relative', 
      transform: isToday ? 'scale(1.05)' : 'scale(1)',
      boxShadow: isToday ? '0 12px 24px rgba(251, 191, 36, 0.4)' : '0 4px 12px rgba(0,0,0,0.02)',
      transition: 'all 0.3s', zIndex: isToday ? 2 : 1
    }}>
      {isPast && (
        <div style={{ 
          position: 'absolute', bottom: -8, right: -8, 
          width: 32, height: 32, borderRadius: '50%', background: '#65A30D',
          border: '3px solid #D8F3C6', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 18, fontWeight: 'bold', zIndex: 10,
          boxShadow: '0 4px 8px rgba(101, 163, 13, 0.4)'
        }}>
          ✓
        </div>
      )}
      <div style={{ fontSize: 16, fontWeight: 800, color: textColor, marginBottom: 8, textTransform: 'uppercase' }}>DAY {reward.day}</div>
      <div style={{ fontSize: 40, marginBottom: 12, filter: isPast ? 'grayscale(80%) opacity(50%)' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>{reward.icon}</div>
      <div style={{ fontSize: 18, fontWeight: 800, color: amountColor }}>{reward.amount} DC</div>
      {reward.label && <div style={{ fontSize: 12, color: '#d97706', fontWeight: 800, marginTop: 4 }}>{reward.label}</div>}
    </div>
  )
}
