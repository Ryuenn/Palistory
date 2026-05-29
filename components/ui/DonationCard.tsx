'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface DonationCardProps {
  tier: {
    id: number
    title: string
    amount: string
    description: string
    benefits: string[]
    icon: string
    featured?: boolean
  }
}

export default function DonationCard({ tier }: DonationCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden transition-all duration-500 h-full ${
        tier.featured ? 'ring-2 ring-palistory-red sm:scale-105 md:scale-100' : ''
      }`}
      whileHover={{ y: tier.featured ? -12 : -8, scale: 1.02 }}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          tier.featured
            ? 'bg-gradient-to-br from-palistory-red/20 to-palistory-gold/10'
            : 'bg-gradient-to-br from-palistory-gold/10 to-palistory-olive/10'
        }`}
      />

      {/* Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-palistory-gold/20"
        animate={{
          borderColor: tier.featured ? 'rgba(198, 40, 40, 0.5)' : 'rgba(200, 169, 107, 0.2)',
          boxShadow: tier.featured
            ? '0 0 40px rgba(198, 40, 40, 0.3)'
            : '0 0 0px rgba(200, 169, 107, 0)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Featured Badge */}
      {tier.featured && (
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-palistory-red text-palistory-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
            Most Popular
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative p-8 flex flex-col justify-between h-full">
        {/* Icon and Title */}
        <div className="space-y-4 mb-8">
          <motion.div
            className="text-6xl"
            animate={{ scale: tier.featured ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {tier.icon}
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold text-palistory-white mb-2">
              {tier.title}
            </h3>
            <p className="text-sm text-palistory-beige/80">
              {tier.description}
            </p>
          </div>
        </div>

        {/* Amount */}
        <motion.div
          className="mb-8 pb-8 border-b border-palistory-gold/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-palistory-gold">
              {tier.amount}
            </span>
            <span className="text-palistory-beige/60 text-sm">/month</span>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="space-y-3 mb-8 flex-1">
          {tier.benefits.map((benefit, idx) => (
            <motion.div
              key={benefit}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle
                size={20}
                className={`flex-shrink-0 mt-0.5 ${
                  tier.featured ? 'text-palistory-red' : 'text-palistory-gold'
                }`}
              />
              <span className="text-palistory-beige text-sm leading-relaxed">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            tier.featured
              ? 'bg-palistory-red text-palistory-white hover:shadow-lg'
              : 'border-2 border-palistory-gold text-palistory-gold hover:bg-palistory-gold/10'
          }`}
          whileHover={{
            scale: 1.05,
            boxShadow: tier.featured
              ? '0 0 30px rgba(198, 40, 40, 0.3)'
              : '0 0 20px rgba(200, 169, 107, 0.2)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Donate {tier.amount}/month
        </motion.button>
      </div>

      {/* Hover Shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-palistory-white/10 to-transparent"
        animate={{
          x: tier.featured ? 200 : -200,
        }}
        transition={{ duration: 0.8 }}
        style={{ pointerEvents: 'none' }}
      />
    </motion.div>
  )
}
