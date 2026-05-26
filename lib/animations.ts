import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Hook for triggering animations on scroll
 */
export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return elementRef
}

/**
 * Hook for number counting animation
 */
export const useCountUp = (target: number, duration: number = 2) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      { value: 0 },
      { value: target, duration, snap: { value: 1 } },
      {
        onUpdate: function () {
          if (ref.current) {
            ref.current.textContent = Math.floor(this.targets()[0].value).toLocaleString()
          }
        },
      }
    )
  }, [target, duration])

  return ref
}

/**
 * Smooth scroll to element
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: element,
        offsetY: 80,
      },
    })
  }
}

/**
 * Parallax effect hook
 */
export const useParallax = (strength: number = 50) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        overwrite: 'auto',
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    return () => element.removeEventListener('mousemove', handleMouseMove)
  }, [strength])

  return elementRef
}

/**
 * Stagger animation for multiple elements
 */
export const useStaggerAnimation = (selector: string) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: elements[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [selector])
}
