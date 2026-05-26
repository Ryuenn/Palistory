'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ParticleBackground from '@/components/ui/ParticleBackground'

interface PageHeroProps {
  eyebrow: string
  lines: string[]
  accentLine?: string
  description?: string
  image: string
}

export default function PageHero({
  eyebrow,
  lines,
  accentLine,
  description,
  image,
}: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    const el = containerRef.current
    el?.addEventListener('mousemove', onMove)
    return () => el?.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-palistory-black"
    >
      <ParticleBackground />

      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${image}')`,
            transform: `translate3d(${(mouse.x - 0.5) * 14}px, ${(mouse.y - 0.5) * 14}px, 0)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q25,0 50,50 T100,50' fill='none' stroke='%23C8A96B' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
            transform: `translate3d(${(mouse.x - 0.5) * 35}px, ${(mouse.y - 0.5) * 35}px, 0)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-palistory-black/30 to-palistory-black/70" />

      <div className="relative h-full flex items-center z-10">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="h-px w-10 bg-palistory-gold/60" />
            <span className="text-palistory-gold uppercase tracking-[0.25em] text-xs font-semibold">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-palistory-white leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {lines.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
              >
                {line}
              </motion.span>
            ))}
            {accentLine && (
              <motion.span
                className="block text-palistory-red"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + lines.length * 0.12 }}
              >
                {accentLine}
              </motion.span>
            )}
          </motion.h1>

          {description && (
            <motion.p
              className="text-lg sm:text-xl text-palistory-beige leading-relaxed max-w-2xl mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            className="h-[2px] w-24 bg-gradient-to-r from-palistory-red via-palistory-gold to-transparent mt-10"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '6rem', opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1 }}
          />
        </div>
      </div>
    </section>
  )
}
