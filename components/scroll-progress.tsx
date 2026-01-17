"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let rafId: number | null = null

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
      
      // Use requestAnimationFrame for smooth updates
      rafId = requestAnimationFrame(updateScrollProgress)
    }

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateScrollProgress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateScrollProgress()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-red-900/10 z-50">
      <div
        className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-900 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
