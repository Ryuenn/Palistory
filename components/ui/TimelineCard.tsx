'use client'

import { motion } from 'framer-motion'

interface TimelineCardProps {
  event: {
    year: string
    title: string
    description: string
    color: string
    details: string[]
  }
  isActive: boolean
  index: number
}

export default function TimelineCard({ event, isActive, index }: TimelineCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 h-96 group ${
        isActive ? 'ring-2 ring-palistory-gold' : ''
      }`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-15`} />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-palistory-black via-palistory-black/30 to-transparent" />

      {/* Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-palistory-gold/20"
        animate={{
          borderColor: isActive ? 'rgba(200, 169, 107, 0.8)' : 'rgba(200, 169, 107, 0.2)',
          boxShadow: isActive ? '0 0 30px rgba(200, 169, 107, 0.3)' : '0 0 0px rgba(200, 169, 107, 0)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        {/* Year Badge */}
        <motion.div
          className="text-7xl font-bold text-palistory-gold opacity-20 group-hover:opacity-40 transition-opacity"
          animate={{ scale: isActive ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {event.year}
        </motion.div>

        {/* Main Content */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: isActive ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-palistory-gold text-sm font-semibold mb-2 uppercase tracking-wide">
              {event.year}
            </p>
            <h3 className="text-3xl font-bold text-palistory-white mb-3">
              {event.title}
            </h3>
            <p className="text-palistory-beige text-base leading-relaxed">
              {event.description}
            </p>
          </motion.div>

          {/* Details - Expand on Active */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isActive ? 1 : 0,
              height: isActive ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 pt-4 border-t border-palistory-gold/20">
              {event.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  className="text-sm text-palistory-beige/80 flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-palistory-gold mt-1">•</span>
                  {detail}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-palistory-gold/10 to-transparent"
        animate={{
          x: isActive ? 200 : -200,
        }}
        transition={{ duration: 0.8 }}
        style={{ pointerEvents: 'none' }}
      />
    </motion.div>
  )
}
