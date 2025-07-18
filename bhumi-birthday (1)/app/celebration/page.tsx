import { BirthdayLayout } from "@/components/birthday-layout"
import { Button } from "@/components/ui/button"
import { Cake, Sparkles } from "lucide-react"
import Link from "next/link"
import { BhumiProfile } from "@/components/bhumi-profile"

export default function CelebrationPage() {
  return (
    <BirthdayLayout>
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
        {/* Header */}
        <header className="py-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink-400 animate-float"></div>
            <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-purple-400 animate-float-delay"></div>
            <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-yellow-400 animate-float-slow"></div>
            <div className="absolute bottom-5 right-1/3 w-12 h-12 rounded-full bg-blue-400 animate-float-delay-slow"></div>
          </div>

          <div className="relative z-10">
            {/* Bhumi's Profile Photo */}
            <div className="mb-6 flex justify-center">
              <BhumiProfile size="lg" showBorder={true} showGlow={true} />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
              Happy Birthday Bhumi!
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Celebrating your special day with messages from friends and your favorite things!
            </p>
            <p className="text-lg text-purple-600 mt-2 font-medium">🎉 June 22nd - Your Special Day! 🎉</p>
          </div>
        </header>

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link href="/video-messages">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-pink-50">
                    <Cake className="h-10 w-10 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Birthday Messages</h3>
                    <p className="text-gray-600 mt-2">Watch special video messages from friends and family</p>
                  </div>
                  <Button className="mt-4">Watch Messages</Button>
                </div>
              </div>
            </Link>

            <Link href="/playlist">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 h-full">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-full bg-purple-50">
                    <Sparkles className="h-10 w-10 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Bhumi's Playlist</h3>
                    <p className="text-gray-600 mt-2">Listen to Bhumi's favorite songs</p>
                  </div>
                  <Button className="mt-4">Play Music</Button>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mb-12">
            <Link href="/favorites">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Bhumi's Favorites
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/loading-card">
              <Button
                variant="outline"
                size="lg"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-full shadow-sm"
              >
                Open Birthday Card
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-10 text-center text-gray-600">
          <p>Made with ❤️ for Bhumi's Birthday - June 22nd</p>
        </footer>
      </div>
    </BirthdayLayout>
  )
}
