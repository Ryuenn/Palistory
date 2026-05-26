'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionBackground from '@/components/ui/SectionBackground'

const events = [
  {
    year: '4000 BCE',
    title: 'Canaanite Presence',
    description: 'Early Semitic settlements in the land of Palestine.',
    image: '/images/placeholder-story-2.svg',
  },
  {
    year: '1517',
    title: 'Ottoman Rule',
    description: 'Palestine becomes part of the Ottoman Empire.',
    image: '/images/placeholder-story-1.svg',
  },
  {
    year: '1917',
    title: 'Balfour Declaration',
    description: 'A turning point that shaped the future of Palestine.',
    image: '/images/placeholder-story-3.svg',
  },
  {
    year: '1948',
    title: 'Nakba',
    description: 'The beginning of a long journey of displacement.',
    image: '/images/placeholder-story-2.svg',
  },
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

export default function HistoryPreview() {
  return (
    <section
      id="timeline"
      className="relative py-24 sm:py-32 bg-palistory-black overflow-hidden"
    >
      <SectionBackground variant="mixed" intensity="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          {/* Left intro */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-palistory-gold/60" />
              <span className="text-palistory-gold uppercase tracking-[0.25em] text-xs font-bold">
                Our History
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-palistory-white leading-[1.05] mb-6">
              A history that
              <br />
              didn&apos;t end{' '}
              <span className="text-palistory-red">in 1948.</span>
            </h2>
            <p className="text-palistory-beige leading-relaxed mb-8 max-w-md">
              Explore key moments in Palestine&apos;s rich history — from ancient times to the
              present day.
            </p>
            <Link href="/timeline">
              <motion.span
                className="inline-flex items-center gap-2 px-6 py-3 bg-palistory-olive text-palistory-white rounded-lg font-semibold self-start"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(75, 93, 58, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Timeline
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </motion.div>

          {/* Right event grid */}
          <motion.div
            className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {events.map((e) => (
              <motion.div
                key={e.year}
                variants={item}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                <Link href="/timeline" className="block">
                  <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${e.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-palistory-black/80 to-transparent" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-palistory-red" />
                    <span className="text-palistory-gold text-xs font-bold tracking-wide">
                      {e.year}
                    </span>
                  </div>
                  <h4 className="text-palistory-white font-bold text-sm mb-1 group-hover:text-palistory-gold transition-colors">
                    {e.title}
                  </h4>
                  <p className="text-palistory-beige/70 text-xs leading-relaxed">
                    {e.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center pt-8 border-t border-palistory-gold/15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/timeline">
            <motion.span
              className="inline-flex items-center gap-2 text-palistory-gold font-semibold uppercase tracking-widest text-xs"
              whileHover={{ gap: 12 }}
            >
              Explore Full Timeline
              <ArrowRight size={14} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
