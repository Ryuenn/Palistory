'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import SectionBackground from '@/components/ui/SectionBackground'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    explore: [
      { label: 'Stories', href: '/stories' },
      { label: 'Timeline', href: '/timeline' },
      { label: 'Topics', href: '/topics' },
      { label: 'Media', href: '/media' },
    ],
    about: [
      { label: 'Our Mission', href: '/about' },
      { label: 'Team', href: '/about#team' },
      { label: 'Partners', href: '/about#partners' },
      { label: 'Impact', href: '/about#impact' },
    ],
    support: [
      { label: 'Donate', href: '/donation' },
      { label: 'Volunteer', href: '/donation#volunteer' },
      { label: 'Contact', href: '/about#contact' },
      { label: 'Subscribe', href: '/#subscribe' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Accessibility', href: '#accessibility' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="relative bg-palistory-black border-t border-palistory-gold/10 overflow-hidden">
      <SectionBackground variant="gold" intensity="subtle" pattern={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          className="py-12 sm:py-16 border-b border-palistory-gold/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-palistory-white mb-3">
                Stay Connected
              </h3>
              <p className="text-palistory-beige">
                Subscribe to our newsletter for stories, updates, and insights into Palestinian history and culture.
              </p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-palistory-charcoal text-palistory-white rounded-lg border border-palistory-gold/20 focus:border-palistory-gold focus:outline-none transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-palistory-red text-palistory-white rounded-lg font-semibold hover-glow whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 md:col-span-1 space-y-6"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/palistory-logo.png"
                alt="Palistory logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold text-palistory-red">Palistory</span>
            </div>
            <p className="text-palistory-beige/80 text-sm leading-relaxed">
              Preserving Palestinian memory, documenting history, and sharing untold stories for generations to come.
            </p>
          </motion.div>

          {/* Explore */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-palistory-white">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-palistory-beige/70 hover:text-palistory-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-palistory-white">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-palistory-beige/70 hover:text-palistory-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-palistory-white">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-palistory-beige/70 hover:text-palistory-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-bold text-palistory-white">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-palistory-beige/70 hover:text-palistory-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact and Social */}
        <motion.div
          className="py-12 border-t border-palistory-gold/10 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-palistory-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:hello@palistory.com"
                className="flex items-center gap-3 text-palistory-beige hover:text-palistory-gold transition-colors duration-300"
                whileHover={{ x: 4 }}
              >
                <Mail size={18} className="text-palistory-gold flex-shrink-0" />
                <span>hello@palistory.com</span>
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-palistory-beige hover:text-palistory-gold transition-colors duration-300"
                whileHover={{ x: 4 }}
              >
                <Phone size={18} className="text-palistory-gold flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </motion.a>
              <motion.div
                className="flex items-center gap-3 text-palistory-beige"
                whileHover={{ x: 4 }}
              >
                <MapPin size={18} className="text-palistory-gold flex-shrink-0" />
                <span>Global - With offices worldwide</span>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-palistory-white mb-4">Follow Us</h4>
            <motion.div
              className="flex gap-4 flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    title={social.label}
                    className="p-3 rounded-full glassmorphism hover:bg-palistory-gold/20 transition-all duration-300 hover-glow"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="text-palistory-gold" />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-palistory-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-palistory-beige/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Palistory. All rights reserved. Preserving Palestinian memory worldwide.
          </p>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="#privacy" className="hover:text-palistory-gold transition-colors">Privacy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-palistory-gold transition-colors">Terms</a>
            <span>•</span>
            <a href="#cookies" className="hover:text-palistory-gold transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
