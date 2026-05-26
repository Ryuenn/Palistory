'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import StoryCard from '@/components/ui/StoryCard'
import SectionBackground from '@/components/ui/SectionBackground'
import SectionHeading from '@/components/ui/SectionHeading'

export default function StoryCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories = [
    {
      id: 1,
      title: 'Life Before 1948',
      description: 'Stories from the pre-displacement era',
      color: 'from-palistory-red/20 to-palistory-gold/10',
      icon: '🏘️',
    },
    {
      id: 2,
      title: 'Traditional Crafts',
      description: 'Preserving ancestral skills and heritage',
      color: 'from-palistory-olive/20 to-palistory-gold/10',
      icon: '🎨',
    },
    {
      id: 3,
      title: 'Stories Passed Down',
      description: 'Intergenerational narratives',
      color: 'from-palistory-gold/20 to-palistory-beige/10',
      icon: '📖',
    },
    {
      id: 4,
      title: 'Everyday Life',
      description: 'Daily resilience and community',
      color: 'from-palistory-red/20 to-palistory-olive/10',
      icon: '👥',
    },
    {
      id: 5,
      title: 'Resistance & Survival',
      description: 'Stories of struggle and hope',
      color: 'from-palistory-olive/20 to-palistory-red/10',
      icon: '🕊️',
    },
    {
      id: 6,
      title: 'Food & Culture',
      description: 'Culinary traditions and identity',
      color: 'from-palistory-gold/20 to-palistory-red/10',
      icon: '🍽️',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  }

  return (
    <section
      id="stories"
      className="relative py-24 sm:py-36 bg-palistory-black overflow-hidden"
    >
      <SectionBackground variant="gold" intensity="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Stories from Palestine"
          lines={['Real stories.', 'Real people.']}
          accentLine="Real memory."
          description="Explore our curated collections documenting Palestinian history, culture, and heritage — voices that refuse to be forgotten."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <StoryCard
                category={category}
                isHovered={hoveredIndex === index}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 border-2 border-palistory-gold/40 text-palistory-gold rounded-lg font-semibold hover:border-palistory-gold hover:bg-palistory-gold/10 transition-all duration-300"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(200, 169, 107, 0.25)' }}
            whileTap={{ scale: 0.96 }}
          >
            View All Stories →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
