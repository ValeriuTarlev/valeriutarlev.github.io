import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  {
    icon: <FiLinkedin size={28} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/valeriutarlev',
    href: 'https://linkedin.com/in/valeriutarlev',
    color: '#0A66C2',
  },
  {
    icon: <FiGithub size={28} />,
    label: 'GitHub',
    value: 'github.com/ValeriuTarlev',
    href: 'https://github.com/ValeriuTarlev',
    color: '#f0f0f0',
  },
  {
    icon: <FiMail size={28} />,
    label: 'Email',
    value: 'valeriu.tarlev17@gmail.com',
    href: 'mailto:valeriu.tarlev17@gmail.com',
    color: '#FF6B35',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p style={{ color: '#FF6B35', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Say Hello</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem' }}>Get In Touch</h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF4500, #FF6B35)', margin: '0 auto 1.5rem' }} />
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.8 }}>
            Whether you&apos;re a recruiter, a fellow IT professional, or just want to connect — feel free to reach out.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '2rem 1.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                textDecoration: 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              whileHover={{
                y: -5,
                boxShadow: `0 10px 35px ${link.color}22`,
                borderColor: `${link.color}55`,
              }}
            >
              <div style={{ color: link.color }}>{link.icon}</div>
              <div>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>{link.label}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
