'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  lines: string[]
  accentLine?: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  lines,
  accentLine,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-6 max-w-3xl ${alignClasses} mb-16 sm:mb-20`}>
      {eyebrow && (
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="h-px w-10 bg-palistory-gold/60" />
          <span className="text-palistory-gold uppercase tracking-[0.25em] text-xs font-semibold">
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-palistory-gold/60" />
        </motion.div>
      )}

      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-palistory-white leading-[1.05]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {lines.map((line, i) => (
          <motion.span
            key={i}
            className="block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {line}
          </motion.span>
        ))}
        {accentLine && (
          <motion.span
            className="block text-palistory-red"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1 + lines.length * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {accentLine}
          </motion.span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          className={`text-lg text-palistory-beige leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        className="h-[2px] w-24 bg-gradient-to-r from-palistory-red via-palistory-gold to-transparent"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '6rem', opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        viewport={{ once: true, margin: '-100px' }}
      />
    </div>
  )
}
