'use client'

import { motion } from 'framer-motion'
import DonationCard from '@/components/ui/DonationCard'
import SectionBackground from '@/components/ui/SectionBackground'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Donation() {
  const donationTiers = [
    {
      id: 1,
      title: 'Friend',
      amount: '$5',
      description: 'Support our digital archive',
      benefits: [
        'Access to exclusive content',
        'Monthly newsletter',
        'Recognition in supporters list',
      ],
      icon: '🤝',
    },
    {
      id: 2,
      title: 'Preserver',
      amount: '$25',
      description: 'Help preserve stories',
      benefits: [
        'All Friend benefits',
        'Quarterly impact reports',
        'Exclusive webinar access',
        'Special badge on platform',
      ],
      icon: '📚',
      featured: true,
    },
    {
      id: 3,
      title: 'Custodian',
      amount: '$100',
      description: 'Become a legacy builder',
      benefits: [
        'All Preserver benefits',
        'Annual gala invitation',
        'Personalized thank you video',
        'Legacy recognition',
        'Direct impact reports',
      ],
      icon: '👑',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="donation"
      className="relative py-24 sm:py-36 bg-palistory-black overflow-hidden"
    >
      <SectionBackground variant="red" intensity="strong" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Your Support"
          lines={['Preserve today.']}
          accentLine="Inspire tomorrow."
          description="Your contribution helps us document, preserve, and share Palestinian stories for generations. Every story preserved is a memory protected, a voice heard, a legacy secured."
        />

        {/* Donation Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {donationTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
            >
              <DonationCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Amount Section */}
        <motion.div
          className="bg-gradient-to-br from-palistory-olive/10 to-palistory-gold/10 rounded-2xl p-6 sm:p-12 border border-palistory-gold/20 glassmorphism"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-palistory-white">
                Make a Custom Donation
              </h3>
              <p className="text-palistory-beige text-lg">
                Your unique contribution creates a direct impact. Every amount matters and helps us continue our mission of preservation and remembrance.
              </p>
              <ul className="space-y-3">
                {[
                  'Full tax deductibility (where applicable)',
                  'Complete transparency on fund usage',
                  'Direct communication with our team',
                  'Custom impact reports',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-palistory-beige"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-palistory-gold text-xl">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-6 py-4 bg-palistory-charcoal text-palistory-white rounded-lg border border-palistory-gold/20 focus:border-palistory-gold focus:outline-none transition-colors"
              />
              <select className="w-full px-6 py-4 bg-palistory-charcoal text-palistory-white rounded-lg border border-palistory-gold/20 focus:border-palistory-gold focus:outline-none transition-colors">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>AUD</option>
              </select>
              <motion.button
                className="w-full px-8 py-4 bg-palistory-red text-palistory-white rounded-lg font-semibold hover-glow transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(198, 40, 40, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Donate Now
              </motion.button>
              <p className="text-sm text-palistory-beige/60 text-center">
                Secure payment processed by Stripe
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 pt-12 border-t border-palistory-gold/20 flex flex-wrap justify-center gap-8 text-center text-palistory-beige"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="text-3xl font-bold text-palistory-gold">501(c)(3)</div>
            <p className="text-sm">Tax Exempt</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-palistory-gold">100%</div>
            <p className="text-sm">Transparent Financials</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-palistory-gold">50k+</div>
            <p className="text-sm">Active Supporters</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
