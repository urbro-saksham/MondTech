"use client"

import { useEffect, useRef } from "react"

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Create stars
    const stars = []
    const numStars = 200

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      })
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Move star
        star.y += star.speed

        // Reset star position when it goes off screen
        if (star.y > canvas.height) {
          star.y = -5
          star.x = Math.random() * canvas.width
        }

        // Twinkling effect
        star.twinklePhase += star.twinkleSpeed
        const twinkleOpacity = star.opacity + Math.sin(star.twinklePhase) * 0.3

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, twinkleOpacity)})`
        ctx.fill()

        // Add glow effect for larger stars
        if (star.size > 1.5) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(147, 197, 253, ${twinkleOpacity * 0.1})`
          ctx.fill()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      // Redistribute stars on resize
      stars.forEach((star) => {
        if (star.x > canvas.width) star.x = Math.random() * canvas.width
        if (star.y > canvas.height) star.y = Math.random() * canvas.height
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}
