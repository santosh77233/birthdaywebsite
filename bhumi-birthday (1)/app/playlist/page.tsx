import { BirthdayLayout } from "@/components/birthday-layout"
import { Music } from "lucide-react"
import { BhumiProfile } from "@/components/bhumi-profile"

export default function PlaylistPage() {
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
              <BhumiProfile size="lg" showBorder={true} />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
              Bhumi's Playlist
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              A collection of Bhumi's favorite songs to celebrate her special day
            </p>
          </div>
        </header>

        {/* Bhumi's Playlist */}
        <section className="py-10 px-4 max-w-6xl mx-auto bg-white/50 rounded-3xl my-10">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Music className="h-8 w-8 text-purple-500" />
            <span>Bhumi's Playlist</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/WKbwopSXLWU"
                title="Playlist Song 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/Xx0SXD5yves"
                title="Playlist Song 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/dYu1hHy1NX4"
                title="Playlist Song 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-gray-600">
          <p>Made with ❤️ for Bhumi's Birthday - June 22nd</p>
        </footer>
      </div>
    </BirthdayLayout>
  )
}
