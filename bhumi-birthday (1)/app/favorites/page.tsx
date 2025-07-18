import { BirthdayLayout } from "@/components/birthday-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Film, Book, Music, Heart } from "lucide-react"
import Image from "next/image"
import { BhumiProfile } from "@/components/bhumi-profile"

export default function FavoritesPage() {
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
              Bhumi's Favorites
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Explore Bhumi's favorite movies, books, music, and hobbies
            </p>
          </div>
        </header>

        {/* Bhumi's Favorites */}
        <section className="py-10 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Heart className="h-8 w-8 text-red-500" />
            <span>Bhumi's Favorites</span>
          </h2>

          <Tabs defaultValue="movies" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="movies" className="flex items-center gap-2">
                <Film className="h-4 w-4" />
                <span>Movies</span>
              </TabsTrigger>
              <TabsTrigger value="books" className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                <span>Books</span>
              </TabsTrigger>
              <TabsTrigger value="music" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                <span>Music</span>
              </TabsTrigger>
              <TabsTrigger value="hobbies" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Hobbies</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="movies">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FavoriteCard
                  title="Yeh Jawaani Hai Deewani"
                  subtitle="2013 Romance/Comedy"
                  details="CBFC: U/A 2h 40m"
                  imageUrl="/placeholder.svg?height=200&width=350"
                />
                <FavoriteCard
                  title="Sanam Teri Kasam"
                  subtitle="2016 Romance/Musical"
                  details="CBFC: U 2h 34m"
                  imageUrl="/placeholder.svg?height=200&width=350"
                />
                <FavoriteCard
                  title="Spider-Man"
                  subtitle="Action/Adventure"
                  details="Comic book character franchise"
                  imageUrl="/placeholder.svg?height=200&width=350"
                />
              </div>
            </TabsContent>

            <TabsContent value="books">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FavoriteCard
                  title="The Alchemist"
                  subtitle="by Paulo Coelho"
                  details="Philosophical Fiction"
                  imageUrl="/placeholder.svg?height=200&width=350"
                />
                <FavoriteCard
                  title="The Diary of a Young Girl"
                  subtitle="by Anne Frank"
                  details="Autobiography"
                  imageUrl="/placeholder.svg?height=200&width=350"
                />
                <FavoriteCard
                  title="Harry Potter Series"
                  subtitle="by J.K. Rowling"
                  details="Fantasy"
                  imageUrl="/placeholder.svg?height=200&width=350"
                />
              </div>
            </TabsContent>

            <TabsContent value="music">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FavoriteCard
                  title="Chaar Kadam"
                  subtitle="by Shaan, Shreya Ghoshal"
                  details="Bollywood (2014)"
                  imageUrl="/placeholder.svg?height=200&width=350"
                />
                <FavoriteCard
                  title="Saude Bazi"
                  subtitle="by Pritam, Anupam Amod"
                  details="Bollywood (2010)"
                  imageUrl="/placeholder.svg?height=200&width=350"
                />
                <FavoriteCard
                  title="Aankhein Khuli"
                  subtitle="by Jatin-Lalit, Lata Mangeshkar, Udit Narayan"
                  details="Bollywood"
                  imageUrl="/placeholder.svg?height=200&width=350"
                />
              </div>
            </TabsContent>

            <TabsContent value="hobbies">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <HobbyCard title="Photography" icon="📷" />
                <HobbyCard title="Hiking" icon="🥾" />
                <HobbyCard title="Cooking" icon="🍳" />
                <HobbyCard title="Painting" icon="🎨" />
                <HobbyCard title="Reading" icon="📚" />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-gray-600">
          <p>Made with ❤️ for Bhumi's Birthday - June 22nd</p>
        </footer>
      </div>
    </BirthdayLayout>
  )
}

function FavoriteCard({
  title,
  subtitle,
  details,
  imageUrl,
}: {
  title: string
  subtitle: string
  details: string
  imageUrl: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
        <p className="text-xs text-gray-500 mt-1">{details}</p>
      </CardContent>
    </Card>
  )
}

function HobbyCard({ title, icon }: { title: string; icon: string }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </CardContent>
    </Card>
  )
}
