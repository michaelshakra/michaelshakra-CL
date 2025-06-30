"use client"

import Image from "next/image"
import { CheckCircle, Award, Globe, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("about.title")}</h1>
          <p className="text-xl text-teal-600 font-semibold mb-4">{t("about.subtitle")}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">{t("about.intro")}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t("about.story")}</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">15+ Jahre Erfahrung im internationalen Handel</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">Spezialisierung auf 5 Schlüsselmärkte</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">Über 50 erfolgreiche Projekte</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">Mehrsprachig: Deutsch, Englisch, Arabisch</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Michael Shakra Portrait"
              width={400}
              height={500}
              className="rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t("about.values.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("about.values.trust")}</h3>
                <p className="text-gray-600">
                  Ehrliche Kommunikation und transparente Prozesse bilden das Fundament aller Geschäftsbeziehungen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("about.values.network")}</h3>
                <p className="text-gray-600">
                  Langfristige Partnerschaften und ein starkes Netzwerk sind der Schlüssel zum nachhaltigen Erfolg.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("about.values.culture")}</h3>
                <p className="text-gray-600">
                  Respekt und Verständnis für kulturelle Unterschiede schaffen die Basis für erfolgreiche Kooperationen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Mein Werdegang</h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">2008 - Erste Schritte</h3>
                <p className="text-gray-600">
                  Beginn der Tätigkeit im internationalen Handel mit Fokus auf den Nahen Osten
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">2012 - Netzwerk-Aufbau</h3>
                <p className="text-gray-600">Etablierung von Geschäftsbeziehungen in den VAE und Oman</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">2016 - Expansion</h3>
                <p className="text-gray-600">Ausweitung der Aktivitäten auf Libanon, Irak und Syrien</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">2020 - Spezialisierung</h3>
                <p className="text-gray-600">Fokussierung auf strategische Handelsberatung und Projektunterstützung</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">2024 - Heute</h3>
                <p className="text-gray-600">Führender Berater für europäische Unternehmen im Vorderen Orient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
