"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("home")

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About Us", id: "about" },
    { href: "#products", label: "Products", id: "products" },
    { href: "#why-choose", label: "Why Choose Us", id: "why-choose" },
    { href: "#industries", label: "Industries", id: "industries" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) observer.observe(element)
    })

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 hover:opacity-90 transition-opacity group">
          <Image
            src="images/looo.png"
            alt="Shree Self Adhesive Tape"
            width={50}
            height={50}
            priority
            className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
          />
          <div>
            <h1 className="font-display text-lg md:text-xl text-red-900 font-bold leading-none group-hover:text-amber-600 transition-colors">
              Shree Self
            </h1>
            <p className="text-xs uppercase tracking-widest text-amber-600 font-bold group-hover:text-orange-600 transition-colors">
              Adhesive Tape
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-8 font-medium text-sm items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector(link.href)
                if (target) {
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                    behavior: "smooth",
                  })
                }
              }}
              className={`${activeSection === link.id ? "text-red-900" : "text-gray-700"
                } hover:text-red-900 transition-colors relative group`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-900 hover:scale-110 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-xl border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                  const target = document.querySelector(link.href)
                  if (target) {
                    setTimeout(() => {
                      window.scrollTo({
                        top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                        behavior: "smooth",
                      })
                    }, 100)
                  }
                }}
                className={`${activeSection === link.id ? "text-red-900 font-bold translate-x-2" : "text-gray-700"
                  } hover:text-red-900 transition-all py-2 duration-300 block border-b border-gray-100 last:border-0`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
