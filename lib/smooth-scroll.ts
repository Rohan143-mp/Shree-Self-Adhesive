/**
 * Smooth scroll utility for anchor links
 */
export function smoothScrollTo(targetId: string, offset: number = 80) {
  const target = document.querySelector(targetId)
  if (target) {
    const elementPosition = target.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

/**
 * Initialize smooth scroll for all anchor links
 */
export function initSmoothScroll() {
  if (typeof window === "undefined") return

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href && href !== "#" && href.startsWith("#")) {
        e.preventDefault()
        smoothScrollTo(href, 80)
      }
    })
  })
}
