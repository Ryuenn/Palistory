'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'

interface PageShellProps {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const animationFrame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="overflow-x-hidden bg-palistory-black">
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}
