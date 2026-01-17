"use client"

import { useScrollAnimation } from "./scroll-animator"
import { Car, UtensilsCrossed, Pill, Beaker, ShoppingBag, Leaf } from "lucide-react"

const industries = [
  { icon: Car, label: "Automobile" },
  { icon: UtensilsCrossed, label: "Food & Beverages" },
  { icon: Pill, label: "Pharmaceutical" },
  { icon: Beaker, label: "Chemical" },
  { icon: ShoppingBag, label: "Shopping & Retail" },
  { icon: Leaf, label: "Agriculture" },
]

export function IndustriesSection() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="industries" className="py-10 pb-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block relative group">
            <h3
              className="text-3xl md:text-4xl font-display font-bold text-red-900 mb-4 animate-fade-in-up group-hover:text-amber-600 transition-colors"
              style={{ animationDelay: "0s" }}
            >
              Industries We Supply
            </h3>
            <div className="w-16 h-1 bg-amber-500 mx-auto transition-all duration-500 group-hover:w-32"></div>
          </div>
          <p className="mt-4 text-slate-600 text-sm md:text-base animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            BOPP Tapes & Packaging Materials are applicable in every small & large scale industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <div
                key={i}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm text-center group hover:bg-red-900 transition-all duration-300 animate-fade-in-up hover:scale-110 hover:shadow-lg cursor-pointer border border-amber-200 hover:border-red-900"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon
                  size={40}
                  className="mb-4 mx-auto text-red-900 group-hover:text-amber-400 transition-colors duration-300"
                />
                <h5 className="font-bold text-sm text-red-900 group-hover:text-white transition-colors duration-300">
                  {industry.label}
                </h5>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
