'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  label: string
  value: number
  suffix?: string
  delay?: number
  icon: LucideIcon
}

export default function StatCard({ label, value, suffix = '', delay = 0, icon: Icon }: StatCardProps) {
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
    if (ref.current) observer.observe(ref.current)
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
      className="flex items-center gap-5 py-5 border-b border-white/10 last:border-0 group"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Icon box */}
      <div className="flex-shrink-0 w-[52px] h-[52px] rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
        <Icon size={24} className="text-white/70" strokeWidth={1.5} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-semibold leading-none">
          {label}
        </span>
        <span className="text-3xl font-bold text-white leading-none">
          {displayValue.toLocaleString()}{suffix}
        </span>
      </div>
    </motion.div>
  )
}
