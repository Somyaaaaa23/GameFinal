import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
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

        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1e293b', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>
            Daily Login Reward
          </h2>
          <p style={{ color: '#64748b', fontSize: 16 }}>Come back every day to earn more Daanik Coins!</p>
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
            <Button size="lg" variant="gold" onClick={handleClaim} style={{ padding: '16px 48px', fontSize: 20 }}>
              Claim {currentReward.amount} DC
            </Button>
          ) : (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              style={{ fontSize: 20, fontWeight: 800, color: '#10b981' }}
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
  const bg = isToday ? '#fef08a' : isPast ? '#dcfce7' : '#ffffff'
  const border = isToday ? '#eab308' : isPast ? '#22c55e' : '#cbd5e1'
  
  return (
    <div style={{
      background: bg, border: `2px solid ${border}`, borderRadius: 12,
      padding: '12px 4px', textAlign: 'center',
      position: 'relative', opacity: isPast ? 0.6 : 1,
      transform: isToday ? 'scale(1.05)' : 'scale(1)',
      boxShadow: isToday ? '0 8px 16px rgba(234, 179, 8, 0.3)' : 'none',
      transition: 'all 0.3s'
    }}>
      {isPast && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, zIndex: 10 }}>
          ✓
        </div>
      )}
      <div style={{ fontSize: 12, fontWeight: 700, color: '#64748b', marginBottom: 4 }}>DAY {reward.day}</div>
      <div style={{ fontSize: 24, marginBottom: 4 }}>{reward.icon}</div>
      <div style={{ fontSize: 14, fontWeight: 800, color: '#0f172a' }}>{reward.amount} DC</div>
      {reward.label && <div style={{ fontSize: 10, color: '#d97706', fontWeight: 800, marginTop: 2 }}>{reward.label}</div>}
    </div>
  )
}
