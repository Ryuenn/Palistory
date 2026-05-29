'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const faqs = [
  {
    q: 'What is Palistory?',
    a: 'Palistory is a film-based initiative committed to documenting and sharing Palestinian stories through documentaries, films, and episodic series.',
  },
  {
    q: 'Are your films based on real stories?',
    a: 'Yes. Every project we produce is grounded in the lived experiences of Palestinians — from first-hand interviews and oral histories to archival research — ensuring authenticity and dignity at every stage.',
  },
  {
    q: 'How can I support Palistory?',
    a: 'You can donate, share our work, submit your story, join our mailing list, or partner with us. Every action — big or small — helps amplify Palestinian voices and preserve history for future generations.',
  },
  {
    q: 'Is Palistory a nonprofit organization?',
    a: 'Yes. Palistory, Inc. is a registered nonprofit organisation dedicated to cultural preservation, human rights advocacy, and educational storytelling through the medium of film.',
  },
]

const photos = [
  { gradient: 'from-palistory-red/60 to-palistory-charcoal', label: 'Community Event' },
  { gradient: 'from-palistory-olive/60 to-palistory-black', label: 'Outreach 2024' },
  { gradient: 'from-palistory-charcoal to-palistory-black', label: 'Film Screening' },
  { gradient: 'from-palistory-red/40 to-palistory-olive/40', label: 'Palistory Gala' },
  { gradient: 'from-palistory-gold/50 to-palistory-charcoal', label: 'Team Spotlight' },
]

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden border transition-colors duration-300 ${
        isOpen
          ? 'bg-palistory-white border-transparent'
          : 'bg-palistory-black/30 border-palistory-white/10 hover:border-palistory-white/20'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left gap-4"
      >
        <span
          className={`text-[15px] font-semibold transition-colors duration-200 ${
            isOpen ? 'text-palistory-black' : 'text-palistory-white'
          }`}
        >
          {faq.q}
        </span>

        {/* Toggle icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? '#C62828' : 'rgba(255,255,255,0.12)' }}
          transition={{ duration: 0.25 }}
          className="flex-none w-8 h-8 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2.5}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-palistory-red"
    >
      {/* Top section: FAQ content */}
      <div className="relative py-28 sm:py-36">
        {/* Texture */}
        <motion.div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ y: bgY }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='1.5' fill='%23FAFAFA'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: heading */}
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="block text-palistory-white/80 text-xl tracking-wide mb-5"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Frequently Asked Questions
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-palistory-white leading-[1.1]"
              >
                Things You Would Like To Know About
              </motion.h2>
            </div>

            {/* Right: accordion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  faq={faq}
                  isOpen={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div className="relative overflow-hidden h-52 sm:h-64">
        <motion.div
          className="flex h-full gap-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className={`flex-1 bg-gradient-to-b ${photo.gradient} relative overflow-hidden cursor-pointer`}
            >
              {/* Replace these gradient divs with <img> tags when real photos are available */}
              <div className="absolute inset-0 bg-palistory-black/20 hover:bg-palistory-black/10 transition-colors duration-300" />
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-palistory-black/60 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
