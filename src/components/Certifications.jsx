import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiAward } from 'react-icons/fi'

const certifications = [
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    issued: 'May 2025',
    expires: 'May 2028',
    credentialUrl: 'https://www.credly.com/badges/0b23aa4c-42bf-4185-99f6-cd0b9942cdbc',
    logo: '/SecurityPlus Logo Certified CE.jpg',
    color: '#FF4500',
  },
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    issued: 'July 2026',
    expires: 'July 2029',
    credentialUrl: 'https://www.credly.com/badges/f89ffb10-7e49-458a-a49b-42fbdd781adf/public_url',
    logo: '/ccna_med.jpg',
    color: '#049FD9',
  },
  {
    name: 'Fortinet Certified Fundamentals Cybersecurity',
    issuer: 'Fortinet',
    issued: 'May 2025',
    expires: 'May 2027',
    credentialId: '6503656899VT',
    credentialUrl: 'https://www.credly.com/badges/b216d81b-a142-4cf5-983b-8d6b54b6c505',
    logo: '/Fortinet-Logo-History-2-1536x960.png',
    color: '#DA3832',
  },
  {
    name: 'Cracking into HTB — Learning Path',
    issuer: 'Hack The Box',
    issued: 'Completed',
    credentialUrl: 'https://github.com/ValeriuTarlev/htb-cracking-path',
    logo: null,
    color: '#9fef00',
    isHTB: true,
  },
  {
    name: 'Cybersecurity Job Simulation',
    issuer: 'Telstra / Forage',
    issued: '2024',
    credentialUrl: '#',
    logo: null,
    color: '#0090D8',
  },
  {
    name: 'Technology Training',
    issuer: 'JP Morgan Chase / Forage',
    issued: '2024',
    credentialUrl: '#',
    logo: null,
    color: '#003087',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#FF6B35', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Credentials</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>Certifications</h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF4500, #FF6B35)', margin: '1rem auto 0' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              whileHover={{
                y: -4,
                boxShadow: `0 8px 35px ${cert.color}22`,
                borderColor: `${cert.color}55`,
              }}
            >
              {/* Logo / Icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {cert.logo ? (
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: '#fff',
                    padding: '4px',
                    flexShrink: 0,
                  }}>
                    <img src={cert.logo} alt={cert.issuer} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                ) : (
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '10px',
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: cert.color,
                  }}>
                    <FiAward size={24} />
                  </div>
                )}
                <div>
                  <p style={{ fontSize: '0.75rem', color: cert.color, fontWeight: 600, marginBottom: '0.15rem' }}>{cert.issuer}</p>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.3 }}>{cert.name}</h3>
                </div>
              </div>

              {/* Meta */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Issued:</span> {cert.issued}
                </p>
                {cert.expires && (
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Expires:</span> {cert.expires}
                  </p>
                )}
                {cert.credentialId && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {/* View Credential */}
              {cert.credentialUrl && cert.credentialUrl !== '#' && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: cert.color,
                    marginTop: 'auto',
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.65rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
                >
                  View Credential <FiExternalLink size={13} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
