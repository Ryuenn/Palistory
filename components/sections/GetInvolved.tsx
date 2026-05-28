'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Video, Globe, Users, Mail } from 'lucide-react'
import SectionBackground from '@/components/ui/SectionBackground'

const ways = [
  {
    number: '01',
    icon: Heart,
    title: 'Donate',
    description:
      'Support our mission and help bring powerful Palestinian stories to audiences worldwide.',
  },
  {
    number: '02',
    icon: Video,
    title: 'Share Your Story',
    description:
      'Are you Palestinian with lived experience? Submit your story for inclusion in our upcoming projects.',
  },
  {
    number: '03',
    icon: Globe,
    title: 'Spread the Word',
    description:
      'Follow and share our work to amplify Palestinian voices in your community, networks, and beyond.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Partner With Us',
    description:
      'Work with us to strengthen storytelling through collaboration with aligned organisations.',
  },
  {
    number: '05',
    icon: Mail,
    title: 'Join Our Mailing List',
    description:
      'Stay connected and help amplify Palestinian voices in your community and beyond globally.',
  },
]

export default function GetInvolved() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1])

  const scrollCards = (dir: -1 | 1) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.offsetWidth / 4 + 20
    scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-40 overflow-hidden">

      {/* Cinematic parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ scale: bgScale, backgroundImage: `url('/images/palistory_bg-1.png')` }}
      />
      <div className="absolute inset-0 bg-palistory-black/82" />
      <div className="absolute inset-0 bg-gradient-to-b from-palistory-black/50 via-transparent to-palistory-black/70" />
      <SectionBackground variant="red" intensity="subtle" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="block text-palistory-red text-2xl tracking-wide mb-4"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Get Involved
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-palistory-white leading-[1.05]"
            >
              Stories That<br />
              <span className="text-palistory-red">Build Justice.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white/90 text-base leading-relaxed max-w-xs lg:text-right [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]"
          >
            Be part of the movement to preserve truth, amplify voices, and build justice through
            film. Whether you're a storyteller, artist, educator, or ally — there's a place for
            you at Palistory.
          </motion.p>
        </div>

        {/* ── Arrows ───────────────────────────────────────────── */}
        <div className="flex gap-3 justify-end mb-6">
          {([-1, 1] as const).map((dir) => (
            <motion.button
              key={dir}
              onClick={() => scrollCards(dir)}
              whileHover={{ scale: 1.08, backgroundColor: 'rgba(198,40,40,0.15)' }}
              whileTap={{ scale: 0.93 }}
              className="w-10 h-10 rounded-full border border-palistory-white/20 flex items-center justify-center text-palistory-white/70 hover:border-palistory-red/50 hover:text-palistory-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                {dir === -1
                  ? <polyline points="15 18 9 12 15 6" />
                  : <polyline points="9 18 15 12 9 6" />}
              </svg>
            </motion.button>
          ))}
        </div>

        {/* ── Card rail ────────────────────────────────────────── */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
        >
          {ways.map((way, i) => {
            const Icon = way.icon
            return (
              <motion.div
                key={way.number}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.26 } }}
                className="group flex-none w-[calc(25%-15px)] min-w-[220px] rounded-2xl snap-start overflow-hidden relative cursor-pointer
                           bg-black/40 border border-white/10
                           hover:bg-black/55 hover:border-palistory-red/40
                           backdrop-blur-md transition-colors duration-300 p-6"
              >
                {/* Top: icon + number */}
                <div className="flex items-start justify-between mb-7">

                  {/* Icon — neutral default, red on hover */}
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                                  bg-white/5 group-hover:bg-palistory-red group-hover:border-palistory-red
                                  transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-palistory-beige/70 group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Number — gold, subdued */}
                  <span className="text-[28px] font-black leading-none text-palistory-gold/25 group-hover:text-palistory-gold/50 transition-colors duration-300 select-none">
                    {way.number}
                  </span>
                </div>

                <h3 className="text-[15px] font-bold text-white mb-2 leading-snug">
                  {way.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {way.description}
                </p>

                {/* Bottom glow line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-palistory-red to-palistory-gold/50 rounded-b-2xl"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.35 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
