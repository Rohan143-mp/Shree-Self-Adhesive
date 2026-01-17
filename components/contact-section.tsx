"use client"

import type React from "react"
import { useState } from "react"
import { useScrollAnimation } from "./scroll-animator"
import { MapPin, Clock, Phone, Mail, Send, MessageCircle } from "lucide-react"

export function ContactSection() {
  const ref = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleWhatsAppClick = (message: string) => {
    const phone = "919689239023"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank")
  }

  return (
    <section ref={ref} id="contact" className="min-h-screen flex items-center py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 animate-fade-in-up">
          <div className="inline-block relative group mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-red-900">Our Location</h2>
            <div className="w-0 h-1 bg-amber-500 group-hover:w-32 transition-all duration-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Google Maps Embed */}
            <a
              href="https://maps.apple/p/Hy9-QKoRy6ITVj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-50 rounded-2xl overflow-hidden h-64 md:h-96 border-2 border-amber-300 hover:shadow-lg transition-all duration-300 group cursor-pointer block"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.8826446969626!2d75.35217!3d19.02472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd922a5c5c5c5c5%3A0x0!2sGaneshkhind%2C%20Punewadi%2C%20Parner%2C%20Ahmednagar!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-red-900 mb-6">Visit Our Facility</h3>

                <div className="space-y-4 md:space-y-5">
                  <a
                    href="https://maps.apple/p/Hy9-QKoRy6ITVj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-50 p-4 md:p-6 rounded-xl hover:bg-amber-50 hover:shadow-md hover:translate-x-2 transition-all duration-300 border border-amber-200 group cursor-pointer block"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={24}
                        className="text-red-900 mt-1 shrink-0 group-hover:text-amber-600 transition-colors"
                      />
                      <div>
                        <h4 className="font-bold text-sm uppercase text-slate-500 mb-1">Location Address</h4>
                        <p className="text-slate-700 text-sm md:text-base group-hover:text-red-900 transition-colors">
                          Ganeshkhind, Punewadi, Tal. Parner, Dist. Ahmednagar
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="grid grid-cols-2 gap-4 md:gap-5">
                    <div className="bg-red-50 p-4 md:p-6 rounded-xl hover:bg-amber-50 hover:shadow-md hover:translate-y-1 transition-all duration-300 border border-amber-200 group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Clock
                          size={20}
                          className="text-red-900 mt-1 shrink-0 group-hover:text-amber-600 transition-colors"
                        />
                        <div>
                          <h4 className="font-bold text-xs uppercase text-slate-500 mb-1">Opening Hours</h4>
                          <p className="text-slate-700 text-xs md:text-sm">09:00 AM</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 md:p-6 rounded-xl hover:bg-amber-50 hover:shadow-md hover:translate-y-1 transition-all duration-300 border border-amber-200 group cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Clock
                          size={20}
                          className="text-red-900 mt-1 shrink-0 group-hover:text-amber-600 transition-colors"
                        />
                        <div>
                          <h4 className="font-bold text-xs uppercase text-slate-500 mb-1">Closing Hours</h4>
                          <p className="text-slate-700 text-xs md:text-sm">06:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-red-900 mb-6 text-center">
            Quick Contact Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <button
              onClick={() =>
                handleWhatsAppClick(
                  "Hi! I'm interested in Shree Self Adhesive Tape products. Can you provide more information?",
                )
              }
              className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-110 hover:-translate-y-1 shadow-lg group cursor-pointer"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              WhatsApp Chat
            </button>

            <a
              href="tel:9689239023"
              className="bg-red-900 hover:bg-red-800 text-white p-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-110 hover:-translate-y-1 shadow-lg group cursor-pointer"
            >
              <Phone size={24} className="group-hover:rotate-12 transition-transform" />
              Call Us
            </a>

            <a
              href="mailto:shreeindustries0718@gmail.com"
              className="bg-amber-600 hover:bg-amber-700 text-white p-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-110 hover:-translate-y-1 shadow-lg group cursor-pointer"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform" />
              Email
            </a>
          </div>
        </div>

        {/* Contact Team */}
        <div className="max-w-3xl mx-auto mb-16 bg-red-50 p-6 md:p-8 rounded-2xl animate-fade-in-up border border-amber-200 hover:shadow-lg transition-shadow duration-300">
          <h4 className="text-2xl md:text-3xl font-display font-bold text-red-900 mb-6">Contact our Team</h4>
          <div className="space-y-3">
            {[
              { name: "Pro. Taibai Raju Bhor", phone: "9689239023" },
              { name: "Contact 2", phone: "8208628584" },
              { name: "Contact 3", phone: "8149881533" },
            ].map((contact, idx) => (
              <button
                key={idx}
                onClick={() => handleWhatsAppClick("Hi! I'm interested in your adhesive tape products.")}
                className="w-full flex items-center justify-between p-4 bg-white border-l-4 border-amber-500 rounded-lg hover:shadow-md hover:translate-x-2 transition-all duration-300 group cursor-pointer hover:bg-amber-50"
              >
                <div className="text-left">
                  <p className="font-bold text-slate-700 group-hover:text-red-900 transition-colors">{contact.name}</p>
                  <p className="text-sm text-slate-500">{contact.phone}</p>
                </div>
                <MessageCircle
                  size={20}
                  className="text-amber-500 group-hover:scale-125 group-hover:rotate-12 transition-all"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-red-50 p-6 md:p-8 rounded-2xl animate-fade-in-up border border-amber-200 hover:shadow-lg transition-shadow duration-300">
          <h4 className="text-2xl md:text-3xl font-display font-bold text-red-900 mb-6">Send an Inquiry</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 transition-all text-sm md:text-base hover:border-amber-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 transition-all text-sm md:text-base hover:border-amber-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 resize-none text-sm md:text-base hover:border-amber-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 hover:scale-105 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg group"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
