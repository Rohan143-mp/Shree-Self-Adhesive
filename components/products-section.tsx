"use client"

import { useState } from "react"
import { useScrollAnimation } from "./scroll-animator"
import { X, Eye } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: "bopp",
    title: "BOPP Packaging Tapes",
    description: "Premium quality BOPP self-adhesive tapes for various industrial and commercial sealing requirements.",
    applications: [
      "Heavy duty carton sealing",
      "Stationery & Office supplies",
      "Pharmaceutical packaging",
      "Automobile parts bundling",
      "Garments & Textiles",
      "Shopping & retail stores",
    ],
  },
  {
    id: "jumbo",
    title: "BOPP Jumbo Rolls",
    description:
      "BOPP Jumbo rolls widely used in binding, packaging & adhesion applications for semi-manufacturers and traders.",
    applications: [
      "Available width: 1315/1025mm",
      "Available length: 4000/4500mtr",
      "Customized Printed Jumbo Rolls",
      "Industrial slitting operations",
      "Cost-effective bulk solutions",
      "Commercial packaging operations",
    ],
  },
]

export function ProductsSection() {
  const ref = useScrollAnimation()
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  return (
    <section ref={ref} id="products" className="min-h-screen flex items-center py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block relative group">
            <h3
              className="text-3xl md:text-4xl font-display font-bold text-red-900 mb-4 animate-fade-in-up group-hover:text-amber-600 transition-colors"
              style={{ animationDelay: "0s" }}
            >
              Our Quality Tapes
            </h3>
            <div className="w-16 h-1 bg-amber-500 mx-auto transition-all duration-500 group-hover:w-32"></div>
          </div>
          <p
            className="mt-4 text-slate-600 italic animate-fade-in-up text-sm md:text-base"
            style={{ animationDelay: "0.2s" }}
          >
            Packaging tape is the only product used in every type of industry with the widest variety of applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product.id)}
              className="group bg-red-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-amber-200 animate-fade-in-up hover:scale-105 hover:border-red-900"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="h-64 md:h-80 bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center relative overflow-hidden">
                {/* TODO: Replace placeholder images with actual product photos */}
                <Image
                  src={product.id === "bopp" ? "/images/bopp-tape.png" : "/images/jumbo-roll.png"}
                  alt={product.title}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-red-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-white text-red-900 px-6 md:px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:scale-110 transition-transform">
                    <Eye size={20} />
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold mb-3 text-red-900">{product.title}</h4>
                <p className="text-slate-600 mb-4 line-clamp-2 text-sm md:text-base">{product.description}</p>
                <span className="text-red-900 font-bold text-sm uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all group-hover:text-amber-600">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative animate-scale-in">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-red-900 transition-colors z-10 hover:scale-110"
            >
              <X size={32} />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center overflow-hidden">
                {/* TODO: Replace placeholder images with actual product photos */}
                <Image
                  src={selectedProduct === "bopp" ? "/images/bopp-tape.png" : "/images/jumbo-roll.png"}
                  alt={products.find((p) => p.id === selectedProduct)?.title || "Product"}
                  width={400}
                  height={400}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-red-900 mb-6">
                  {products.find((p) => p.id === selectedProduct)?.title}
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-xs uppercase text-slate-500 mb-3 border-b pb-2">
                      Specifications & Applications
                    </h4>
                    <ul className="text-sm space-y-2 text-slate-600">
                      {products
                        .find((p) => p.id === selectedProduct)
                        ?.applications.map((app, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                            {app}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="inline-block w-full text-center bg-red-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 hover:scale-105 transition-all shadow-lg cursor-pointer"
                  >
                    Inquire for Bulk Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
