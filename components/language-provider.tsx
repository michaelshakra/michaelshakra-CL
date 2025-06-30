"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "de" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.services": "Leistungen",
    "nav.markets": "Zielmärkte",
    "nav.references": "Referenzen",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.title": "Brücken bauen zwischen Europa und dem Orient",
    "hero.subtitle": "Strategische Handelsberatung für Unternehmen, die im arabischen Raum wachsen wollen",
    "hero.cta": "Beratung anfragen",

    // About
    "about.title": "Über mich",
    "about.subtitle": "Brückenbauer zwischen den Welten",
    "about.intro":
      "Mit über 15 Jahren Erfahrung im internationalen Handel verbinde ich europäische Unternehmen mit den dynamischen Märkten des Vorderen Orients.",
    "about.story":
      "Meine Geschichte begann mit der Faszination für die reiche Kultur und die enormen Geschäftschancen in der arabischen Welt. Heute verfüge ich über ein weitreichendes Netzwerk von Geschäftspartnern und verstehe die kulturellen Nuancen, die für erfolgreiche Geschäftsbeziehungen entscheidend sind.",
    "about.values.title": "Meine Werte",
    "about.values.trust": "Vertrauen durch Transparenz",
    "about.values.network": "Starke Netzwerke aufbauen",
    "about.values.culture": "Kulturelle Brücken schlagen",

    // Services
    "services.title": "Leistungen",
    "services.subtitle": "Maßgeschneiderte Lösungen für Ihren Erfolg",
    "services.analysis.title": "Marktanalyse",
    "services.analysis.desc": "Detaillierte Analyse der Zielmärkte mit Chancen und Risiken",
    "services.network.title": "Netzwerk-Aufbau",
    "services.network.desc": "Vermittlung zu relevanten Geschäftspartnern und Entscheidungsträgern",
    "services.cultural.title": "Interkulturelle Beratung",
    "services.cultural.desc": "Unterstützung bei kulturellen Besonderheiten und Geschäftspraktiken",
    "services.project.title": "Projektunterstützung",
    "services.project.desc": "Begleitung von der Planung bis zur erfolgreichen Umsetzung",

    // Markets
    "markets.title": "Zielmärkte",
    "markets.subtitle": "Fünf Schlüsselmärkte mit enormem Potenzial",

    // References
    "references.title": "Referenzen",
    "references.subtitle": "Erfolgsgeschichten unserer Kunden",

    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle": "Lassen Sie uns über Ihre Pläne sprechen",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.company": "Unternehmen",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht senden",

    // Footer
    "footer.privacy": "Datenschutz",
    "footer.imprint": "Impressum",

    // Cookie Consent
    "cookies.title": "Cookie-Einstellungen",
    "cookies.description":
      "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige sind notwendig für die Funktionalität, andere helfen uns, die Website zu verbessern.",
    "cookies.accept.all": "Alle akzeptieren",
    "cookies.accept.necessary": "Nur notwendige",
    "cookies.manage": "Einstellungen verwalten",
    "cookies.necessary": "Notwendige Cookies",
    "cookies.necessary.desc": "Diese Cookies sind für die Grundfunktionen der Website erforderlich.",
    "cookies.analytics": "Analytische Cookies",
    "cookies.analytics.desc": "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.",
    "cookies.marketing": "Marketing Cookies",
    "cookies.marketing.desc": "Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen.",
    "cookies.save": "Einstellungen speichern",
    "cookies.policy": "Cookie-Richtlinie",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.markets": "Markets",
    "nav.references": "References",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Building Bridges Between Europe and the Orient",
    "hero.subtitle": "Strategic trade consulting for companies looking to grow in the Arab world",
    "hero.cta": "Request Consultation",

    // About
    "about.title": "About Me",
    "about.subtitle": "Bridge Builder Between Worlds",
    "about.intro":
      "With over 15 years of experience in international trade, I connect European companies with the dynamic markets of the Middle East.",
    "about.story":
      "My journey began with a fascination for the rich culture and enormous business opportunities in the Arab world. Today, I have an extensive network of business partners and understand the cultural nuances that are crucial for successful business relationships.",
    "about.values.title": "My Values",
    "about.values.trust": "Trust through transparency",
    "about.values.network": "Building strong networks",
    "about.values.culture": "Creating cultural bridges",

    // Services
    "services.title": "Services",
    "services.subtitle": "Tailored solutions for your success",
    "services.analysis.title": "Market Analysis",
    "services.analysis.desc": "Detailed analysis of target markets with opportunities and risks",
    "services.network.title": "Network Building",
    "services.network.desc": "Connecting with relevant business partners and decision makers",
    "services.cultural.title": "Intercultural Consulting",
    "services.cultural.desc": "Support with cultural specifics and business practices",
    "services.project.title": "Project Support",
    "services.project.desc": "Guidance from planning to successful implementation",

    // Markets
    "markets.title": "Target Markets",
    "markets.subtitle": "Five key markets with enormous potential",

    // References
    "references.title": "References",
    "references.subtitle": "Success stories of our clients",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's talk about your plans",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.imprint": "Imprint",

    // Cookie Consent
    "cookies.title": "Cookie Settings",
    "cookies.description":
      "We use cookies to provide you with the best possible experience on our website. Some are necessary for functionality, others help us improve the website.",
    "cookies.accept.all": "Accept All",
    "cookies.accept.necessary": "Necessary Only",
    "cookies.manage": "Manage Settings",
    "cookies.necessary": "Necessary Cookies",
    "cookies.necessary.desc": "These cookies are required for the basic functions of the website.",
    "cookies.analytics": "Analytics Cookies",
    "cookies.analytics.desc": "These cookies help us understand how visitors interact with the website.",
    "cookies.marketing": "Marketing Cookies",
    "cookies.marketing.desc": "These cookies are used to show you relevant advertising.",
    "cookies.save": "Save Settings",
    "cookies.policy": "Cookie Policy",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["de"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
