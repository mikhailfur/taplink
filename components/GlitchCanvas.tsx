'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function GlitchCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let frameCount = 0

    const setSize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    const nierBeige = 'rgba(197, 184, 161, 0.4)'

    const drawScanLines = () => {
      for (let i = 0; i < 50; i++) {
        ctx.fillStyle = nierBeige
        ctx.fillRect(
          Math.random() * width,
          Math.random() * height,
          Math.random() * 200,
          1
        )
      }
    }

    const drawGlitches = () => {
      for (let i = 0; i < 10; i++) {
        if (Math.random() > 0.95) {
          ctx.fillStyle = `rgba(197, 184, 161, ${Math.random() * 0.3})`
          const x = Math.random() * width
          const y = Math.random() * height
          const w = Math.random() * 100
          const h = Math.random() * 100
          ctx.fillRect(x, y, w, h)
        }
      }
    }

    let animationId: number

    const animate = () => {
      ctx.fillStyle = 'rgba(17, 17, 17, 0.1)'
      ctx.fillRect(0, 0, width, height)
      drawScanLines()
      drawGlitches()

      if (frameCount % 60 === 0 && Math.random() > 0.8) {
        ctx.save()
        ctx.translate(Math.random() * 20 - 10, Math.random() * 20 - 10)
      }

      frameCount++

      if (frameCount % 60 === 0 && Math.random() > 0.8) {
        ctx.restore()
      }

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', setSize)
    setSize()
    animate()

    return () => {
      window.removeEventListener('resize', setSize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-0 animate-[fadeInGlitch_2s_ease-in-out_forwards]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
}

