'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const context = ctx

    // Set canvas size
    const resizeCanvas = () => {
      c.width = window.innerWidth
      c.height = window.innerHeight
    }
    resizeCanvas()

    // Particle system
    const particles: Particle[] = []
    const particleCount = 30
    const c = canvas

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      life: number
      maxLife: number

      constructor() {
        this.x = Math.random() * c.width
        this.y = Math.random() * c.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        this.life = 0
        this.maxLife = Math.random() * 10000 + 5000
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life++

        // Bounce off edges
        if (this.x < 0 || this.x > c.width) this.vx *= -1
        if (this.y < 0 || this.y > c.height) this.vy *= -1

        // Fade out
        this.opacity = (this.maxLife - this.life) / this.maxLife * 0.3
      }

      draw() {
        const gradient = context.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2
        )
        gradient.addColorStop(0, `rgba(200, 169, 107, ${this.opacity})`)
        gradient.addColorStop(1, `rgba(200, 169, 107, 0)`)

        context.fillStyle = gradient
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      context.fillStyle = 'rgba(11, 11, 11, 0.05)'
      context.fillRect(0, 0, c.width, c.height)

      particles.forEach((particle, index) => {
        particle.update()
        particle.draw()

        // Remove dead particles and add new ones
        if (particle.life > particle.maxLife) {
          particles[index] = new Particle()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-50"
    />
  )
}
