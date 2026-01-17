"use client"

import { useScrollAnimation } from "./scroll-animator"
import { CheckCircle2, CreditCard, Award, Smile, Palette, Truck } from "lucide-react"

const features = [
  { icon: CheckCircle2, label: "High Quality" },
  { icon: CreditCard, label: "Cost Effective" },
  { icon: Award, label: "State of the Art" },
  { icon: Smile, label: "Client Satisfaction" },
  { icon: Palette, label: "Customization" },
  { icon: Truck, label: "Timely Delivery" },
]

export function FeaturesSection() {
  const ref = useScrollAnimation()

  return (
    <section ref={ref} id="why-choose" className="py-20 pb-10 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block relative group">
            <h3
              className="text-3xl md:text-4xl font-display font-bold text-red-900 mb-4 animate-fade-in-up group-hover:text-amber-600 transition-colors"
              style={{ animationDelay: "0s" }}
            >
              Why Choose Us?
            </h3>
            <div className="w-16 h-1 bg-amber-500 mx-auto transition-all duration-500 group-hover:w-32"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="bg-white p-4 md:p-6 rounded-xl shadow-sm text-center flex flex-col items-center border border-amber-200 animate-scale-in hover:shadow-lg hover:scale-110 hover:border-red-900 hover:bg-red-50 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <Icon
                  size={32}
                  className="mb-3 text-red-900 group-hover:text-amber-500 transition-colors duration-300"
                />
                <h5 className="font-bold text-xs md:text-sm text-center leading-tight text-gray-700 group-hover:text-red-900 transition-colors">
                  {feature.label}
                </h5>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
