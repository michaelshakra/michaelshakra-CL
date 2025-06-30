"use client"

import { Shield, Eye, Database, Mail, Clock, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function PrivacyPage() {
  const { language } = useLanguage()

  const sections = [
    {
      title: language === "de" ? "Verantwortlicher" : "Data Controller",
      icon: Shield,
      content:
        language === "de"
          ? "Michael Shakra\nHandelsberatung Vorderer Orient\nE-Mail: michael.shakra@consulting.com\n\nAls Verantwortlicher im Sinne der DSGVO sind wir für die Verarbeitung Ihrer personenbezogenen Daten verantwortlich."
          : "Michael Shakra\nTrade Consulting Middle East\nEmail: michael.shakra@consulting.com\n\nAs the data controller under GDPR, we are responsible for processing your personal data.",
    },
    {
      title: language === "de" ? "Erhobene Daten" : "Data Collection",
      icon: Database,
      content:
        language === "de"
          ? "Wir erheben folgende Daten:\n• Kontaktdaten (Name, E-Mail, Telefon)\n• Unternehmensinformationen\n• Website-Nutzungsdaten\n• Cookie-Daten (mit Ihrer Einwilligung)\n• IP-Adresse und Browser-Informationen"
          : "We collect the following data:\n• Contact information (name, email, phone)\n• Company information\n• Website usage data\n• Cookie data (with your consent)\n• IP address and browser information",
    },
    {
      title: language === "de" ? "Zweck der Verarbeitung" : "Purpose of Processing",
      icon: Eye,
      content:
        language === "de"
          ? "Ihre Daten werden verarbeitet für:\n• Bearbeitung von Anfragen\n• Bereitstellung unserer Dienstleistungen\n• Kommunikation und Kundenbetreuung\n• Website-Optimierung\n• Rechtliche Verpflichtungen"
          : "Your data is processed for:\n• Processing inquiries\n• Providing our services\n• Communication and customer support\n• Website optimization\n• Legal obligations",
    },
    {
      title: language === "de" ? "Ihre Rechte" : "Your Rights",
      icon: FileText,
      content:
        language === "de"
          ? "Sie haben das Recht auf:\n• Auskunft über Ihre Daten\n• Berichtigung unrichtiger Daten\n• Löschung Ihrer Daten\n• Einschränkung der Verarbeitung\n• Datenübertragbarkeit\n• Widerspruch gegen die Verarbeitung"
          : "You have the right to:\n• Information about your data\n• Correction of incorrect data\n• Deletion of your data\n• Restriction of processing\n• Data portability\n• Object to processing",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "de"
              ? "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln der Datenschutzgesetze."
              : "We take the protection of your personal data very seriously and strictly adhere to data protection laws."}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-line text-gray-700">{section.content}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact for Privacy */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-6 w-6 text-teal-600" />
              <span>{language === "de" ? "Datenschutz-Kontakt" : "Privacy Contact"}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              {language === "de"
                ? "Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns:"
                : "For questions about privacy or to exercise your rights, contact us:"}
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong> michael.shakra@consulting.com
              </p>
              <p>
                <strong>{language === "de" ? "Betreff:" : "Subject:"}</strong>{" "}
                {language === "de" ? "Datenschutz-Anfrage" : "Privacy Request"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <div className="text-center mt-8 text-sm text-gray-500 flex items-center justify-center space-x-2">
          <Clock className="h-4 w-4" />
          <span>
            {language === "de" ? "Letzte Aktualisierung:" : "Last updated:"} {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  )
}
