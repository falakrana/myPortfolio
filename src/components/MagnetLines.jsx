"use client"

import { useEffect, useRef, useState } from "react"

function MagnetLines({
  rows = 15,
  columns = 15,
  containerSize = "100vw",
  lineColor = "white",
  lineWidth = "2px",
  lineHeight = "20px",
  baseAngle = 0,
  style = {},
}) {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [lines, setLines] = useState([])
  const [centerPoint, setCenterPoint] = useState({ x: 0, y: 0 })

  // Update container dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
        setCenterPoint({ x: width / 2, y: height / 2 })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Generate lines on dimension change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const cellWidth = dimensions.width / columns
    const cellHeight = dimensions.height / rows

    const newLines = []

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const x = col * cellWidth + cellWidth / 2
        const y = row * cellHeight + cellHeight / 2

        newLines.push({ x, y, row, col })
      }
    }

    setLines(newLines)
  }, [dimensions, rows, columns])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Set initial mouse position to center
    setMousePosition(centerPoint)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [centerPoint])

  // Calculate angle for each line based on mouse position
  const getLineStyle = (line) => {
    // Calculate angle between line and mouse
    const dx = mousePosition.x - line.x
    const dy = mousePosition.y - line.y

    // Calculate angle in radians and convert to degrees
    let angle = Math.atan2(dy, dx) * (180 / Math.PI)

    // Add base angle
    angle += baseAngle

    // Calculate distance for intensity
    const distance = Math.sqrt(dx * dx + dy * dy)
    const maxDistance = Math.sqrt(dimensions.width * dimensions.width + dimensions.height * dimensions.height) / 2

    // Calculate distance from center for radial pattern
    const dxCenter = centerPoint.x - line.x
    const dyCenter = centerPoint.y - line.y
    const distanceFromCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter)
    const normalizedDistanceFromCenter = distanceFromCenter / maxDistance

    // Calculate opacity based on distance
    const opacity = 0.2 + Math.max(0, 1 - normalizedDistanceFromCenter) * 0.8

    // Adjust line length based on distance from center
    const lineLength = Number.parseFloat(lineHeight) * (1 - normalizedDistanceFromCenter * 0.5)

    return {
      left: `${line.x}px`,
      top: `${line.y}px`,
      width: `${lineLength}px`,
      height: lineWidth,
      backgroundColor: lineColor,
      opacity,
      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      position: "absolute",
      transition: "transform 0.3s ease-out, opacity 0.3s ease-out, width 0.3s ease-out",
    }
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: containerSize,
        height: containerSize,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 10,
        ...style,
      }}
    >
      {lines.map((line, index) => (
        <div key={index} style={getLineStyle(line)} />
      ))}
    </div>
  )
}

export default MagnetLines

