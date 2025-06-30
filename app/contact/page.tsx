"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, Linkedin, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t("contact.title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Nachricht senden</CardTitle>
              </CardHeader>

              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.name")} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.email")} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.company")}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.message")} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Beschreiben Sie Ihr Projekt oder Ihre Fragen..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
                      <Send className="mr-2 h-5 w-5" />
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nachricht gesendet!</h3>
                    <p className="text-gray-600">
                      Vielen Dank für Ihre Nachricht. Ich melde mich innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Business handshake representing connection"
                fill
                className="object-cover"
              />
            </div>

            {/* Contact Details */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-Mail</div>
                    <div className="text-gray-600">michael.shakra@consulting.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">LinkedIn</div>
                    <div className="text-gray-600">linkedin.com/in/michael-shakra</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-gray-600">+49 xxx xxx xxxx</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Standort</div>
                    <div className="text-gray-600">Deutschland / Naher Osten</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Schneller Kontakt</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 justify-center">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>

                <Button className="bg-green-600 hover:bg-green-700 justify-center">
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Business Hours */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Geschäftszeiten</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Montag - Freitag</span>
                  <span className="text-gray-900">9:00 - 18:00 CET</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Samstag</span>
                  <span className="text-gray-900">10:00 - 14:00 CET</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sonntag</span>
                  <span className="text-gray-900">Geschlossen</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-teal-50 rounded-lg">
                <p className="text-sm text-teal-700">
                  <strong>Notfall-Support:</strong> Bei dringenden Angelegenheiten während laufender Projekte bin ich
                  auch außerhalb der Geschäftszeiten erreichbar.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
