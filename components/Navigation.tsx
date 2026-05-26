'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Stories', href: '/stories' },
    { label: 'Timeline', href: '/timeline' },
    { label: 'Topics', href: '/topics' },
    { label: 'Media', href: '/media' },
    { label: 'About', href: '/about' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glassmorphism' : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-palistory-red hover-glow">
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/images/palistory-logo.png"
                  alt="Palistory logo"
                  width={36}
                  height={36}
                  className="rounded-lg"
                />
                <span className="hidden sm:inline">Palistory</span>
              </motion.span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <Link key={item.label} href={item.href} className="relative group">
                    <motion.span
                      className={`relative inline-block transition-colors duration-300 ${
                        active
                          ? 'text-palistory-gold'
                          : 'text-palistory-beige hover:text-palistory-gold'
                      }`}
                      whileHover={{ y: -2 }}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-palistory-gold transition-all duration-300 ${
                          active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </motion.span>
                  </Link>
                )
              })}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <motion.button
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-palistory-charcoal transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={18} className="text-palistory-gold" />
                <span className="text-sm text-palistory-beige hidden lg:inline">EN</span>
              </motion.button>

              <Link href="/donation" className="hidden sm:block">
                <motion.span
                  className="inline-block px-6 py-2.5 bg-palistory-red text-palistory-white rounded-lg font-semibold hover-glow transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 40, 40, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate
                </motion.span>
              </Link>

              <motion.button
                className="md:hidden p-2 rounded-lg hover:bg-palistory-charcoal transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-palistory-gold" />
                ) : (
                  <Menu size={24} className="text-palistory-gold" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-30 md:hidden bg-palistory-black/95 backdrop-blur-lg pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col gap-6 px-6">
          {navItems.map((item, index) => (
            <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
              <motion.span
                className={`block text-2xl font-bold transition-colors ${
                  isActive(item.href)
                    ? 'text-palistory-gold'
                    : 'text-palistory-beige hover:text-palistory-gold'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
          <Link href="/donation" onClick={() => setIsMobileMenuOpen(false)}>
            <motion.span
              className="mt-6 inline-block px-6 py-3 bg-palistory-red text-palistory-white rounded-lg font-semibold w-full text-center hover-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              Donate Now
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </>
  )
}
