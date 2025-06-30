"use client"

import { Shield, Clock, Database, Eye, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCookies } from "@/components/cookie-provider"
import { useLanguage } from "@/components/language-provider"

export default function CookiePolicyPage() {
  const { resetConsent } = useCookies()
  const { language } = useLanguage()

  const cookieTypes = [
    {
      name: language === "de" ? "Notwendige Cookies" : "Necessary Cookies",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-100",
      description:
        language === "de"
          ? "Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden."
          : "These cookies are required for the basic functions of the website and cannot be disabled.",
      cookies: [
        {
          name: "session_id",
          purpose: language === "de" ? "Sitzungsverwaltung" : "Session management",
          duration: language === "de" ? "Sitzung" : "Session",
        },
        {
          name: "language_preference",
          purpose: language === "de" ? "Spracheinstellung speichern" : "Store language preference",
          duration: language === "de" ? "1 Jahr" : "1 year",
        },
        {
          name: "cookie_consent",
          purpose: language === "de" ? "Cookie-Einwilligung speichern" : "Store cookie consent",
          duration: language === "de" ? "1 Jahr" : "1 year",
        },
      ],
    },
    {
      name: language === "de" ? "Analytische Cookies" : "Analytics Cookies",
      icon: Eye,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description:
        language === "de"
          ? "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren."
          : "These cookies help us understand how visitors interact with the website.",
      cookies: [
        {
          name: "_ga",
          purpose:
            language === "de" ? "Google Analytics - Nutzer unterscheiden" : "Google Analytics - Distinguish users",
          duration: language === "de" ? "2 Jahre" : "2 years",
        },
        {
          name: "_ga_*",
          purpose: language === "de" ? "Google Analytics - Sitzungsstatus" : "Google Analytics - Session state",
          duration: language === "de" ? "2 Jahre" : "2 years",
        },
        {
          name: "_gid",
          purpose:
            language === "de" ? "Google Analytics - Nutzer unterscheiden" : "Google Analytics - Distinguish users",
          duration: language === "de" ? "24 Stunden" : "24 hours",
        },
      ],
    },
    {
      name: language === "de" ? "Marketing Cookies" : "Marketing Cookies",
      icon: Database,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description:
        language === "de"
          ? "Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen."
          : "These cookies are used to show you relevant advertising.",
      cookies: [
        {
          name: "_fbp",
          purpose: language === "de" ? "Facebook Pixel - Nutzer-Tracking" : "Facebook Pixel - User tracking",
          duration: language === "de" ? "3 Monate" : "3 months",
        },
        {
          name: "li_sugr",
          purpose: language === "de" ? "LinkedIn - Browser-Identifikation" : "LinkedIn - Browser identification",
          duration: language === "de" ? "3 Monate" : "3 months",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {language === "de" ? "Cookie-Richtlinie" : "Cookie Policy"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "de"
              ? "Erfahren Sie, wie wir Cookies verwenden und wie Sie Ihre Einstellungen verwalten können."
              : "Learn how we use cookies and how you can manage your settings."}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-teal-600" />
              <span>{language === "de" ? "Was sind Cookies?" : "What are Cookies?"}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              {language === "de"
                ? "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen der Website, sich an Ihre Aktionen und Einstellungen zu erinnern, sodass Sie diese nicht bei jedem Besuch erneut eingeben müssen."
                : "Cookies are small text files that are stored on your device when you visit a website. They help the website remember your actions and preferences so you don't have to re-enter them every time you visit."}
            </p>
            <p className="text-gray-700">
              {language === "de"
                ? "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten und um zu verstehen, wie Sie mit unserer Website interagieren."
                : "We use cookies to provide you with the best possible experience on our website and to understand how you interact with our website."}
            </p>
          </CardContent>
        </Card>

        {/* Cookie Types */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {language === "de" ? "Arten von Cookies" : "Types of Cookies"}
          </h2>

          {cookieTypes.map((type, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${type.bgColor} rounded-full flex items-center justify-center`}>
                    <type.icon className={`h-5 w-5 ${type.color}`} />
                  </div>
                  <span>{type.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{type.description}</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-semibold text-gray-900">Cookie Name</th>
                        <th className="text-left py-2 font-semibold text-gray-900">
                          {language === "de" ? "Zweck" : "Purpose"}
                        </th>
                        <th className="text-left py-2 font-semibold text-gray-900">
                          {language === "de" ? "Dauer" : "Duration"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.cookies.map((cookie, cookieIndex) => (
                        <tr key={cookieIndex} className="border-b">
                          <td className="py-2 font-mono text-xs bg-gray-50 px-2 rounded">{cookie.name}</td>
                          <td className="py-2 text-gray-700">{cookie.purpose}</td>
                          <td className="py-2 text-gray-700">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-6 w-6 text-teal-600" />
              <span>{language === "de" ? "Ihre Rechte" : "Your Rights"}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              {language === "de"
                ? "Sie haben das Recht, Ihre Cookie-Einstellungen jederzeit zu ändern. Sie können:"
                : "You have the right to change your cookie settings at any time. You can:"}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                {language === "de"
                  ? "Ihre Einwilligung für bestimmte Cookie-Kategorien widerrufen"
                  : "Withdraw your consent for specific cookie categories"}
              </li>
              <li>{language === "de" ? "Cookies in Ihrem Browser löschen" : "Delete cookies in your browser"}</li>
              <li>
                {language === "de"
                  ? "Ihren Browser so einstellen, dass Cookies blockiert werden"
                  : "Set your browser to block cookies"}
              </li>
              <li>
                {language === "de"
                  ? "Eine Kopie der über Sie gespeicherten Daten anfordern"
                  : "Request a copy of the data stored about you"}
              </li>
            </ul>

            <div className="pt-4">
              <Button onClick={resetConsent} className="bg-teal-600 hover:bg-teal-700">
                <Settings className="mr-2 h-4 w-4" />
                {language === "de" ? "Cookie-Einstellungen ändern" : "Change Cookie Settings"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-teal-600" />
              <span>{language === "de" ? "Kontakt" : "Contact"}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              {language === "de"
                ? "Bei Fragen zu unserer Cookie-Richtlinie oder Ihren Datenschutzrechten können Sie uns kontaktieren:"
                : "If you have questions about our cookie policy or your privacy rights, you can contact us:"}
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong> michael.shakra@consulting.com
              </p>
              <p>
                <strong>{language === "de" ? "Verantwortlicher:" : "Data Controller:"}</strong> Michael Shakra
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center mt-8 text-sm text-gray-500">
          {language === "de" ? "Letzte Aktualisierung:" : "Last updated:"} {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  )
}
