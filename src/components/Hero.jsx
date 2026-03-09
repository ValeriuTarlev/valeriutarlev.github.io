import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const phrases = [
  'IT Infrastructure & Security Professional',
  'Systems Administrator',
  'Network Engineer',
  'Cybersecurity Enthusiast',
]

function useTypingEffect(phrases) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 60)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 35)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setPhraseIndex(i => (i + 1) % phrases.length)
    }

    setText(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex, phrases])

  return text
}

export default function Hero() {
  const typedText = useTypingEffect(phrases)
  const [particlesInit, setParticlesInit] = useState(false)

  const initParticles = useCallback(async (engine) => {
    await loadSlim(engine)
    setParticlesInit(true)
  }, [])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 0%, #1a0800 0%, #0a0a0a 70%)',
      }}
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={initParticles}
        style={{ position: 'absolute', inset: 0 }}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              grab: { distance: 160, links: { opacity: 0.5 } },
              push: { quantity: 2 },
            },
          },
          particles: {
            color: { value: '#FF4500' },
            links: {
              color: '#FF4500',
              distance: 130,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: true,
              speed: 0.6,
              straight: false,
            },
            number: { density: { enable: true, area: 900 }, value: 60 },
            opacity: { value: { min: 0.1, max: 0.4 } },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2.5 } },
          },
          detectRetina: true,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 1.5rem', maxWidth: '860px' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: '#FF6B35', fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            background: 'linear-gradient(135deg, #f0f0f0 40%, #FF6B35)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Valeriu Tarlev
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            fontWeight: 600,
            color: '#FF6B35',
            minHeight: '2.4rem',
            marginBottom: '1rem',
          }}
        >
          {typedText}
          <span style={{ borderRight: '2px solid #FF6B35', marginLeft: '2px', animation: 'blink 0.8s step-end infinite' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '0.6rem', letterSpacing: '0.04em' }}
        >
          B.S. Computer Science &nbsp;|&nbsp; CompTIA Security+ &nbsp;|&nbsp; LSUA 2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' }}
        >
          Building secure, scalable IT infrastructure. Based in Alexandria, Louisiana.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          <a
            href="#projects"
            style={{
              padding: '0.8rem 2rem',
              background: 'linear-gradient(135deg, #FF4500, #FF6B35)',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: '#fff',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(255,69,0,0.4)' }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none' }}
          >
            View My Projects
          </a>
          <a
            href="https://linkedin.com/in/valeriutarlev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.8rem 2rem',
              border: '1px solid rgba(255,107,53,0.4)',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: '#FF6B35',
              transition: 'all 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.target.style.background = 'rgba(255,69,0,0.1)'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)' }}
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
        >
          {[
            { icon: <FiGithub size={22} />, href: 'https://github.com/ValeriuTarlev', label: 'GitHub' },
            { icon: <FiLinkedin size={22} />, href: 'https://linkedin.com/in/valeriutarlev', label: 'LinkedIn' },
            { icon: <FiMail size={22} />, href: 'mailto:valeriu.tarlev17@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: 'var(--text-secondary)', transition: 'color 0.2s, transform 0.2s', display: 'inline-flex' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#FF6B35'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, #FF4500, transparent)' }}
        />
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
