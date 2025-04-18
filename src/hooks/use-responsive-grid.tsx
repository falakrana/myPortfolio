"use client"

import { useEffect, useState } from "react"

export function useResponsiveGrid() {
  const [itemsPerRow, setItemsPerRow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerRow(1) // Mobile: 1 item per row
      } else if (window.innerWidth < 1024) {
        setItemsPerRow(2) // Tablet: 2 items per row
      } else {
        setItemsPerRow(3) // Desktop: 3 items per row
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return itemsPerRow
}
