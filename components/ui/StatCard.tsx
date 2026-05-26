'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface StatCardProps {
  label: string
  value: number
  suffix?: string
  delay?: number
}

export default function StatCard({ label, value, suffix = '', delay = 0 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const increment = value / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <motion.div
      ref={ref}
      className="glassmorphism-dark p-6 md:p-8 rounded-xl border border-palistory-gold/20 hover-glow transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 0 30px rgba(200, 169, 107, 0.2)' }}
    >
      <div className="space-y-4">
        <motion.div
          className="text-4xl md:text-5xl font-bold text-palistory-gold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: (delay || 0) + 0.2 }}
          viewport={{ once: true }}
        >
          {displayValue.toLocaleString()}{suffix}
        </motion.div>

        <motion.p
          className="text-sm md:text-base text-palistory-beige/80 leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: (delay || 0) + 0.3 }}
          viewport={{ once: true }}
        >
          {label}
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-palistory-gold to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: (delay || 0) + 0.4 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  )
}
