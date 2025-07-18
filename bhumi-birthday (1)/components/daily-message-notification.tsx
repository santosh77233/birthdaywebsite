"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, X, Gift } from "lucide-react"
import { getTodaysMessage } from "@/lib/daily-messages"

export function DailyMessageNotification() {
  const [showNotification, setShowNotification] = useState(false)
  const [hasNewMessage, setHasNewMessage] = useState(false)

  useEffect(() => {
    const checkForNewMessage = () => {
      const today = new Date().toDateString()
      const lastVisit = localStorage.getItem("last-message-check")
      const todaysMessage = getTodaysMessage()

      if (lastVisit !== today) {
        setHasNewMessage(true)
        setShowNotification(true)
        localStorage.setItem("last-message-check", today)
      }
    }

    // Check after a short delay to avoid showing on first load
    const timer = setTimeout(checkForNewMessage, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setShowNotification(false)
    setHasNewMessage(false)
  }

  if (!showNotification || !hasNewMessage) return null

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm animate-in slide-in-from-right duration-500">
      <Card className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 shadow-xl">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              <span className="font-semibold text-sm">New Daily Message!</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm opacity-90 mb-3">There's a fresh birthday message waiting for you today!</p>
          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4" />
            <span className="text-xs">Check it out on the main page</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
