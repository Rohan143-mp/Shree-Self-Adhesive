"use client"

import { useEffect, useRef, RefObject } from "react"

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            // Add a slight delay for staggered animations
            const delay = entry.target.getAttribute("data-animation-delay") || "0"
            if (delay !== "0") {
              entry.target.style.animationDelay = `${delay}ms`
            }
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return ref
}
