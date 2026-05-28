'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BookOpen, Heart, Film, Archive } from 'lucide-react'
import SectionBackground from '@/components/ui/SectionBackground'

const pillars = [
  {
    icon: BookOpen,
    title: 'Reclaiming the Narrative',
    description: 'We tell authentic Palestinian stories to challenge erasure and distortion.',
    gradient: 'from-palistory-red/20 to-transparent',
  },
  {
    icon: Heart,
    title: 'Humanizing Through Storytelling',
    description: 'Our films spotlight lived experiences to restore dignity and depth.',
    gradient: 'from-palistory-gold/15 to-transparent',
  },
  {
    icon: Film,
    title: 'Advocacy Through Art',
    description: 'We use film as a tool to advance justice, equity, and awareness.',
    gradient: 'from-palistory-olive/20 to-transparent',
  },
  {
    icon: Archive,
    title: 'Archiving for Impact',
    description: 'We preserve Palestinian voices for education, activism, and future generations.',
    gradient: 'from-palistory-red/15 to-transparent',
  },
]

const stats = [
  { n: '10+', l: 'Films Made' },
  { n: '6', l: 'Storytellers' },
  { n: '3+', l: 'Years Active' },
]

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.45], [0, 1])
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-40 bg-palistory-black overflow-hidden"
    >
      <SectionBackground variant="red" intensity="subtle" />

      {/* Subtle grid texture */}
      <motion.div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ y: bgY }}
        aria-hidden
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,169,107,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,107,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: heading & description ─────────────────────── */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="block text-palistory-red text-2xl tracking-wide mb-5"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              About Palistory
            </motion.span>

            {/* Animated progress bar */}
            <div className="h-[2px] bg-palistory-charcoal mb-8 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-palistory-red via-palistory-gold to-transparent"
                style={{ scaleX: lineProgress, transformOrigin: 'left' }}
              />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-palistory-white leading-[1.05] mb-8"
            >
              Palistory<br />
              <span className="text-palistory-red">Mission.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-palistory-beige/70 text-lg leading-relaxed max-w-xl"
            >
              <p>
                Palistory, Inc. is committed to reclaiming and amplifying Palestinian narratives through film. By documenting lived experiences from Palestine and the diaspora, we challenge dehumanizing tropes and promote dignity, equity, and justice.
              </p>
              <p>
                Through documentary and narrative storytelling, we create work that advances understanding, preserves history, and contributes meaningfully to global conversations on human rights and self-determination.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-10 mt-12 pt-8 border-t border-palistory-gold/10"
            >
              {stats.map((s) => (
                <div key={s.l}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-palistory-gold"
                  >
                    {s.n}
                  </motion.div>
                  <div className="text-xs text-palistory-beige/50 uppercase tracking-widest mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: 2×2 pillar grid ───────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{
                    y: -10,
                    boxShadow: '0 24px 64px rgba(198,40,40,0.14)',
                    transition: { duration: 0.3 },
                  }}
                  className="group relative rounded-2xl p-6 bg-palistory-dark-gray border border-palistory-gold/10 hover:border-palistory-red/30 transition-colors duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Gradient shimmer on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  />

                  {/* Top-right corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-palistory-gold/10 rounded-tr-2xl group-hover:border-palistory-gold/30 transition-colors duration-300" />

                  {/* Icon circle */}
                  <div className="relative w-12 h-12 rounded-full bg-palistory-red/10 border border-palistory-red/20 flex items-center justify-center mb-5 group-hover:bg-palistory-red/20 group-hover:border-palistory-red/50 transition-all duration-300">
                    <Icon size={20} className="text-palistory-red" />
                  </div>

                  <h3 className="relative text-[15px] font-bold text-palistory-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="relative text-sm text-palistory-beige/60 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bottom line on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-palistory-red to-transparent rounded-b-2xl"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
