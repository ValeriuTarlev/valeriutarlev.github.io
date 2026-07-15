import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Systems & Infrastructure',
    color: '#FF6B35',
    skills: [
      { name: 'Windows Server 2022', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      { name: 'Active Directory', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      { name: 'Microsoft Intune', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'KACE Systems Mgmt', icon: null },
      { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Group Policy (GPO)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
      { name: 'System Imaging', icon: null },
      { name: 'Device Management', icon: null },
      { name: 'Virtualization', icon: null },
    ],
  },
  {
    title: 'Cybersecurity & Monitoring',
    color: '#e11d48',
    skills: [
      { name: 'CrowdStrike Falcon', icon: null },
      { name: 'DarkTrace', icon: null },
      { name: 'Microsoft Defender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Threat Detection', icon: null },
      { name: 'Incident Response', icon: null },
      { name: 'Malware Remediation', icon: null },
      { name: 'Endpoint Security', icon: null },
      { name: 'Security Monitoring', icon: null },
      { name: 'Nmap', icon: null },
      { name: 'Metasploit', icon: null },
      { name: 'Burp Suite', icon: null },
      { name: 'Wireshark', icon: null },
    ],
  },
  {
    title: 'Networking',
    color: '#8b5cf6',
    skills: [
      { name: 'TCP/IP', icon: null },
      { name: 'DNS / DHCP', icon: null },
      { name: 'Subnetting / CIDR', icon: null },
      { name: 'IPv4 / IPv6', icon: null },
      { name: 'VLANs & Trunking (802.1Q)', icon: null },
      { name: 'OSPF', icon: null },
      { name: 'EIGRP', icon: null },
      { name: 'Spanning Tree Protocol (STP)', icon: null },
      { name: 'NAT / PAT', icon: null },
      { name: 'Access Control Lists (ACLs)', icon: null },
      { name: 'EtherChannel (LACP)', icon: null },
      { name: 'Cisco IOS CLI', icon: null },
      { name: 'Network Troubleshooting', icon: null },
      { name: 'VPN Analysis', icon: null },
      { name: 'HTTP / HTTPS', icon: null },
    ],
  },
  {
    title: 'Programming & Development',
    color: '#06b6d4',
    skills: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML / CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'PowerShell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    ],
  },
  {
    title: 'Soft Skills',
    color: '#22c55e',
    skills: [
      { name: 'Team Leadership', icon: null },
      { name: 'Staff Supervision', icon: null },
      { name: 'Problem Solving', icon: null },
      { name: 'Communication', icon: null },
      { name: 'Training & Development', icon: null },
    ],
  },
]

function SkillTag({ name, icon, color, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.45rem 0.85rem',
        background: 'var(--bg-card)',
        border: `1px solid ${color}25`,
        borderRadius: '6px',
        fontSize: '0.82rem',
        fontWeight: 500,
        color: 'var(--text-secondary)',
        transition: 'border-color 0.2s, color 0.2s',
        cursor: 'default',
      }}
      whileHover={{ borderColor: color, color: '#f0f0f0' }}
    >
      {icon && (
        <img src={icon} alt={name} width={16} height={16} style={{ objectFit: 'contain' }} />
      )}
      {name}
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ padding: '6rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#FF6B35', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>What I Know</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700 }}>Skills</h2>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #FF4500, #FF6B35)', margin: '1rem auto 0' }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '4px', height: '20px', borderRadius: '2px', background: cat.color }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: cat.color }}>{cat.title}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.skills.map((skill, si) => (
                  <SkillTag key={skill.name} name={skill.name} icon={skill.icon} color={cat.color} index={si} inView={inView} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
