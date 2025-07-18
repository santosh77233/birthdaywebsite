"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { BirthdayLayout } from "@/components/birthday-layout"
import { BhumiProfile } from "@/components/bhumi-profile"
import { DailyMessage } from "@/components/daily-message"

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-06-22T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <BirthdayLayout>
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-yellow-300 opacity-60 animate-float"></div>
          <div className="absolute top-32 right-20 w-12 h-12 rounded-full bg-purple-400 opacity-70 animate-float-delay"></div>
          <div className="absolute top-60 left-1/4 w-20 h-20 rounded-full bg-pink-400 opacity-50 animate-float-slow"></div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 rounded-full bg-blue-300 opacity-60 animate-float-delay-slow"></div>
          <div className="absolute bottom-20 left-20 w-18 h-18 rounded-full bg-yellow-400 opacity-50 animate-float"></div>
          <div className="absolute top-40 right-1/4 w-10 h-10 rounded-full bg-green-300 opacity-70 animate-float-delay"></div>

          {/* Additional geometric shapes */}
          <div className="absolute top-80 left-1/3 w-8 h-8 bg-red-300 opacity-60 rotate-45 animate-float-slow"></div>
          <div className="absolute bottom-60 right-20 w-6 h-6 bg-indigo-300 opacity-70 rotate-12 animate-float"></div>
          <div className="absolute top-96 right-1/2 w-12 h-12 bg-orange-300 opacity-50 rounded-full animate-float-delay"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 md:py-0">
          <div className="text-center mb-12">
            {/* Bhumi's Profile Photo */}
            <div className="mb-6 flex justify-center">
              <BhumiProfile size="xl" showBorder={true} showGlow={true} />
            </div>

            {/* Daily Message */}
            <div className="mb-8 max-w-2xl mx-auto">
              <DailyMessage />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-6 drop-shadow-lg">
              Happy Birthday,
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-8 drop-shadow-lg">
              Bhumi!
            </h1>
            <p className="text-xl md:text-2xl text-purple-700 font-medium max-w-2xl mx-auto">
              Celebrating your special day with love and joy!
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-600 text-center mb-8">
              Countdown to Bhumi's Birthday:
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <CountdownCard value={timeLeft.days} label="Days" />
              <CountdownCard value={timeLeft.hours} label="Hours" />
              <CountdownCard value={timeLeft.minutes} label="Minutes" />
              <CountdownCard value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>

          <Link href="/celebration">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Explore Celebration
            </Button>
          </Link>

          <p className="text-purple-600 mt-6 text-center max-w-md">
            Click above to explore all the birthday messages, playlist, and favorite things prepared just for you!
          </p>
        </div>
      </div>
    </BirthdayLayout>
  )
}

function CountdownCard({ value, label }: { value: number; label: string }) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0">
      <CardContent className="p-6 text-center">
        <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">{value.toString().padStart(2, "0")}</div>
        <div className="text-sm md:text-base text-purple-600 font-medium">{label}</div>
      </CardContent>
    </Card>
  )
}
