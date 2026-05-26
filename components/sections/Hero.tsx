'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'
import ParticleBackground from '@/components/ui/ParticleBackground'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const container = containerRef.current
    container?.addEventListener('mousemove', handleMouseMove)
    return () => container?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { label: 'Years Documented', value: 100, suffix: '+' },
    { label: 'Photos Archived', value: 2547, suffix: '+' },
    { label: 'Voices Recorded', value: 18000, suffix: '+' },
    { label: 'Historical Records', value: 3800, suffix: '+' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full h-screen overflow-hidden bg-palistory-black"
    >
      {/* Animated Background */}
      <ParticleBackground />

      {/* Cinematic Background Image/Gradient */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-image.png')`,
            transform: `translate3d(${(mousePosition.x - 0.5) * 12}px, ${(mousePosition.y - 0.5) * 12}px, 0)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        <div className="absolute inset-0 hero-gradient opacity-90" />

        {/* Parallax Background Layers */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q25,0 50,50 T100,50' fill='none' stroke='%23C8A96B' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
            transform: `translate3d(${(mousePosition.x - 0.5) * 35}px, ${(mousePosition.y - 0.5) * 35}px, 0)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </motion.div>

      {/* Dark Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-palistory-black/20 to-palistory-black/60" />

      {/* Content Container */}
      <div className="relative h-full flex items-center z-10">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-palistory-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  We document.
                  <br />
                  We preserve.
                  <br />
                  <span className="text-palistory-red">We remember.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  className="text-lg sm:text-xl text-palistory-beige leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Palistory documents the history, culture, and daily life of Palestinians to ensure these stories live for generations.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="px-8 py-4 bg-palistory-olive text-palistory-white rounded-lg font-semibold hover-glow transition-all duration-300 flex items-center gap-2"
                  onClick={() => scrollToSection('#stories')}                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(75, 93, 58, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Stories
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-palistory-beige text-palistory-beige rounded-lg font-semibold hover:bg-palistory-beige hover:text-palistory-black transition-all duration-300 flex items-center gap-2"
                  onClick={() => scrollToSection('#media')}                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                  Watch Film
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Statistics Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <StatCard
                    label={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    delay={index}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-palistory-beige text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-palistory-gold rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-palistory-gold rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}


