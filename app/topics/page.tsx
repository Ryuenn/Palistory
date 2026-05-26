'use client'

import { motion } from 'framer-motion'
import PageShell from '@/components/ui/PageShell'
import PageHero from '@/components/ui/PageHero'
import SectionBackground from '@/components/ui/SectionBackground'
import SectionHeading from '@/components/ui/SectionHeading'

const topics = [
  {
    title: 'Land & Geography',
    description: 'From olive groves to coastlines — the land that holds the memory.',
    icon: '🌿',
    image: '/images/placeholder-story-3.svg',
  },
  {
    title: 'Food & Cuisine',
    description: 'Recipes carried across generations and borders.',
    icon: '🍽️',
    image: '/images/placeholder-story-1.svg',
  },
  {
    title: 'Music & Dabke',
    description: 'The rhythms of resistance, joy, and community.',
    icon: '🎵',
    image: '/images/placeholder-story-2.svg',
  },
  {
    title: 'Tatreez & Craft',
    description: 'Embroidery patterns that map villages, families, and history.',
    icon: '🧵',
    image: '/images/placeholder-story-3.svg',
  },
  {
    title: 'Language & Poetry',
    description: 'Words as a homeland: Darwish, Tuqan, and the spoken inheritance.',
    icon: '📜',
    image: '/images/placeholder-story-2.svg',
  },
  {
    title: 'Diaspora',
    description: 'Communities holding identity across continents and decades.',
    icon: '🌍',
    image: '/images/placeholder-story-1.svg',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function TopicsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Explore by Theme"
        lines={['Threads of', 'identity.']}
        accentLine="Roots of memory."
        description="Browse Palestinian heritage through the themes that weave it together — land, language, craft, food, and song."
        image="/images/topics-hero.svg"
      />

      <section className="relative py-24 sm:py-36 bg-palistory-black overflow-hidden">
        <SectionBackground variant="olive" intensity="medium" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="All Topics"
            lines={['Every thread', 'tells a story.']}
            description="Each topic gathers oral histories, photographs, recipes, and artefacts curated by our community contributors."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {topics.map((t) => (
              <motion.div
                key={t.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer border border-palistory-gold/15 hover:border-palistory-gold/50 transition-colors"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${t.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-palistory-black via-palistory-black/60 to-transparent" />
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  <div className="text-5xl">{t.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-palistory-white mb-2 group-hover:text-palistory-gold transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-palistory-beige text-sm">{t.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageShell>
  )
}
