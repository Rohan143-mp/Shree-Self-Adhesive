"use client"

import { useScrollAnimation } from "./scroll-animator"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const ref = useScrollAnimation()

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden text-white min-h-screen flex items-center pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="images/hero.png"
          alt="Shree Self Adhesive BOPP Tape Rolls"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center md:object-center"
          style={{
            objectPosition: 'center center',
          }}
        />
        {/* Mobile-optimized overlay - lighter for better text readability */}
        <div className="absolute inset-0 bg-red-950/50 md:bg-red-950/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/70 via-red-950/30 to-transparent md:from-red-950/60 md:via-transparent md:to-transparent opacity-50 md:opacity-40" />
        {/* Additional mobile overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-950/30 md:hidden" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-8 md:py-12">
        <div className="max-w-3xl space-y-3 md:space-y-6 animate-slide-in-left" style={{ animationDelay: "0s" }}>
          <div className="inline-block bg-amber-500 text-white px-3 md:px-4 py-1.5 md:py-1 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:scale-110 hover:bg-amber-600 transition-all duration-300 shadow-lg">
            Premier Manufacturers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight drop-shadow-lg">
            Shree Self <br />
            <span className="text-amber-300">Adhesive Tape</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-red-50 md:text-red-100 max-w-lg italic drop-shadow-md">
            "Manufactures & Distributor of Self Adhesive Tape Solutions"
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-3 pt-3 md:pt-4">
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector("#products")
                if (target) {
                  target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }}
              className="bg-amber-500 text-white px-6 md:px-8 py-3 md:py-3 rounded-lg font-bold hover:bg-amber-600 active:scale-95 hover:scale-105 transition-all duration-300 inline-block shadow-xl text-center text-sm md:text-base group"
            >
              <span className="block group-hover:translate-y-1 transition-transform duration-300">
                Explore Products
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector("#contact")
                if (target) {
                  target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }}
              className="border-2 border-white bg-white/10 backdrop-blur-sm px-6 md:px-8 py-3 md:py-3 rounded-lg font-bold hover:bg-white hover:text-red-900 active:scale-95 hover:scale-105 transition-all duration-300 inline-block text-center text-sm md:text-base group shadow-xl"
            >
              <span className="block group-hover:translate-y-1 transition-transform duration-300">Get a Quote</span>
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          const target = document.querySelector("#about")
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 cursor-pointer"
      >
        <ChevronDown size={24} className="md:hidden text-white opacity-80 drop-shadow-lg hover:opacity-100 transition-opacity" />
        <ChevronDown size={32} className="hidden md:block text-white opacity-70 hover:opacity-100 transition-opacity" />
      </a>
    </section>
  )
}
