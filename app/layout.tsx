import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { RegisterSW } from "./register-sw"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700"],
  display: "swap",
  preload: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "600", "700"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://shreeselfadhesivetape.com"),
  title: "Shree Self Adhesive Tape - Premium Manufacturer & Distributor | Industrial Tape Solutions",
  description:
    "Leading manufacturer and distributor of self-adhesive BOPP tape. Premium quality industrial tape for packaging, automotive, pharmaceutical, and retail industries. State-of-the-art manufacturing in Ahmednagar.",
  keywords:
    "adhesive tape, BOPP tape, packaging tape, industrial tape, self-adhesive tape, tape manufacturer, tape distributor, Ahmednagar",
  authors: [{ name: "Shree Self Adhesive Tape" }],
  creator: "Shree Self Adhesive Tape",
  publisher: "Shree Self Adhesive Tape",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shreeselfadhesivetape.com",
    siteName: "Shree Self Adhesive Tape",
    title: "Shree Self Adhesive Tape - Premium Manufacturer & Distributor",
    description: "Leading manufacturer of self-adhesive BOPP tape for industrial applications",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Self Adhesive Tape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Self Adhesive Tape",
    description: "Premium self-adhesive tape manufacturer",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  generator: 'v0.app',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shree Self Adhesive Tape",
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: "#800020",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://shreeselfadhesivetape.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#800020" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shree Tape" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Shree Tape" />
        <meta name="msapplication-TileColor" content="#800020" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={`${poppins.variable} ${playfairDisplay.variable} font-body antialiased`} suppressHydrationWarning>
        {children}
        <RegisterSW />
        <Analytics />
      </body>
    </html>
  )
}
