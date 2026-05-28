'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Gift } from 'lucide-react'
import { usePathname } from 'next/navigation'

/* ─── Nav data ──────────────────────────────────────────────────── */
const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Palistory',
    href: '/about',
    dropdown: [
      { label: 'Organizational Information', href: '/about' },
    ],
  },
  { label: 'Team Members', href: '/#team' },
  { label: 'Story Tellers', href: '/#storytellers' },
  {
    label: 'Events',
    href: '/events',
    dropdown: [
      { label: 'Upcoming Events', href: '/events' },
      { label: 'Photo Gallery', href: '/events/photos' },
      { label: 'Video Gallery', href: '/events/videos' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsMobileMenuOpen(false) }, [pathname])

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  const isActive = (href: string) => {
    if (href.includes('#')) return false
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

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const active = isActive(item.href)
                const hasDropdown = !!item.dropdown
                const isOpen = activeDropdown === item.label

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => hasDropdown && openDropdown(item.label)}
                    onMouseLeave={() => hasDropdown && scheduleClose()}
                  >
                    <Link href={item.href} className="relative group">
                      <motion.span
                        className={`relative inline-flex items-center gap-1 transition-colors duration-300 ${
                          active
                            ? 'text-palistory-gold'
                            : 'text-palistory-beige hover:text-palistory-gold'
                        }`}
                        whileHover={{ y: -2 }}
                      >
                        {item.label}
                        {hasDropdown && (
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={13} />
                          </motion.span>
                        )}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-palistory-gold transition-all duration-300 ${
                            active ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </motion.span>
                    </Link>

                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {hasDropdown && isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-0 mt-3 min-w-[220px] glassmorphism-dark rounded-xl overflow-hidden border border-palistory-gold/20 z-50 shadow-2xl"
                          onMouseEnter={() => openDropdown(item.label)}
                          onMouseLeave={scheduleClose}
                        >
                          {item.dropdown!.map((sub, i) => (
                            <div key={sub.label}>
                              <Link
                                href={sub.href}
                                className="block px-5 py-3.5 text-sm text-palistory-beige/80 hover:text-palistory-gold hover:bg-palistory-gold/5 transition-colors duration-150"
                              >
                                {sub.label}
                              </Link>
                              {i < item.dropdown!.length - 1 && (
                                <div className="h-px bg-palistory-gold/10 mx-4" />
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <Link href="/donation" className="hidden sm:block">
                <motion.span
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-palistory-red text-palistory-white rounded-lg font-semibold hover-glow transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(198, 40, 40, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Gift size={15} />
                  Make A Donation
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-0 right-0 z-30 md:hidden glassmorphism border-t border-palistory-gold/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                        }
                        className="w-full flex items-center justify-between px-3 py-3 text-palistory-beige hover:text-palistory-gold transition-colors text-left"
                      >
                        <span className="text-xl font-bold">{item.label}</span>
                        <motion.span
                          animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden pl-5"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 py-2.5 text-palistory-beige/70 hover:text-palistory-gold transition-colors text-sm"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.span
                        className={`block px-3 py-3 text-2xl font-bold transition-colors ${
                          isActive(item.href)
                            ? 'text-palistory-gold'
                            : 'text-palistory-beige hover:text-palistory-gold'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  )}
                </div>
              ))}

              <Link href="/donation" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.span
                  className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-palistory-red text-palistory-white rounded-lg font-semibold w-full hover-glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Gift size={16} />
                  Make A Donation
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
