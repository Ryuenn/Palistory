'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function WhyStories() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const posterY = useTransform(scrollYProgress, [0, 1], [-24, 24])
  const textY = useTransform(scrollYProgress, [0, 1], [16, -16])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-40 bg-palistory-white overflow-hidden"
    >
      {/* Subtle diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: cinematic film poster ─────────────────────── */}
          <motion.div style={{ y: posterY }} className="relative">
            {/* Decorative slash lines behind the poster */}
            <div className="absolute -top-6 -left-6 w-full h-full pointer-events-none">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute w-[2px] h-20 bg-gray-200 rounded-full"
                  style={{
                    left: `${20 + i * 14}%`,
                    top: `${-8 + i * 6}%`,
                    transform: `rotate(-15deg)`,
                    opacity: 0.5 - i * 0.1,
                  }}
                />
              ))}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute w-20 h-[2px] bg-gray-200 rounded-full"
                  style={{
                    right: `${4 + i * 8}%`,
                    bottom: `${-4 + i * 7}%`,
                    transform: `rotate(-15deg)`,
                    opacity: 0.4 - i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Film poster card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-palistory-black border border-gray-200"
            >
              {/* Cinematic placeholder — replace src with real poster image */}
              <div className="absolute inset-0 bg-gradient-to-br from-palistory-black via-palistory-charcoal to-palistory-dark-gray" />

              {/* Ensemble silhouette grid */}
              <div className="absolute inset-0 grid grid-cols-6 gap-1 p-4 opacity-30">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg"
                    style={{
                      background: `linear-gradient(160deg, rgba(198,40,40,0.3) 0%, rgba(75,93,58,0.2) 100%)`,
                    }}
                  />
                ))}
              </div>

              {/* Logo + title overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                <div className="text-center">
                  <div className="flex items-center gap-2 justify-center mb-3">
                    <div className="w-6 h-6 rounded-full bg-palistory-red flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-palistory-white/70 text-xs uppercase tracking-widest">
                      Palistory
                    </span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-palistory-white tracking-wider mb-2">
                    PALISTORY
                  </h3>
                  <p className="text-palistory-beige/50 text-xs uppercase tracking-[0.3em]">
                    A Palistory Incorporated Film
                  </p>
                </div>
              </div>

              {/* Top vignette */}
              <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-palistory-black/60 to-transparent" />
            </motion.div>
          </motion.div>

          {/* ── Right: text content ──────────────────────────────── */}
          <motion.div style={{ y: textY }} className="space-y-8">
            <div>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="block text-palistory-red text-xl tracking-wide mb-4"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Palistory
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-palistory-black leading-[1.05]"
              >
                Why <span className="text-palistory-red">Stories</span>
              </motion.h2>
            </div>

            {/* Divider */}
            <motion.div
              className="h-[2px] w-16 bg-gradient-to-r from-palistory-red to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '4rem', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Stories are compelling and personal. They add color to history by providing valuable insight and information that can't be found in just facts and numbers. For this reason, Palestinians have long relied on the power of storytelling to keep their history and culture alive despite active suppression. History is best depicted through stories.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 12px 40px rgba(11,11,11,0.25)',
                }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-palistory-black text-palistory-white font-semibold rounded-lg text-sm tracking-wide hover:bg-palistory-charcoal transition-colors duration-200"
              >
                Donate Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
