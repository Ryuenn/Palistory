'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionBackground from '@/components/ui/SectionBackground'

const stories = [
  {
    tag: 'History',
    tagColor: 'bg-palistory-red',
    title: 'Life in Palestine Before 1948',
    image: '/images/placeholder-story-1.svg',
  },
  {
    tag: 'Culture',
    tagColor: 'bg-palistory-red',
    title: 'Traditional Palestinian Crafts',
    image: '/images/placeholder-story-2.svg',
  },
  {
    tag: 'Oral History',
    tagColor: 'bg-palistory-red',
    title: 'Stories Passed Down',
    image: '/images/placeholder-story-3.svg',
  },
  {
    tag: 'Daily Life',
    tagColor: 'bg-palistory-red',
    title: 'Glimpses of Everyday Life',
    image: '/images/placeholder-story-1.svg',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function StoriesPreview() {
  return (
    <section
      id="stories"
      className="relative py-24 sm:py-32 bg-palistory-beige overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-palistory-red/60" />
              <span className="text-palistory-red uppercase tracking-[0.25em] text-xs font-bold">
                Stories from Palestine
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-palistory-black leading-[1.05]">
              Real stories.
              <br />
              <span className="text-palistory-red">Real people.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <p className="text-base text-palistory-black/70 leading-relaxed max-w-md">
              From historic events to everyday life, explore stories that reflect the resilience,
              beauty, and truth of Palestine.
            </p>
            <Link href="/stories">
              <motion.span
                className="inline-flex items-center gap-2 text-palistory-black font-semibold border-b-2 border-palistory-red pb-1"
                whileHover={{ gap: 12 }}
              >
                View All Stories
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Story cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {stories.map((s) => (
            <motion.div key={s.title} variants={item}>
              <Link href="/stories">
                <motion.div
                  className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${s.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-palistory-black via-palistory-black/40 to-transparent" />

                  <div className="relative h-full p-5 flex flex-col justify-between z-10">
                    <span
                      className={`${s.tagColor} text-palistory-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm self-start`}
                    >
                      {s.tag}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold text-palistory-white mb-3 leading-snug">
                        {s.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-palistory-white text-xs font-semibold uppercase tracking-widest border-b border-palistory-white/60 pb-0.5">
                        Read Story
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative tatreez border on left */}
        <SectionBackground variant="gold" intensity="subtle" pattern={false} />
      </div>
    </section>
  )
}
