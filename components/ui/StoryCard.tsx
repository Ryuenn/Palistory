'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface StoryCardProps {
  category: {
    id: number
    title: string
    description: string
    color: string
    icon: string
  }
  isHovered: boolean
}

export default function StoryCard({ category, isHovered }: StoryCardProps) {
  return (
    <motion.div
      className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.color} transition-all duration-500`}
      />

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          borderWidth: '1px',
          borderImage: 'linear-gradient(135deg, rgba(200, 169, 107, 0.5) 0%, rgba(200, 169, 107, 0) 100%)',
        }}
        animate={{
          boxShadow: isHovered ? '0 0 30px rgba(200, 169, 107, 0.3)' : '0 0 0px rgba(200, 169, 107, 0)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between">
        {/* Top - Icon and Number */}
        <div className="flex items-start justify-between">
          <div className="text-5xl">{category.icon}</div>
          <motion.div
            className="text-palistory-gold font-bold text-lg"
            animate={{ opacity: isHovered ? 1 : 0.5 }}
          >
            #{category.id.toString().padStart(2, '0')}
          </motion.div>
        </div>

        {/* Bottom - Text and CTA */}
        <div className="space-y-4">
          <div>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-palistory-white mb-2"
              animate={{ color: isHovered ? '#C8A96B' : '#FAFAFA' }}
              transition={{ duration: 0.3 }}
            >
              {category.title}
            </motion.h3>
            <motion.p
              className="text-palistory-beige text-sm"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {category.description}
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.button
            className="flex items-center gap-2 text-palistory-gold font-semibold group/btn"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0.5, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            Read Story
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Hover Background Shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-palistory-white/10 to-transparent"
        animate={{
          x: isHovered ? 300 : -300,
        }}
        transition={{ duration: 0.6 }}
        style={{ pointerEvents: 'none' }}
      />
    </motion.div>
  )
}
