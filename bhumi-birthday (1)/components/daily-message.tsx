"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, Copy, Check, Calendar, Heart } from "lucide-react"
import { getTodaysMessage, getShareText, getDaysUntilBirthday } from "@/lib/daily-messages"
import { cn } from "@/lib/utils"
import { BhumiProfile } from "./bhumi-profile"

export function DailyMessage() {
  const [message, setMessage] = useState(getTodaysMessage())
  const [daysUntil, setDaysUntil] = useState(getDaysUntilBirthday())
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Update message daily
    const updateMessage = () => {
      setMessage(getTodaysMessage())
      setDaysUntil(getDaysUntilBirthday())
    }

    updateMessage()
    setIsVisible(true)

    // Check for updates every hour
    const interval = setInterval(updateMessage, 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const handleShare = async () => {
    const shareText = getShareText(message)

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Bhumi's Birthday Countdown",
          text: shareText,
          url: window.location.origin,
        })
      } catch (error) {
        console.log("Error sharing:", error)
        handleCopy()
      }
    } else {
      handleCopy()
    }
  }

  const handleCopy = async () => {
    const shareText = getShareText(message)
    try {
      await navigator.clipboard.writeText(`${shareText}\n\nVisit: ${window.location.origin}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.log("Error copying:", error)
    }
  }

  const getCountdownText = () => {
    if (daysUntil === 0) return "🎂 TODAY IS THE DAY!"
    if (daysUntil === 1) return "🎉 TOMORROW!"
    if (daysUntil > 0) return `${daysUntil} days to go`
    if (daysUntil === -1) return "Yesterday was the day!"
    return `${Math.abs(daysUntil)} days since`
  }

  return (
    <div
      className={cn(
        "transition-all duration-1000 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
    >
      <Card
        className={cn(
          "relative overflow-hidden border-0 shadow-lg",
          message.bgColor,
          "hover:shadow-xl transition-all duration-300",
        )}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 text-4xl">{message.emoji}</div>
          <div className="absolute bottom-4 left-4 text-2xl">
            <Heart className="h-6 w-6 fill-current" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl opacity-50">
            {message.emoji}
          </div>
        </div>

        <CardContent className="relative z-10 p-6">
          <div className="flex items-start gap-4 mb-4">
            <BhumiProfile size="sm" showBorder={true} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className={cn("h-4 w-4", message.color)} />
                <span className={cn("text-sm font-medium", message.color)}>{getCountdownText()}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Daily Birthday Message</h3>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed text-base">{message.message}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{message.emoji}</span>
              <span className={cn("text-sm font-medium", message.color)}>June 22nd Birthday</span>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className={cn(
                  "transition-all duration-200",
                  copied ? "bg-green-50 border-green-200 text-green-700" : "",
                )}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="hover:bg-pink-50 hover:border-pink-200"
              >
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </CardContent>

        {/* Animated border */}
        <div className="absolute inset-0 rounded-lg">
          <div
            className={cn(
              "absolute inset-0 rounded-lg opacity-20",
              "bg-gradient-to-r from-transparent via-white to-transparent",
              "animate-pulse",
            )}
          />
        </div>
      </Card>
    </div>
  )
}
