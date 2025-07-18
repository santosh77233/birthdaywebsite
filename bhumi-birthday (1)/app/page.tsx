import type React from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Calendar, Gift, Video, Music, Heart } from "lucide-react"
import Link from "next/link"
import { BirthdayLayout } from "@/components/birthday-layout"
import { BhumiProfile } from "@/components/bhumi-profile"
import { DailyMessage } from "@/components/daily-message"
import { BirthdayCountdownWidget } from "@/components/birthday-countdown-widget"
import { MessageHistory } from "@/components/message-history"

export default function HomePage() {
  return (
    <BirthdayLayout>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink-400 animate-float"></div>
          <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-purple-400 animate-float-delay"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-yellow-400 animate-float-slow"></div>
          <div className="absolute bottom-5 right-1/3 w-12 h-12 rounded-full bg-blue-400 animate-float-delay-slow"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 md:py-0">
          <div className="text-center max-w-3xl mx-auto">
            {/* Bhumi's Profile Photo */}
            <div className="mb-8 flex justify-center">
              <BhumiProfile size="xl" showBorder={true} showGlow={true} className="animate-float" />
            </div>

            {/* Daily Message Section */}
            <div className="mb-8 max-w-2xl mx-auto">
              <DailyMessage />
            </div>

            {/* Countdown Widget */}
            <div className="mb-8 max-w-md mx-auto">
              <BirthdayCountdownWidget />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
              Bhumi's Birthday Celebration
            </h1>

            <p className="text-xl text-gray-700 mb-8">
              Welcome to Bhumi's special birthday celebration! Explore all the birthday surprises we've prepared.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <FeatureCard
                title="Birthday Countdown"
                description="See how much time is left until the big day!"
                icon={<Calendar className="h-6 w-6 text-purple-500" />}
                href="/countdown"
              />

              <FeatureCard
                title="Video Messages"
                description="Watch special birthday messages from friends and family"
                icon={<Video className="h-6 w-6 text-blue-500" />}
                href="/video-messages"
              />

              <FeatureCard
                title="Bhumi's Playlist"
                description="Listen to Bhumi's favorite songs"
                icon={<Music className="h-6 w-6 text-green-500" />}
                href="/playlist"
              />

              <FeatureCard
                title="Bhumi's Favorites"
                description="Discover Bhumi's favorite movies, books, music, and hobbies"
                icon={<Heart className="h-6 w-6 text-red-500" />}
                href="/favorites"
              />

              <FeatureCard
                title="Birthday Card"
                description="Open a special birthday card with a heartfelt message"
                icon={<Gift className="h-6 w-6 text-pink-500" />}
                href="/loading-card"
                className="md:col-span-2 lg:col-span-1"
              />
            </div>

            {/* Message History */}
            <div className="max-w-2xl mx-auto mb-8">
              <MessageHistory />
            </div>

            <Link href="/countdown">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Start Birthday Experience
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </BirthdayLayout>
  )
}

function FeatureCard({
  title,
  description,
  icon,
  href,
  className,
}: {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  className?: string
}) {
  return (
    <Link href={href} className={className}>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-pink-50">{icon}</div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
