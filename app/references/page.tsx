"use client"

import { Quote, Star, Building, TrendingUp, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export default function ReferencesPage() {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote:
        "Michael Shakra hat uns den Eintritt in den omanischen Markt erheblich erleichtert. Seine lokalen Kontakte und sein kulturelles Verständnis waren entscheidend für unseren Erfolg.",
      author: "Geschäftsführer",
      company: "Deutsches Technologieunternehmen",
      sector: "Technologie",
      market: "Oman",
    },
    {
      quote:
        "Dank Michaels Expertise konnten wir in den VAE innerhalb von 6 Monaten eine profitable Niederlassung aufbauen. Seine Marktanalyse war präzise und seine Empfehlungen goldwert.",
      author: "Vertriebsleiter",
      company: "Österreichisches Handelsunternehmen",
      sector: "Handel",
      market: "VAE",
    },
    {
      quote:
        "Die interkulturelle Beratung von Michael hat uns vor kostspieligen Fehlern bewahrt. Seine Unterstützung bei Verhandlungen war professionell und zielführend.",
      author: "Projektmanager",
      company: "Schweizer Beratungsunternehmen",
      sector: "Beratung",
      market: "Libanon",
    },
  ]

  const caseStudies = [
    {
      title: "Markteintritt Technologiesektor Oman",
      challenge:
        "Ein deutsches Softwareunternehmen wollte seine IoT-Lösungen im omanischen Markt etablieren, hatte aber keine lokalen Kontakte oder Marktkenntnisse.",
      solution:
        "Umfassende Marktanalyse, Identifikation von Schlüsselpartnern, kulturelle Schulungen für das Vertriebsteam und Begleitung bei ersten Kundengesprächen.",
      result:
        "Erfolgreicher Markteintritt mit 3 strategischen Partnerschaften und einem Umsatz von 2,5 Mio. € im ersten Jahr.",
      duration: "8 Monate",
      sector: "Technologie",
      market: "Oman",
    },
    {
      title: "Handelspartnerschaft VAE",
      challenge:
        "Ein österreichisches Unternehmen suchte zuverlässige Distributoren für seine Industrieprodukte in den Vereinigten Arabischen Emiraten.",
      solution:
        "Systematische Evaluierung potenzieller Partner, Due-Diligence-Prozesse, Vertragsverhandlungen und Aufbau langfristiger Geschäftsbeziehungen.",
      result:
        "Etablierung von 5 Distributionspartnern und Steigerung des Exportumsatzes um 180% innerhalb von 18 Monaten.",
      duration: "12 Monate",
      sector: "Industrie",
      market: "VAE",
    },
    {
      title: "Wiederaufbau-Projekt Irak",
      challenge:
        "Ein europäisches Bauunternehmen wollte an Infrastrukturprojekten im Irak teilnehmen, benötigte aber lokale Expertise und Kontakte zu Entscheidungsträgern.",
      solution:
        "Aufbau eines Netzwerks zu Regierungsvertretern, Joint-Venture-Vermittlung mit lokalen Partnern und Projektmanagement-Unterstützung.",
      result: "Erfolgreiche Teilnahme an 3 großen Infrastrukturprojekten mit einem Gesamtvolumen von 45 Mio. €.",
      duration: "24 Monate",
      sector: "Bauwesen",
      market: "Irak",
    },
  ]

  const stats = [
    { number: "50+", label: "Erfolgreiche Projekte", icon: Award },
    { number: "15+", label: "Jahre Erfahrung", icon: TrendingUp },
    { number: "100+", label: "Zufriedene Kunden", icon: Users },
    { number: "5", label: "Zielmärkte", icon: Building },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("references.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("references.subtitle")}</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Kundenstimmen</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <Quote className="h-8 w-8 text-teal-600" />
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <div className="flex space-x-2">
                      <Badge variant="outline">{testimonial.sector}</Badge>
                      <Badge variant="outline">{testimonial.market}</Badge>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Erfolgsgeschichten</h2>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">{study.title}</h3>
                    <div className="flex space-x-2">
                      <Badge className="bg-teal-600">{study.sector}</Badge>
                      <Badge variant="outline">{study.market}</Badge>
                      <Badge variant="outline">{study.duration}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Herausforderung
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        Lösung
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Ergebnis
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vertrauen durch Erfahrung</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Kundenzufriedenheit</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-teal-600 mb-2">85%</div>
              <div className="text-gray-600">Wiederholungsgeschäft</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-teal-600 mb-2">6 Monate</div>
              <div className="text-gray-600">Durchschnittliche Projektdauer</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Support während Projekten</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
