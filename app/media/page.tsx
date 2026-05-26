'use client'

import { motion } from 'framer-motion'
import { Play, Image as ImageIcon, Mic, FileText } from 'lucide-react'
import PageShell from '@/components/ui/PageShell'
import PageHero from '@/components/ui/PageHero'
import SectionBackground from '@/components/ui/SectionBackground'
import SectionHeading from '@/components/ui/SectionHeading'

const mediaTypes = [
  { icon: Play, label: 'Films & Documentaries', count: '120+' },
  { icon: ImageIcon, label: 'Photographic Archives', count: '18,000+' },
  { icon: Mic, label: 'Oral Histories', count: '3,800+' },
  { icon: FileText, label: 'Letters & Manuscripts', count: '2,547+' },
]

const featured = [
  {
    title: 'Voices of Return',
    type: 'Documentary · 32 min',
    image: '/images/placeholder-story-1.svg',
  },
  {
    title: 'The Olive Harvest',
    type: 'Photo Essay · 48 images',
    image: '/images/placeholder-story-3.svg',
  },
  {
    title: 'Letters from Yaffa',
    type: 'Oral History · 18 min',
    image: '/images/placeholder-story-2.svg',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function MediaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Archive & Film"
        lines={['Watch. Listen.']}
        accentLine="Remember."
        description="Films, photographs, recordings, and letters — every artefact a window into Palestinian life."
        image="/images/media-hero.svg"
      />

      <section className="relative py-24 sm:py-36 bg-palistory-black overflow-hidden">
        <SectionBackground variant="red" intensity="medium" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="The Archive"
            lines={['Four decades.']}
            accentLine="Twenty-five thousand pieces."
            description="Our growing media archive is open, searchable, and preserved with the rigour of a national library."
          />

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mediaTypes.map((m) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.label}
                  variants={item}
                  whileHover={{ y: -6, boxShadow: '0 0 30px rgba(200, 169, 107, 0.2)' }}
                  className="glassmorphism-dark rounded-xl p-6 border border-palistory-gold/20 text-center"
                >
                  <Icon size={36} className="text-palistory-gold mx-auto mb-4" />
                  <div className="text-3xl font-bold text-palistory-gold mb-1">{m.count}</div>
                  <p className="text-sm text-palistory-beige/80">{m.label}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {featured.map((f) => (
              <motion.div
                key={f.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer border border-palistory-gold/15 hover:border-palistory-gold/50 transition-colors"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${f.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-palistory-black via-palistory-black/50 to-transparent" />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-palistory-red flex items-center justify-center"
                  whileHover={{ scale: 1.15 }}
                >
                  <Play size={24} className="text-palistory-white ml-1" />
                </motion.div>
                <div className="relative h-full p-6 flex flex-col justify-end z-10">
                  <p className="text-xs uppercase tracking-widest text-palistory-gold mb-2">
                    {f.type}
                  </p>
                  <h3 className="text-2xl font-bold text-palistory-white">{f.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageShell>
  )
}
