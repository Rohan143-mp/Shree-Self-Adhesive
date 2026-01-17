"use client"

import { useScrollAnimation } from "./scroll-animator"
import { Zap, Award, Users, Target } from "lucide-react"

export function AboutSection() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="about" className="min-h-screen flex items-center py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative animate-fade-in-up space-y-6">
            <div className="bg-red-50 p-6 md:p-8 rounded-2xl border border-red-200 hover:shadow-lg hover:border-amber-400 transition-all duration-300 group">
              <h4 className="text-red-900 font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                FLOWLESS PACKAGING
              </h4>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                Shree Self Adhesive Tape (Since 2021) is one of the leading companies in BOPP Tapes & Packaging
                products. We provide a wide range of products including BOPP Self Adhesive Tapes, Printed BOPP Tapes,
                Masking Tapes, Stretch Films, Floor Marking, and Jumbo Rolls.
              </p>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-amber-500 p-6 md:p-8 rounded-lg shadow-xl hover:scale-110 transition-all duration-300 group cursor-pointer">
              <p className="text-white font-bold text-3xl md:text-4xl group-hover:text-yellow-100 transition-colors">
                10+
              </p>
              <p className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider group-hover:text-yellow-100 transition-colors">
                Years Excellence
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <div className="relative group inline-block">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-red-900 pb-3 group-hover:text-amber-600 transition-colors">
                  Our Legacy & Infrastructure
                </h3>
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Zap,
                  title: "Company Infrastructure",
                  desc: "Well-equipped infrastructure with advanced technology machineries for high-quality product manufacturing with latest testing equipment.",
                },
                {
                  icon: Award,
                  title: "Our Machineries",
                  desc: "Auto Tension Control slitting machine, Core cutter machine, Shrink machine, Slicer & logger machine with state-of-the-art equipment.",
                },
                {
                  icon: Users,
                  title: "Our Team",
                  desc: "Expertise professionals for every domain including designers, skilled laborers, R&D experts, logistics specialists, and sales & marketing team.",
                },
                {
                  icon: Target,
                  title: "Quality & Service",
                  desc: "We stick with trust to provide quality products and services to enrich customer expectations with maximum client satisfaction.",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-red-50 transition-all duration-300 group cursor-pointer hover:translate-x-2"
                  >
                    <div className="bg-red-100 p-2 rounded text-red-900 shrink-0 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-red-900 group-hover:text-amber-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
