import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { CookieProvider } from "@/components/cookie-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Michael Shakra - Handelsberatung Vorderer Orient | Trade Consulting Middle East",
  description:
    "Strategische Handelsberatung für Unternehmen, die im arabischen Raum wachsen wollen. Brücken bauen zwischen Europa und dem Orient.",
  openGraph: {
    title: "Michael Shakra - Handelsberatung Vorderer Orient",
    description: "Strategische Handelsberatung für Unternehmen, die im arabischen Raum wachsen wollen.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <LanguageProvider>
          <CookieProvider>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CookieBanner />
          </CookieProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
