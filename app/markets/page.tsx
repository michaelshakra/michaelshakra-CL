"use client"

import Image from "next/image"
import { MapPin, TrendingUp, Users, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export default function MarketsPage() {
  const { t } = useLanguage()

  const markets = [
    {
      country: "Oman",
      capital: "Muscat",
      image: "/placeholder.svg?height=300&width=400",
      highlights: [
        "Strategische Lage zwischen Asien und Europa",
        "Stabile politische Verhältnisse",
        "Wachsender Tourismus- und Logistiksektor",
      ],
      sectors: ["Logistik", "Tourismus", "Energie", "Technologie"],
      population: "5.1 Mio.",
      gdp: "$76.3 Mrd.",
    },
    {
      country: "VAE",
      capital: "Abu Dhabi",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Führendes Handels- und Finanzzentrum", "Weltklasse-Infrastruktur", "Diversifizierte Wirtschaft"],
      sectors: ["Handel", "Finanzen", "Immobilien", "Technologie"],
      population: "9.9 Mio.",
      gdp: "$421.1 Mrd.",
    },
    {
      country: "Irak",
      capital: "Bagdad",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Enormes Wiederaufbaupotenzial", "Reiche Öl- und Gasvorkommen", "Große Infrastrukturprojekte"],
      sectors: ["Energie", "Infrastruktur", "Landwirtschaft", "Bauwesen"],
      population: "40.2 Mio.",
      gdp: "$264.2 Mrd.",
    },
    {
      country: "Libanon",
      capital: "Beirut",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Tor zum Nahen Osten", "Hochqualifizierte Arbeitskräfte", "Starker Dienstleistungssektor"],
      sectors: ["Banken", "Technologie", "Tourismus", "Landwirtschaft"],
      population: "6.8 Mio.",
      gdp: "$18.1 Mrd.",
    },
    {
      country: "Syrien",
      capital: "Damaskus",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Historisches Handelszentrum", "Wiederaufbau-Opportunitäten", "Strategische geografische Lage"],
      sectors: ["Wiederaufbau", "Landwirtschaft", "Textilien", "Handel"],
      population: "18.3 Mio.",
      gdp: "$40.4 Mrd.",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("markets.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("markets.subtitle")}</p>
        </div>

        {/* Markets Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {markets.map((market, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={market.image || "/placeholder.svg"}
                  alt={`${market.country} skyline`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-teal-600 text-white">{market.country}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  <span>{market.capital}</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{market.population}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{market.gdp}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Chancen & Besonderheiten:</h4>
                  <ul className="space-y-1">
                    {market.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                        <span className="w-1 h-1 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Schlüsselsektoren:</h4>
                  <div className="flex flex-wrap gap-2">
                    {market.sectors.map((sector, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Insights */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Regionale Markteinblicke</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Infrastruktur-Boom</h3>
              <p className="text-gray-600">
                Massive Investitionen in Infrastruktur schaffen neue Geschäftsmöglichkeiten in allen Märkten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wirtschaftsdiversifizierung</h3>
              <p className="text-gray-600">
                Alle Länder setzen auf Diversifizierung weg von der Öl-Abhängigkeit hin zu neuen Sektoren.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Junge Bevölkerung</h3>
              <p className="text-gray-600">
                Eine junge, zunehmend gebildete Bevölkerung treibt Innovation und Konsum voran.
              </p>
            </div>
          </div>
        </div>

        {/* Success Factors */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Erfolgsfaktoren für diese Märkte</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Lokale Partnerschaften</h3>
              <p className="text-sm text-gray-600">Vertrauensvolle Beziehungen zu lokalen Partnern sind essentiell</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Kulturelles Verständnis</h3>
              <p className="text-sm text-gray-600">Respekt für lokale Traditionen und Geschäftspraktiken</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Langfristige Perspektive</h3>
              <p className="text-sm text-gray-600">Geduld und Ausdauer bei der Markterschließung</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Qualität & Service</h3>
              <p className="text-sm text-gray-600">Hohe Standards bei Produkten und Dienstleistungen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
