'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TimelineCard from '@/components/ui/TimelineCard'
import SectionBackground from '@/components/ui/SectionBackground'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Timeline() {
  const [activeYear, setActiveYear] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const timelineEvents = [
    {
      year: '1917',
      title: 'Ottoman Rule Ends',
      description: 'The end of Ottoman governance and the beginning of European mandates',
      color: 'from-palistory-gold to-palistory-beige',
      details: [
        'British Mandate established',
        'Demographic shifts begin',
        'Early Palestinian nationalism emerges',
      ],
    },
    {
      year: '1948',
      title: 'Nakba - The Displacement',
      description: 'A turning point in Palestinian history marking mass displacement',
      color: 'from-palistory-red to-palistory-gold',
      details: [
        'Over 700,000 Palestinians displaced',
        'Refugee camps established',
        'State of Israel declared',
      ],
    },
    {
      year: '1967',
      title: 'Six-Day War',
      description: 'Regional conflict reshaping Palestinian territories',
      color: 'from-palistory-olive to-palistory-gold',
      details: [
        'West Bank and Gaza occupied',
        'Further Palestinian displacement',
        'UN Resolution 242 passed',
      ],
    },
    {
      year: '1987',
      title: 'First Intifada',
      description: 'Palestinian popular uprising for independence',
      color: 'from-palistory-red to-palistory-olive',
      details: [
        'Grassroots resistance movement',
        'Palestinian civil society strengthens',
        'International attention increases',
      ],
    },
    {
      year: 'Present Day',
      title: 'Preservation & Hope',
      description: 'Documenting history, preserving memory, building future',
      color: 'from-palistory-gold to-palistory-white',
      details: [
        'Digital archives established',
        'Youth engagement initiatives',
        'Global solidarity grows',
      ],
    },
  ]

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="relative py-24 sm:py-36 bg-gradient-to-b from-palistory-black to-palistory-dark-gray overflow-hidden"
    >
      <SectionBackground variant="mixed" intensity="strong" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our History"
          lines={['A history that', "didn't end"]}
          accentLine="in 1948."
          description="Explore key moments in Palestine's rich, layered history — from ancient times to the present day."
        />

        {/* Timeline Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Buttons */}
          <motion.button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glassmorphism hover:bg-palistory-gold/20 transition-all duration-300 hidden lg:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Prev
          </motion.button>

          <motion.button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glassmorphism hover:bg-palistory-gold/20 transition-all duration-300 hidden lg:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Next →
          </motion.button>

          {/* Scrollable Container */}
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className="flex-shrink-0 w-full sm:w-96"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveYear(index)}
              >
                <TimelineCard
                  event={event}
                  isActive={activeYear === index}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Dots Navigation */}
        <motion.div
          className="flex justify-center gap-3 mt-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {timelineEvents.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveYear(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeYear === index
                  ? 'bg-palistory-gold w-8'
                  : 'bg-palistory-gold/30 hover:bg-palistory-gold/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
