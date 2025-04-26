"use client"

import { useEffect, useRef } from "react"

function GridOverlay() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 50
      const lineCount = Math.ceil(Math.max(canvas.width, canvas.height) / gridSize)

      // Animate grid lines with subtle movement
      time += 0.001

      for (let i = 0; i < lineCount; i++) {
        const x = i * gridSize + Math.sin(time + i * 0.1) * 2
        const y = i * gridSize + Math.cos(time + i * 0.1) * 2

        // Vertical lines
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        // Increased opacity from 0.1 to 0.25
        ctx.strokeStyle = `rgba(255, 255, 255, 0.25)`
        ctx.lineWidth = 0.5
        ctx.stroke()

        // Horizontal lines
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        // Increased opacity from 0.1 to 0.25
        ctx.strokeStyle = `rgba(255, 255, 255, 0.25)`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(drawGrid)
    }

    resizeCanvas()
    drawGrid()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-10 pointer-events-none" />
}

export default GridOverlay
