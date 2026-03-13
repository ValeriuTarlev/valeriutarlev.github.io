import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '1,000+', label: 'Devices Managed' },
  { value: '2,000+', label: 'Users Supported' },
  { value: '120-150', label: 'Tickets / Month' },
  { value: '4', label: 'Student Workers Supervised' },
  { value: '3', label: 'Certifications' },
  { value: '2 Yrs', label: 'Team Captain' },
]

function AnimatedStat({ value, label, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{
        textAlign: 'center',
        padding: '1.25rem 1rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
      }}
    >
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.75rem',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #FF4500, #FF6B35)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.3rem',
      }}>
        {value}
      </div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 500 }}>{label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#FF6B35', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Who I Am</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>About Me</h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF4500, #FF6B35)', margin: '1rem auto 0' }} />
        </motion.div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '3.5rem' }}>
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              position: 'relative',
              width: '310px',
              height: '310px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF4500, #FF6B35)',
              padding: '3px',
            }}>
              <img
                src="/profile_photo.jpg"
                alt="Valeriu Tarlev"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  background: 'var(--bg-card)',
                }}
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
              I&apos;m an IT and Cybersecurity professional with a B.S. in Computer Science from Louisiana State University at Alexandria (2025) and CompTIA Security+ certified. I specialize in endpoint management, system administration, IT infrastructure, and cybersecurity monitoring, with hands-on experience managing enterprise-scale environments.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
              In my current role at LSUA, I manage over 1,000 devices using KACE, Microsoft Intune, and Microsoft Azure, monitor endpoint security through CrowdStrike, and supervise a team of student IT workers — all while supporting 2,000+ students and staff.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '0.97rem' }}>
              Outside of work, I build enterprise simulations in a personal IT lab, practice penetration testing on Hack The Box, and document real-world security incidents with full technical write-ups on GitHub.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.97rem' }}>
              I&apos;m actively growing toward roles in Systems Administration, Network Administration and Engineering, IT Infrastructure, and Cybersecurity — bringing both technical expertise and the leadership developed as a two-year captain of the LSUA Men&apos;s Soccer Team.
            </p>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          {stats.map((s, i) => (
            <motion.div key={s.label} transition={{ delay: i * 0.07 }}>
              <AnimatedStat value={s.value} label={s.label} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
