"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Gift, Sparkles } from "lucide-react"
import { getDaysUntilBirthday } from "@/lib/daily-messages"
import { cn } from "@/lib/utils"

export function BirthdayCountdownWidget() {
  const [daysUntil, setDaysUntil] = useState(getDaysUntilBirthday())
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const days = getDaysUntilBirthday()
      setDaysUntil(days)

      // Calculate time until midnight of birthday
      const now = new Date()
      const currentYear = now.getFullYear()
      let birthday = new Date(currentYear, 5, 22) // June 22nd

      if (now > birthday) {
        birthday = new Date(currentYear + 1, 5, 22)
      }

      const difference = birthday.getTime() - now.getTime()

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const getStatusMessage = () => {
    if (daysUntil === 0) return "🎂 IT'S BHUMI'S BIRTHDAY! 🎂"
    if (daysUntil === 1) return "🎉 Tomorrow is the big day!"
    if (daysUntil <= 7) return `🌟 Only ${daysUntil} days left!`
    if (daysUntil <= 30) return `📅 ${daysUntil} days to go!`
    return `⏰ ${daysUntil} days until celebration`
  }

  const getCardColor = () => {
    if (daysUntil === 0) return "bg-gradient-to-r from-pink-100 to-purple-100 border-pink-300"
    if (daysUntil <= 3) return "bg-gradient-to-r from-red-50 to-pink-50 border-red-200"
    if (daysUntil <= 7) return "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
    return "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200"
  }

  return (
    <Card className={cn("border-2 shadow-lg", getCardColor())}>
      <CardContent className="p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-pink-500" />
          <span className="text-sm font-medium text-gray-600">Birthday Countdown</span>
        </div>

        <div className="mb-4">
          <div className="text-4xl font-bold text-pink-600 mb-2">{daysUntil === 0 ? "🎂" : daysUntil}</div>
          <div className="text-sm text-gray-600">
            {daysUntil === 0 ? "Birthday Day!" : daysUntil === 1 ? "Day Left" : "Days Left"}
          </div>
        </div>

        {daysUntil > 0 && daysUntil <= 7 && (
          <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
            <div className="bg-white/50 rounded-lg p-2">
              <div className="font-bold text-pink-600">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="text-gray-500">Hours</div>
            </div>
            <div className="bg-white/50 rounded-lg p-2">
              <div className="font-bold text-pink-600">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="text-gray-500">Minutes</div>
            </div>
            <div className="bg-white/50 rounded-lg p-2">
              <div className="font-bold text-pink-600">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="text-gray-500">Seconds</div>
            </div>
          </div>
        )}

        <div className="text-sm font-medium text-gray-700 mb-3">{getStatusMessage()}</div>

        <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
          <Gift className="h-3 w-3" />
          <span>June 22nd</span>
          <Sparkles className="h-3 w-3" />
        </div>
      </CardContent>
    </Card>
  )
}
