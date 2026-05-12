import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiShield, FiHeart } from 'react-icons/fi'

const experiences = [
  {
    icon: <FiBriefcase size={20} />,
    title: 'PC Support Specialist',
    company: 'Louisiana State University at Alexandria',
    type: 'Full-time · On-site',
    period: 'July 2024 — Present',
    bullets: [
      'Managing and maintaining over 1,000 university devices (servers, workstations, laptops, and virtual machines) using KACE Systems Management, Microsoft Intune, and Microsoft Azure.',
      'Deploy, configure, image, and upgrade devices across the university infrastructure.',
      'Monitor CrowdStrike endpoint alerts across 1,000+ devices, escalating incidents as needed.',
      'Manage student and staff accounts and laptop configurations via Microsoft Intune and Azure.',
      'Set up computers, projectors, TVs, and smart boards for faculty, staff, and students.',
      'Configure and troubleshoot Xerox printers and peripheral devices.',
      'Manage and resolve 120–150 support tickets per month through Freshdesk, supporting 2,000+ students and staff.',
      'Supervise and coordinate a team of 4 student IT workers.',
    ],
  },
  {
    icon: <FiShield size={20} />,
    title: 'IT & Cybersecurity Intern',
    company: 'Louisiana State University at Alexandria',
    type: 'Part-time · On-site',
    period: 'February 2025 — May 2025',
    bullets: [
      'Monitored and assessed security threats using CrowdStrike, DarkTrace, Microsoft Defender, and Microsoft Azure.',
      'Investigated suspicious network activity by analyzing Azure logs, identifying unauthorized VPN usage, and assessing threats through IP analysis.',
      'Re-imaged and secured devices, updated security software, and managed device configurations.',
      'Provided hands-on IT and network support including workstation replacements, printer setups, and network maintenance.',
    ],
  },
  {
    icon: <FiHeart size={20} />,
    title: 'Volunteer Soccer Coach',
    company: 'Crossroads Soccer Association',
    type: 'Volunteer · Seasonal',
    period: 'September 2023 — Present',
    bullets: [
      'Coach young athletes in fundamental soccer skills, teamwork, and sportsmanship.',
      'Design and lead training sessions focused on coordination, development, and game strategy.',
      'Create a positive, encouraging environment that promotes discipline and a passion for the sport.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#FF6B35', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>My Journey</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>Experience</h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF4500, #FF6B35)', margin: '1rem auto 0' }} />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '7px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #FF4500, transparent)',
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ position: 'relative', marginBottom: '3rem' }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '-2rem',
                top: '0.15rem',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF4500, #FF6B35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '8px',
              }} />

              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.75rem',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,69,0,0.4)'; e.currentTarget.style.boxShadow = '0 4px 30px rgba(255,69,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                      <span style={{ color: '#FF6B35' }}>{exp.icon}</span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700 }}>{exp.title}</h3>
                    </div>
                    <p style={{ color: '#FF6B35', fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.2rem' }}>{exp.type}</p>
                  </div>
                  <span style={{
                    padding: '0.3rem 0.8rem',
                    background: 'rgba(255,69,0,0.1)',
                    border: '1px solid rgba(255,69,0,0.2)',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    color: '#FF6B35',
                    whiteSpace: 'nowrap',
                  }}>
                    {exp.period}
                  </span>
                </div>

                <ul style={{ paddingLeft: '1.1rem' }}>
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '0.35rem' }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
