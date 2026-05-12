import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'IT Infrastructure Home Lab',
    description: 'Built a home IT lab environment to simulate enterprise-level infrastructure. Configured a Windows Server 2022 domain controller with Active Directory Domain Services, two Windows 11 client machines joined to the domain (valetech.com), static IP configuration, DNS, and DHCP setup.',
    tags: ['Windows Server 2022', 'Active Directory', 'DNS', 'DHCP', 'Virtualization', 'Networking'],
    github: 'https://github.com/ValeriuTarlev/lab_simulation_it_admin',
    status: 'Completed',
    statusColor: '#22c55e',
  },
  {
    title: 'Chrome Hijack Remediation',
    description: 'Documented a real-world security incident involving a browser hijack, registry policy injection, MSI corruption, and TrustedInstaller-level permission locks. Full technical write-up with IOCs, commands, and evidence screenshots published on GitHub.',
    tags: ['Malware Remediation', 'Windows Registry', 'Incident Response', 'CrowdStrike', 'Endpoint Security'],
    github: 'https://github.com/ValeriuTarlev/chrome-hijack-remediation',
    status: 'Completed',
    statusColor: '#22c55e',
  },
  {
    title: 'Hack The Box',
    description: 'Actively practicing penetration testing and ethical hacking on Hack The Box. Completed the Cracking into HTB learning path covering web exploitation, privilege escalation, file transfers, and penetration testing workflows. Worked on machines including Nibbles.',
    tags: ['Penetration Testing', 'Nmap', 'Metasploit', 'Burp Suite', 'Wireshark', 'Linux', 'Privilege Escalation'],
    github: 'https://github.com/ValeriuTarlev/htb-cracking-path',
    status: 'Completed',
    statusColor: '#22c55e',
  },
  {
    title: 'Forge — AI Workout Tracker',
    description: 'A dark, native-feeling PWA for logging gym sessions built with React, Vite, and the Anthropic API. Tracks sets, reps, weight, and RPE across a 4-day training split. Features an AI-generated 2-week training cycle based on workout history, a context-aware AI coach chat, a circular rest timer, and full session history. Installable to iPhone home screen via PWA.',
    tags: ['React', 'Vite', 'Anthropic API', 'PWA', 'AI', 'Vercel'],
    github: 'https://github.com/ValeriuTarlev/forge-workout',
    status: 'Ongoing',
    statusColor: '#3b82f6',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and built this portfolio site from scratch using React and Vite. Features tsParticles hero background, Framer Motion animations, responsive layout, and automated deployment via GitHub Actions to GitHub Pages.',
    tags: ['React', 'Vite', 'Framer Motion', 'tsParticles', 'GitHub Actions', 'GitHub Pages'],
    github: 'https://github.com/ValeriuTarlev/valeriutarlev.github.io',
    live: 'https://valeriutarlev.github.io',
    status: 'Live',
    statusColor: '#22c55e',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#FF6B35', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>What I&apos;ve Built</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>Projects</h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF4500, #FF6B35)', margin: '1rem auto 0' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                cursor: 'default',
              }}
              whileHover={{
                y: -6,
                boxShadow: '0 12px 40px rgba(255, 69, 0, 0.18)',
                borderColor: 'rgba(255,69,0,0.5)',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, flex: 1 }}>{project.title}</h3>
                <span style={{
                  padding: '0.2rem 0.65rem',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  background: `${project.statusColor}20`,
                  color: project.statusColor,
                  border: `1px solid ${project.statusColor}40`,
                  whiteSpace: 'nowrap',
                  marginLeft: '0.75rem',
                }}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.75, flex: 1 }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '0.25rem 0.65rem',
                    background: 'rgba(255,69,0,0.08)',
                    border: '1px solid rgba(255,69,0,0.15)',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#FF6B35',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.8rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.5rem'}
                >
                  <FiGithub size={16} /> View on GitHub <FiExternalLink size={13} />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#a0a0a0',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'gap 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.gap = '0.8rem'}
                    onMouseLeave={e => e.currentTarget.style.gap = '0.5rem'}
                  >
                    <FiExternalLink size={16} /> Live Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
