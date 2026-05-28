'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionBackground from '@/components/ui/SectionBackground'

const tellers = [
  {
    name: 'Dr. Hassan El-Najjar',
    vimeoId: '1067098740',
    slug: 'dr-hassan-el-najjar',
  },
  {
    name: 'Ghada El-Najjar',
    vimeoId: '1067092041',
    slug: 'ghada-el-najjar',
  },
  {
    name: 'Jamal Awad',
    vimeoId: '1109029944',
    slug: 'jamal-awad',
  },
  {
    name: 'Dr. Abeer Abouyabis',
    vimeoId: '1067086904',
    slug: 'dr-abeer-abouyabis',
  },
  {
    name: 'Rev. Fahed Abuakel',
    vimeoId: '1067089847',
    slug: 'rev-fahed-abuakel',
  },
  {
    name: 'Musa Ghanayem',
    vimeoId: '1067108346',
    slug: 'musa-ghanayem',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

function TellerCard({ teller }: { teller: (typeof tellers)[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={cardVariant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col gap-4"
    >
      {/* Video embed wrapper */}
      <motion.div
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full rounded-xl overflow-hidden border border-palistory-gold/10 group-hover:border-palistory-gold/35 transition-colors duration-300"
        style={{ paddingBottom: '56.25%' }}
      >
        {/* Glow ring on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 rounded-xl pointer-events-none z-10"
              style={{ boxShadow: '0 0 40px rgba(200,169,107,0.18)' }}
            />
          )}
        </AnimatePresence>

        <iframe
          src={`https://player.vimeo.com/video/${teller.vimeoId}?title=0&byline=0&portrait=0&color=C62828`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={teller.name}
        />
      </motion.div>

      {/* Name + button */}
      <div className="flex flex-col items-center gap-3">
        <motion.h3
          animate={{ color: hovered ? '#C8A96B' : '#FAFAFA' }}
          transition={{ duration: 0.25 }}
          className="text-xl font-bold text-center"
        >
          {teller.name}
        </motion.h3>

        <motion.button
          whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(11,11,11,0.5)' }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-6 py-2.5 bg-palistory-black border border-palistory-white/20 text-palistory-white text-sm font-semibold rounded-lg hover:border-palistory-gold/60 hover:text-palistory-gold transition-colors duration-200"
        >
          Learn More
          <ExternalLink size={14} />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function StoryTellers() {
  return (
    <section className="relative py-28 sm:py-36 bg-palistory-dark-gray overflow-hidden">
      <SectionBackground variant="gold" intensity="subtle" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1' fill='%23C8A96B'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section heading ──────────────────────────────────── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-palistory-gold/50" />
            <span className="text-palistory-gold uppercase tracking-[0.25em] text-xs font-semibold">
              Voices of Palestine
            </span>
            <span className="h-px w-12 bg-palistory-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-bold text-palistory-white mb-4"
          >
            Our Story Tellers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-palistory-beige/60 text-lg max-w-xl mx-auto"
          >
            Have a look at some of what we have learned in our interviews.
          </motion.p>

          <motion.div
            className="mx-auto mt-6 h-[2px] w-16 bg-gradient-to-r from-transparent via-palistory-gold to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>

        {/* ── Video grid ──────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {tellers.map((t) => (
            <TellerCard key={t.slug} teller={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
