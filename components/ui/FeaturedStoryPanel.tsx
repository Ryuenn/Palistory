'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Headphones, ArrowRight } from 'lucide-react'

interface FeaturedStoryPanelProps {
  story: {
    id: number
    title: string
    subtitle: string
    excerpt: string
    quote: string
    author: string
    readTime: string
    audioDuration: string
    tags: string[]
  }
  reverse?: boolean
}

export default function FeaturedStoryPanel({ story, reverse }: FeaturedStoryPanelProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Image Section */}
      <motion.div
        className={`relative h-96 sm:h-full min-h-96 rounded-2xl overflow-hidden group ${
          reverse ? 'lg:order-2' : 'lg:order-1'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-palistory-gold/20 to-palistory-red/20" />

        {/* Image Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-palistory-black via-transparent to-transparent"
          animate={{ opacity: isHovered ? 0.3 : 0.5 }}
          transition={{ duration: 0.3 }}
        />

        {/* Play Button */}
        <motion.button
          className="absolute inset-0 flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-20 h-20 rounded-full bg-palistory-red/80 backdrop-blur-sm flex items-center justify-center hover:bg-palistory-red transition-all duration-300">
            <Play size={32} className="text-palistory-white fill-palistory-white ml-1" />
          </div>
        </motion.button>

        {/* Bottom Gradient */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-palistory-black to-transparent"
          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
        />

        {/* Story Number */}
        <motion.div
          className="absolute top-6 right-6 text-palistory-gold text-sm font-bold"
          animate={{ opacity: isHovered ? 0.5 : 1 }}
        >
          Story #{story.id.toString().padStart(2, '0')}
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className={`space-y-8 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Subtitle */}
        <motion.p
          className="text-palistory-gold text-sm font-semibold uppercase tracking-widest"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {story.subtitle}
        </motion.p>

        {/* Title */}
        <motion.h3
          className="text-4xl sm:text-5xl font-bold text-palistory-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {story.title}
        </motion.h3>

        {/* Excerpt */}
        <motion.p
          className="text-lg text-palistory-beige leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {story.excerpt}
        </motion.p>

        {/* Quote Block */}
        <motion.div
          className="pl-6 border-l-4 border-palistory-gold py-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-palistory-gold italic">{story.quote}</p>
          <p className="text-palistory-beige text-sm mt-2">— {story.author}</p>
        </motion.div>

        {/* Meta Information */}
        <motion.div
          className="flex flex-wrap gap-6 pt-4 border-t border-palistory-gold/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-palistory-beige text-sm">
            <span>📖</span>
            {story.readTime}
          </div>
          <div className="flex items-center gap-2 text-palistory-beige text-sm">
            <Headphones size={16} className="text-palistory-gold" />
            {story.audioDuration}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex gap-3 flex-wrap pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-palistory-gold/10 text-palistory-gold text-xs font-semibold rounded-full border border-palistory-gold/20"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 pt-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-6 py-3 bg-palistory-red text-palistory-white rounded-lg font-semibold flex items-center gap-2 hover-glow"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 40, 40, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Read Story
            <ArrowRight size={18} />
          </motion.button>

          <motion.button
            className="px-6 py-3 border-2 border-palistory-gold text-palistory-gold rounded-lg font-semibold flex items-center gap-2 hover:bg-palistory-gold/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={18} />
            Listen
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  )
}
