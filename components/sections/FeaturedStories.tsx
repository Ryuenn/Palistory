'use client'

import { motion } from 'framer-motion'
import FeaturedStoryPanel from '@/components/ui/FeaturedStoryPanel'
import SectionBackground from '@/components/ui/SectionBackground'
import SectionHeading from '@/components/ui/SectionHeading'

export default function FeaturedStories() {
  const stories = [
    {
      id: 1,
      title: 'The Refugee Kitchen',
      subtitle: 'Preserving Culinary Heritage',
      excerpt: 'How Palestinian families have kept their culinary traditions alive across generations and borders.',
      quote: '"Food is memory, and memory is resistance."',
      author: 'Um Fatima',
      readTime: '8 min read',
      audioDuration: '12 min',
      tags: ['Culture', 'Food', 'Heritage'],
    },
    {
      id: 2,
      title: 'Voices of Return',
      subtitle: 'Stories of Displacement and Hope',
      excerpt: 'Personal narratives from those who fled and those who remained, bridging the geographical divide.',
      quote: '"Home is not just a place, it\'s the people we remember together."',
      author: 'Ahmed Ibrahim',
      readTime: '12 min read',
      audioDuration: '15 min',
      tags: ['History', 'Memory', 'Community'],
    },
    {
      id: 3,
      title: 'Artisans of Tomorrow',
      subtitle: 'Youth Reclaiming Traditional Crafts',
      excerpt: 'Meet the young Palestinians reviving ancient handicrafts and transforming them for the modern world.',
      quote: '"Our hands carry the history of our people."',
      author: 'Layla Mansour',
      readTime: '10 min read',
      audioDuration: '13 min',
      tags: ['Youth', 'Crafts', 'Innovation'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  }

  return (
    <section
      id="featured"
      className="relative py-24 sm:py-36 bg-palistory-dark-gray overflow-hidden"
    >
      <SectionBackground variant="red" intensity="medium" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Featured Voices"
          lines={['Immersive narratives.']}
          accentLine="Untold legacies."
          description="Long-form stories that capture the essence of Palestinian identity, resilience, and everyday beauty."
        />

        {/* Stories Grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2 lg:direction-rtl' : ''
              }`}
            >
              <FeaturedStoryPanel story={story} reverse={index % 2 === 1} />
            </motion.div>
          ))}
        </motion.div>

        {/* Browse All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-palistory-red text-palistory-white rounded-lg font-semibold hover-glow transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 40, 40, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
