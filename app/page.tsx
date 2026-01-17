import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturesSection } from "@/components/features-section"
import { IndustriesSection } from "@/components/industries-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsappWidget } from "@/components/whatsapp-widget"
import { ScrollProgress } from "@/components/scroll-progress"

export const metadata = {
  title: "Shree Self Adhesive Tape - Premium BOPP Tape Manufacturer & Distributor in Ahmednagar",
  description:
    "Leading manufacturer and distributor of self-adhesive BOPP tape in Ahmednagar. Premium quality industrial tape solutions for packaging, automotive, pharmaceutical, food, retail, and agriculture industries. Manufacturing excellence since 2021.",
  keywords:
    "BOPP tape, adhesive tape, packaging tape, industrial tape, self-adhesive tape, tape manufacturer, tape distributor, Ahmednagar, BOPP jumbo rolls, printed tape",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Home() {
  return (
    <main className="bg-background">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FeaturesSection />
      <IndustriesSection />
      <ContactSection />
      <Footer />
      <WhatsappWidget message="Hi! I'm interested in Shree Self Adhesive Tape products. Can you provide more information?" />
    </main>
  )
}
