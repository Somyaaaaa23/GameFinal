import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  icon: string;
  opacity: number;
}

const ICONS = ['🪙', '₹', '💎', '📈', '🛡️', '⚡']

export function FloatingBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate static initial positions to avoid hydration mismatch,
    // or just run entirely on client side after mount.
    const newParticles: Particle[] = []
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // random start X (%)
        y: Math.random() * 100, // start anywhere on screen
        size: Math.random() * 30 + 15, // size 15-45px
        duration: Math.random() * 30 + 20, // 20-50s to float up
        delay: Math.random() * -20, // Negative delay so they start already moving!
        icon: ICONS[Math.floor(Math.random() * ICONS.length)],
        opacity: Math.random() * 0.2 + 0.15, // more visible (0.15 - 0.35)
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
    }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: `${p.y}vh`, x: `${p.x}vw`, opacity: 0, scale: 0 }}
          animate={{
            y: '-20vh',
            x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`, `${p.x}vw`], // gentle sway
            opacity: [0, p.opacity, p.opacity, 0],
            scale: [0, 1, 1, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            fontSize: p.size,
            filter: 'blur(0.5px)',
            userSelect: 'none',
          }}
        >
          {p.icon}
        </motion.div>
      ))}
      
      {/* Optional Gaming Grid overlay (subtle scanlines) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.8,
        maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 30%, black 100%)',
      }} />
    </div>
  )
}
