'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Camera, BookOpen, GraduationCap, Megaphone, ArrowRight } from 'lucide-react'

const missions = [
  {
    icon: Camera,
    title: "Documenting Palestinian story",
  },
  {
    icon: BookOpen,
    title: 'Preserving our heritage',
  },
  {
    icon: GraduationCap,
    title: 'Educating future generations',
  },
  {
    icon: Megaphone,
    title: 'Amplifying Palestinian voices worldwide',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function PreserveCTA() {
  return (
    <section id="donation" className="relative bg-palistory-black overflow-hidden">
      {/* Two-column CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: light panel */}
        <motion.div
          className="relative bg-palistory-beige p-12 sm:p-16 lg:p-20 flex flex-col justify-center min-h-[400px] overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Decorative brush stroke */}
          <div className="absolute top-0 left-0 w-32 h-40 bg-gradient-to-br from-palistory-red/20 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 left-0 w-24 h-32 bg-palistory-olive/20 rounded-tr-full" />

          <div className="relative z-10 max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-palistory-red" />
              <span className="text-palistory-red uppercase tracking-[0.25em] text-xs font-bold">
                Your Support
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-palistory-black leading-[1.05] mb-5">
              Preserve today.
              <br />
              <span className="text-palistory-red">Inspire tomorrow.</span>
            </h2>

            <p className="text-palistory-black/70 leading-relaxed mb-8 text-sm">
              Your support helps us document more stories, preserve archives, and educate future
              generations.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/donation">
                <motion.span
                  className="inline-flex items-center gap-2 px-6 py-3 bg-palistory-red text-palistory-white rounded-lg font-semibold text-sm"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 40, 40, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate Now
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
              <Link href="/about">
                <motion.span
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-palistory-black/20 text-palistory-black rounded-lg font-semibold text-sm hover:bg-palistory-black hover:text-palistory-white transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right: dark image panel */}
        <motion.div
          className="relative min-h-[400px] flex items-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/about-hero.svg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palistory-black via-palistory-black/60 to-palistory-black/30" />

          {/* Mission icon strip */}
          <motion.div
            className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 gap-px bg-palistory-gold/10 p-px"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {missions.map((m) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.title}
                  variants={item}
                  whileHover={{ backgroundColor: 'rgba(198, 40, 40, 0.15)' }}
                  className="flex flex-col items-center text-center gap-3 p-6 bg-palistory-black/70 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-lg border border-palistory-gold/30 flex items-center justify-center">
                    <Icon size={22} className="text-palistory-gold" />
                  </div>
                  <p className="text-palistory-white text-xs leading-snug max-w-[12rem]">
                    {m.title}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
