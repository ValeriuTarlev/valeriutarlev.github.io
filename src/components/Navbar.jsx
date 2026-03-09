import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 2rem',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,69,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#home" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', background: 'linear-gradient(90deg, #FF4500, #FF6B35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        VT
      </a>

      {/* Desktop Links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: active === link.href.replace('#', '') ? '#FF6B35' : 'var(--text-secondary)',
                transition: 'color 0.3s',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = '#FF6B35'}
              onMouseLeave={e => e.target.style.color = active === link.href.replace('#', '') ? '#FF6B35' : 'var(--text-secondary)'}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            style={{
              padding: '0.45rem 1.1rem',
              background: 'linear-gradient(135deg, #FF4500, #FF6B35)',
              borderRadius: '6px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#fff',
              whiteSpace: 'nowrap',
            }}
          >
            Download Resume
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px' }}
        className="nav-hamburger"
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: '24px', height: '2px', background: '#FF6B35', borderRadius: '2px', transition: 'all 0.3s' }} />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: 'rgba(10,10,10,0.98)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,69,0,0.15)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
          className="nav-mobile"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: active === link.href.replace('#', '') ? '#FF6B35' : 'var(--text-primary)', fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a href="#" style={{ color: '#FF6B35', fontWeight: 600 }}>Download Resume</a>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
