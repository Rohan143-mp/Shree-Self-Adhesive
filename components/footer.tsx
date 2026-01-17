"use client"

import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppClick = (message: string) => {
    const phone = "919689239023"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank")
  }

  return (
    <footer className="bg-red-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12 pb-8 border-b border-white/20">
          <div>
            <h5 className="font-bold mb-4 text-lg hover:text-amber-300 transition-colors cursor-default">Company</h5>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                { label: "About", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Industries", href: "#industries" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-lg hover:text-amber-300 transition-colors cursor-default">
              Quick Links
            </h5>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                { label: "Contact", href: "#contact" },
                { label: "Why Choose Us", href: "#why-choose" },
                { label: "Home", href: "#home" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors cursor-pointer hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-lg flex items-center gap-2 hover:text-amber-300 transition-colors cursor-default">
              <Phone size={18} />
              Contact Info
            </h5>
            <ul className="space-y-3 text-sm text-white/80">
              {[
                { icon: Phone, text: "+91 9689 239 023", href: "tel:9689239023" },
                { icon: Phone, text: "+91 8208 628 584", href: "tel:8208628584" },
                { icon: Phone, text: "+91 8149 881 533", href: "tel:8149881533" },
                { icon: Mail, text: "shreeindustries0718@gmail.com", href: "mailto:shreeindustries0718@gmail.com" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <li
                    key={idx}
                    className="flex items-center gap-2 hover:text-amber-300 transition-colors group cursor-pointer"
                  >
                    <Icon size={16} className="group-hover:scale-125 transition-transform" />
                    <a href={item.href}>{item.text}</a>
                  </li>
                )
              })}
              <li className="flex items-start gap-2 text-white/80 hover:text-amber-300 transition-colors group cursor-pointer">
                <MapPin size={16} className="mt-0.5 shrink-0 group-hover:scale-125 transition-transform" />
                <a
                  href="https://maps.apple/p/Hy9-QKoRy6ITVj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Ganeshkhind, Punewadi, Tal. Parner, Dist. Ahmednagar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-lg hover:text-amber-300 transition-colors cursor-default">
              Connect With Us
            </h5>
            <p className="text-sm text-white/80 mb-4">Get in touch via WhatsApp or social media for quick support.</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleWhatsAppClick("Hi! I'd like to know more about your adhesive tape products.")}
                className="hover:text-amber-300 transition-colors cursor-pointer hover:scale-125 duration-300 hover:-translate-y-1"
                title="Chat on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.935 1.23l-.352.214-3.643-.955.975 3.561-.229.365a9.86 9.86 0 001.427 5.313c2.187 3.772 6.652 6.134 11.425 6.134 5.384 0 10.116-2.787 12.732-6.96-2.187 3.772-6.652 6.134-11.425 6.134-5.384 0-10.116-2.787-12.732-6.96.002-.008.004-.016.007-.023l-.354-.215C2.578 17.36 1.293 14.5 1.293 11.506 1.293 5.889 5.818 1.298 11.506 1.298c5.617 0 10.208 4.525 10.208 10.143 0 5.617-4.591 10.208-10.208 10.208z" />
                </svg>
              </button>
              {[Facebook, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-amber-300 transition-colors cursor-pointer hover:scale-125 duration-300 hover:-translate-y-1 inline-block"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-white/70 hover:text-white/90 transition-colors">
          <p>
            © {currentYear} Shree Self Adhesive Tape. All rights reserved. | Manufactures & Distributor of Self Adhesive
            Tape Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
