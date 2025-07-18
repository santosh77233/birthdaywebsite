"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cake, Star, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BhumiProfile } from "@/components/bhumi-profile"

export default function OpenedCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-pink-200 relative overflow-hidden">
      {/* Back navigation */}
      <div className="absolute top-4 left-4 z-20">
        <Link href="/card-preview">
          <Button variant="ghost" className="text-purple-600 hover:text-purple-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Card
          </Button>
        </Link>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <Link href="/">
          <Button variant="outline" size="sm" className="text-purple-600 border-purple-300">
            Return to Celebration
          </Button>
        </Link>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-0">
        {/* Hearts */}
        <div className="absolute top-20 left-16 text-pink-400 opacity-60 animate-float">
          <Heart className="h-6 w-6 fill-current" />
        </div>
        <div className="absolute top-40 right-20 text-red-400 opacity-70 animate-float-delay">
          <div className="w-4 h-4 rounded-full bg-red-400"></div>
        </div>
        <div className="absolute bottom-32 left-12 text-pink-300 opacity-50 animate-float-slow">
          <div className="w-3 h-3 rounded-full bg-pink-300"></div>
        </div>

        {/* Stars */}
        <div className="absolute top-32 left-1/3 text-yellow-400 opacity-60 animate-float-delay">
          <Star className="h-5 w-5 fill-current" />
        </div>
        <div className="absolute bottom-20 right-1/4 text-pink-400 opacity-70 animate-float">
          <Star className="h-4 w-4 fill-current" />
        </div>
        <div className="absolute top-60 right-16 text-yellow-300 opacity-50 animate-float-slow">
          <Star className="h-3 w-3 fill-current" />
        </div>

        {/* Circles and shapes */}
        <div className="absolute top-80 left-20 w-5 h-5 rounded-full bg-purple-300 opacity-60 animate-float"></div>
        <div className="absolute bottom-40 right-32 w-4 h-4 rounded-full bg-blue-300 opacity-70 animate-float-delay"></div>
        <div className="absolute top-96 right-1/3 w-3 h-3 rounded-full bg-pink-400 opacity-50 animate-float-slow"></div>

        {/* Diamonds */}
        <div className="absolute top-24 right-1/3 w-4 h-4 bg-purple-300 opacity-60 rotate-45 animate-float-delay"></div>
        <div className="absolute bottom-60 left-1/4 w-3 h-3 bg-blue-300 opacity-70 rotate-45 animate-float"></div>
        <div className="absolute top-72 left-32 w-5 h-5 bg-pink-300 opacity-50 rotate-45 animate-float-slow"></div>

        {/* Additional decorative elements */}
        <div className="absolute bottom-80 right-12 text-pink-300 opacity-60 animate-float-delay">
          <Heart className="h-4 w-4" />
        </div>
        <div className="absolute top-52 left-8 w-2 h-2 rounded-full bg-yellow-400 opacity-70 animate-float"></div>
        <div className="absolute bottom-24 left-1/3 w-6 h-6 rounded-full bg-purple-200 opacity-50 animate-float-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 max-w-lg w-full">
          <CardContent className="p-8 text-center">
            {/* Bhumi's Profile Photo */}
            <div className="mb-4 flex justify-center">
              <BhumiProfile size="md" showBorder={true} showGlow={true} />
            </div>

            {/* Header */}
            <h1 className="text-4xl font-bold text-red-500 mb-4">Happy Birthday!</h1>

            {/* Icons */}
            <div className="flex justify-center gap-2 mb-4">
              <Cake className="h-6 w-6 text-red-500" />
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              <Heart className="h-6 w-6 text-red-500 fill-current" />
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl font-semibold text-red-500 mb-8">To My Cutiepie</h2>

            {/* Main message */}
            <div className="space-y-6 text-center">
              <p className="text-purple-600 font-medium leading-relaxed text-lg">
                Just wanted to remind you—you're my favorite person. My days are better, smiles are wider, and life is
                sweeter because of you.
              </p>

              <p className="text-purple-600 font-medium leading-relaxed text-lg">
                I hope your birthday is full of love, magic, and everything that makes you smile{" "}
                <Heart className="inline h-5 w-5 text-red-500 fill-current" />
              </p>

              {/* Large heart */}
              <div className="py-4">
                <Heart className="h-12 w-12 text-red-500 fill-current mx-auto" />
              </div>

              <p className="text-purple-600 font-medium leading-relaxed">
                May every wish you make today come true.
                <br />
                You deserve the world, and I'll always be here
                <br />
                to remind you of that.
              </p>

              <p className="text-red-500 font-medium text-lg">
                Let's always stay like this... together, forever
                <span className="ml-1">👑</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
