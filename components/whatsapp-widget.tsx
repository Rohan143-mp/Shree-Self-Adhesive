import { MessageCircle } from "lucide-react"

interface WhatsappWidgetProps {
  message?: string
  phone?: string
  className?: string
}

export function WhatsappWidget({
  message = "Hi, I'm interested in your adhesive tape products",
  phone = "919689239023",
  className = "fixed bottom-6 right-6",
}: WhatsappWidgetProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center group z-40`}
      title="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute bottom-full mb-2 bg-gray-900 text-white px-3 py-2 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us!
      </span>
    </a>
  )
}
