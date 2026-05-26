'use client'

import { motion } from 'framer-motion'
import PageShell from '@/components/ui/PageShell'
import PageHero from '@/components/ui/PageHero'
import SectionBackground from '@/components/ui/SectionBackground'
import SectionHeading from '@/components/ui/SectionHeading'

const pillars = [
  {
    title: 'Document',
    description:
      'We work alongside historians, families, and oral-history practitioners to record Palestinian lives in their own words.',
  },
  {
    title: 'Preserve',
    description:
      'Every artefact — photograph, recording, letter — is digitised to archival standards and stored in geographically distributed archives.',
  },
  {
    title: 'Share',
    description:
      'Stories are made freely accessible online so future generations and global audiences can learn, listen, and remember.',
  },
]

const team = [
  { name: 'Layla Mansour', role: 'Founder & Director' },
  { name: 'Ahmed Ibrahim', role: 'Head of Archives' },
  { name: 'Um Fatima', role: 'Oral History Lead' },
  { name: 'Yousef Khalil', role: 'Community Outreach' },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Mission"
        lines={['We document.', 'We preserve.']}
        accentLine="We remember."
        description="Palistory is a community-led archive working to make Palestinian history visible, accessible, and enduring."
        image="/images/about-hero.svg"
      />

      <section className="relative py-24 sm:py-36 bg-palistory-black overflow-hidden">
        <SectionBackground variant="gold" intensity="medium" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="What We Do"
            lines={['Three pillars.']}
            accentLine="One purpose."
            description="Our work centres Palestinian voices and treats memory as something worth preserving with the same care as any national archive."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={item}
                whileHover={{ y: -8, boxShadow: '0 0 30px rgba(200, 169, 107, 0.2)' }}
                className="glassmorphism-dark rounded-2xl p-8 border border-palistory-gold/20"
              >
                <div className="text-5xl font-bold text-palistory-gold/30 mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold text-palistory-white mb-3">{p.title}</h3>
                <p className="text-palistory-beige leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 sm:py-36 bg-palistory-dark-gray overflow-hidden">
        <SectionBackground variant="olive" intensity="subtle" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="The Team"
            lines={['People behind']}
            accentLine="the archive."
            description="A small, dedicated team of historians, archivists, and storytellers — supported by a global network of contributors."
          />

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                whileHover={{ y: -6 }}
                className="glassmorphism-dark rounded-2xl p-6 border border-palistory-gold/20 text-center"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-palistory-red/40 to-palistory-gold/40 border-2 border-palistory-gold/40 flex items-center justify-center text-3xl font-bold text-palistory-white">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h4 className="text-lg font-bold text-palistory-white mb-1">{member.name}</h4>
                <p className="text-sm text-palistory-gold">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageShell>
  )
}
