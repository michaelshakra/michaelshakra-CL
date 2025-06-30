"use client"

import { BarChart3, Users, Globe, Briefcase, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: BarChart3,
      title: t("services.analysis.title"),
      description: t("services.analysis.desc"),
      features: [
        "Marktpotenzial-Analyse",
        "Wettbewerbsanalyse",
        "Regulatorische Rahmenbedingungen",
        "Risikobewertung",
        "Eintrittsstrategien",
      ],
      outcomes: ["Fundierte Marktentscheidungen", "Minimierte Risiken", "Optimale Timing-Strategien"],
    },
    {
      icon: Users,
      title: t("services.network.title"),
      description: t("services.network.desc"),
      features: [
        "Identifikation von Schlüsselpartnern",
        "Vermittlung zu Entscheidungsträgern",
        "Aufbau von Geschäftsbeziehungen",
        "Networking-Events",
        "Langfristige Partnerschaftsbetreuung",
      ],
      outcomes: ["Direkter Marktzugang", "Vertrauensvolle Partnerschaften", "Beschleunigte Markterschließung"],
    },
    {
      icon: Globe,
      title: t("services.cultural.title"),
      description: t("services.cultural.desc"),
      features: [
        "Kulturelle Sensibilisierung",
        "Geschäftsetikette-Training",
        "Verhandlungsstrategien",
        "Kommunikationsberatung",
        "Konfliktlösung",
      ],
      outcomes: [
        "Erfolgreiche Verhandlungen",
        "Vermeidung kultureller Missverständnisse",
        "Stärkere Geschäftsbeziehungen",
      ],
    },
    {
      icon: Briefcase,
      title: t("services.project.title"),
      description: t("services.project.desc"),
      features: [
        "Projektplanung und -management",
        "Vor-Ort-Unterstützung",
        "Behördenkontakte",
        "Logistik-Koordination",
        "Qualitätskontrolle",
      ],
      outcomes: ["Termingerechte Umsetzung", "Kostenoptimierung", "Nachhaltige Implementierung"],
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("services.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.subtitle")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Leistungsumfang:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Ihre Vorteile:</h4>
                  <ul className="space-y-2">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Unser Beratungsprozess</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyse</h3>
              <p className="text-gray-600">Detaillierte Bewertung Ihrer Ziele und Herausforderungen</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategie</h3>
              <p className="text-gray-600">Entwicklung einer maßgeschneiderten Markteintrittsstrategie</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Umsetzung</h3>
              <p className="text-gray-600">Begleitung bei der praktischen Implementierung vor Ort</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Erfolg</h3>
              <p className="text-gray-600">Kontinuierliche Optimierung und langfristige Betreuung</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-teal-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit für Ihre Expansion?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre individuellen Anforderungen besprechen und die optimale Strategie entwickeln.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link href="/contact">
              Kostenloses Beratungsgespräch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
