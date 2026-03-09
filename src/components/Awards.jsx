import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const awards = [
  { emoji: '🏆', text: 'Best Student-Athlete of the Year (2023)', org: 'LSUA' },
  { emoji: '🏆', text: 'Best Student-Athlete Award (2025)', org: 'LSUA' },
  { emoji: '🥇', text: 'Freshman of the Year (2021)', org: 'LSUA Soccer' },
  { emoji: '📋', text: "Chancellor's List", org: 'Fall 2023, Spring 2024, Fall 2024' },
  { emoji: '⚽', text: "LSUA Men's Soccer Team Captain", org: '2023, 2024' },
]

export default function Awards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="awards" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#FF6B35', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Recognition</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>Awards & Recognition</h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF4500, #FF6B35)', margin: '1rem auto 0' }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.1rem 1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                transition: 'border-color 0.3s, transform 0.2s',
              }}
              whileHover={{ x: 6, borderColor: 'rgba(255,69,0,0.3)' }}
            >
              <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{award.emoji}</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{award.text}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
