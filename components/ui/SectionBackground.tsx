'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface SectionBackgroundProps {
  variant?: 'red' | 'gold' | 'olive' | 'mixed'
  pattern?: boolean
  intensity?: 'subtle' | 'medium' | 'strong'
}

const palette = {
  red: { a: 'rgba(198, 40, 40, 0.10)', b: 'rgba(200, 169, 107, 0.06)' },
  gold: { a: 'rgba(200, 169, 107, 0.10)', b: 'rgba(245, 235, 220, 0.04)' },
  olive: { a: 'rgba(75, 93, 58, 0.12)', b: 'rgba(200, 169, 107, 0.06)' },
  mixed: { a: 'rgba(198, 40, 40, 0.08)', b: 'rgba(75, 93, 58, 0.08)' },
}

export default function SectionBackground({
  variant = 'gold',
  pattern = true,
  intensity = 'medium',
}: SectionBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80])
  const yPattern = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const colors = palette[variant]
  const blurClass =
    intensity === 'subtle' ? 'blur-3xl' : intensity === 'strong' ? 'blur-[120px]' : 'blur-[90px]'

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      <motion.div
        className={`absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full ${blurClass}`}
        style={{ background: colors.a, y, opacity }}
      />
      <motion.div
        className={`absolute -bottom-40 -left-32 w-[32rem] h-[32rem] rounded-full ${blurClass}`}
        style={{ background: colors.b, y: useTransform(scrollYProgress, [0, 1], [60, -60]), opacity }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full ${blurClass} opacity-50`}
        style={{ background: colors.a }}
      />

      {/* Parallax SVG wave pattern, hero-style */}
      {pattern && (
        <motion.div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            y: yPattern,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q25,0 50,50 T100,50' fill='none' stroke='%23C8A96B' stroke-width='0.6'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
          }}
        />
      )}

      {/* Soft radial vignette to anchor content */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-palistory-black/10 to-palistory-black/60" />
    </div>
  )
}
