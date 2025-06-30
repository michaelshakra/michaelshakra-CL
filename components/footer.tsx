"use client"

import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Michael Shakra</h3>
            <p className="text-gray-300 mb-4">{t("hero.subtitle")}</p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white bg-transparent"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white bg-transparent"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-teal-400 transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-teal-400 transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/markets" className="text-gray-300 hover:text-teal-400 transition-colors">
                  {t("nav.markets")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sprache / Language</h4>
            <div className="space-y-2">
              <button
                onClick={() => setLanguage("de")}
                className={`block text-left transition-colors ${
                  language === "de" ? "text-teal-400" : "text-gray-300 hover:text-teal-400"
                }`}
              >
                Deutsch
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`block text-left transition-colors ${
                  language === "en" ? "text-teal-400" : "text-gray-300 hover:text-teal-400"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Michael Shakra. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              {t("cookies.policy")}
            </Link>
            <Link href="/imprint" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              {t("footer.imprint")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
