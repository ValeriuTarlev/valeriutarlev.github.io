import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{
      background: '#070707',
      borderTop: '1px solid rgba(255,69,0,0.1)',
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '1.1rem',
        fontWeight: 700,
        background: 'linear-gradient(90deg, #FF4500, #FF6B35)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.3rem',
      }}>
        Valeriu Tarlev
      </p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '1.25rem' }}>
        IT Infrastructure & Security Professional
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.4rem', marginBottom: '1.5rem' }}>
        {[
          { icon: <FiGithub size={18} />, href: 'https://github.com/ValeriuTarlev', label: 'GitHub' },
          { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/valeriutarlev', label: 'LinkedIn' },
          { icon: <FiMail size={18} />, href: 'mailto:valeriu.tarlev17@gmail.com', label: 'Email' },
        ].map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FF6B35'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            {icon}
          </a>
        ))}
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
        © 2025 Valeriu Tarlev. All rights reserved.
      </p>
    </footer>
  )
}
