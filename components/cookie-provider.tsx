"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface CookieConsent {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieContextType {
  consent: CookieConsent | null
  showBanner: boolean
  updateConsent: (consent: CookieConsent) => void
  acceptAll: () => void
  acceptNecessary: () => void
  resetConsent: () => void
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

const COOKIE_CONSENT_KEY = "cookie-consent"
const COOKIE_CONSENT_VERSION = "1.0"

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if consent has been given
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent)
        if (parsed.version === COOKIE_CONSENT_VERSION) {
          setConsent(parsed.consent)
          setShowBanner(false)
        } else {
          // Version mismatch, show banner again
          setShowBanner(true)
        }
      } catch {
        setShowBanner(true)
      }
    } else {
      setShowBanner(true)
    }
  }, [])

  const updateConsent = (newConsent: CookieConsent) => {
    setConsent(newConsent)
    setShowBanner(false)

    // Save to localStorage
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        consent: newConsent,
        version: COOKIE_CONSENT_VERSION,
        timestamp: new Date().toISOString(),
      }),
    )

    // Initialize analytics if accepted
    if (newConsent.analytics) {
      initializeAnalytics()
    }

    // Initialize marketing if accepted
    if (newConsent.marketing) {
      initializeMarketing()
    }
  }

  const acceptAll = () => {
    updateConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    })
  }

  const acceptNecessary = () => {
    updateConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    })
  }

  const resetConsent = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY)
    setConsent(null)
    setShowBanner(true)
  }

  return (
    <CookieContext.Provider
      value={{
        consent,
        showBanner,
        updateConsent,
        acceptAll,
        acceptNecessary,
        resetConsent,
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}

export function useCookies() {
  const context = useContext(CookieContext)
  if (context === undefined) {
    throw new Error("useCookies must be used within a CookieProvider")
  }
  return context
}

// Helper functions for initializing third-party services
function initializeAnalytics() {
  // Example: Google Analytics initialization
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
    })
  }
}

function initializeMarketing() {
  // Example: Marketing tools initialization
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    })
  }
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
