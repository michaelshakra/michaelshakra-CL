"use client"

import { useState } from "react"
import { Settings, Shield, BarChart3, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCookies } from "@/components/cookie-provider"
import { useLanguage } from "@/components/language-provider"

export function CookieBanner() {
  const { showBanner, acceptAll, acceptNecessary, updateConsent } = useCookies()
  const { t } = useLanguage()
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  if (!showBanner) return null

  const handleSaveSettings = () => {
    updateConsent(settings)
    setShowSettings(false)
  }

  const toggleSetting = (key: keyof typeof settings) => {
    if (key === "necessary") return // Necessary cookies cannot be disabled
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t("cookies.title")}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t("cookies.description")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <Button variant="outline" size="sm" onClick={() => setShowSettings(true)} className="w-full sm:w-auto">
                <Settings className="mr-2 h-4 w-4" />
                {t("cookies.manage")}
              </Button>
              <Button variant="outline" size="sm" onClick={acceptNecessary} className="w-full sm:w-auto bg-transparent">
                {t("cookies.accept.necessary")}
              </Button>
              <Button size="sm" onClick={acceptAll} className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
                {t("cookies.accept.all")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-teal-600" />
              <span>{t("cookies.title")}</span>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <p className="text-gray-600">{t("cookies.description")}</p>

            {/* Necessary Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span>{t("cookies.necessary")}</span>
                  </div>
                  <Switch checked={settings.necessary} disabled />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{t("cookies.necessary.desc")}</p>
                <div className="mt-2 text-xs text-gray-500">
                  <strong>Cookies:</strong> session_id, language_preference, cookie_consent
                </div>
              </CardContent>
            </Card>

            {/* Analytics Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span>{t("cookies.analytics")}</span>
                  </div>
                  <Switch checked={settings.analytics} onCheckedChange={() => toggleSetting("analytics")} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{t("cookies.analytics.desc")}</p>
                <div className="mt-2 text-xs text-gray-500">
                  <strong>Services:</strong> Google Analytics, Hotjar
                  <br />
                  <strong>Cookies:</strong> _ga, _ga_*, _gid, hjid, hjFirstSeen
                </div>
              </CardContent>
            </Card>

            {/* Marketing Cookies */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    <span>{t("cookies.marketing")}</span>
                  </div>
                  <Switch checked={settings.marketing} onCheckedChange={() => toggleSetting("marketing")} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{t("cookies.marketing.desc")}</p>
                <div className="mt-2 text-xs text-gray-500">
                  <strong>Services:</strong> LinkedIn Ads, Google Ads
                  <br />
                  <strong>Cookies:</strong> _fbp, _gcl_au, li_sugr, UserMatchHistory
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowSettings(false)} className="w-full sm:w-auto">
                Abbrechen
              </Button>
              <Button onClick={handleSaveSettings} className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
                {t("cookies.save")}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
