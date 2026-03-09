import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'IT Infrastructure Home Lab',
    description: 'Built a home IT lab environment to simulate enterprise-level infrastructure. Configured a Windows Server 2022 domain controller with Active Directory Domain Services, two Windows 11 client machines joined to the domain (valetech.com), static IP configuration, DNS, and DHCP setup.',
    tags: ['Windows Server 2022', 'Active Directory', 'DNS', 'DHCP', 'Virtualization', 'Networking'],
    github: 'https://github.com/ValeriuTarlev/lab_simulation_it_admin',
    status: 'In Progress',
    statusColor: '#f59e0b',
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
    status: 'Ongoing',
    statusColor: '#3b82f6',
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

              {/* GitHub Link */}
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
                  marginTop: 'auto',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '0.8rem'}
                onMouseLeave={e => e.currentTarget.style.gap = '0.5rem'}
              >
                <FiGithub size={16} /> View on GitHub <FiExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
