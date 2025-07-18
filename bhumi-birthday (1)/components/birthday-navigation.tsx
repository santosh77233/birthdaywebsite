"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Cake, Video, Music, Heart, Gift, Menu, Calendar, Home, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BhumiProfile } from "./bhumi-profile"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="h-5 w-5" />,
    color: "text-pink-500",
    bgColor: "bg-pink-100",
  },
  {
    name: "Countdown",
    href: "/countdown",
    icon: <Calendar className="h-5 w-5" />,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    name: "Celebration",
    href: "/celebration",
    icon: <Cake className="h-5 w-5" />,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    name: "Video Messages",
    href: "/video-messages",
    icon: <Video className="h-5 w-5" />,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    name: "Playlist",
    href: "/playlist",
    icon: <Music className="h-5 w-5" />,
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    name: "Favorites",
    href: "/favorites",
    icon: <Heart className="h-5 w-5" />,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    name: "Birthday Card",
    href: "/loading-card",
    icon: <Gift className="h-5 w-5" />,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
]

export function BirthdayNavigation() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Don't show navigation on card pages
  const isCardPage = pathname?.includes("card")
  if (isCardPage) {
    return null
  }

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-pink-200 shadow-lg">
        <div className="flex justify-between items-center px-2 py-2">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-colors",
                pathname === item.href ? item.color : "text-gray-500",
              )}
            >
              <div className={cn("p-1.5 rounded-full", pathname === item.href ? item.bgColor : "")}>{item.icon}</div>
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          ))}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <Menu className="h-6 w-6" />
                <span className="text-xs mt-1">More</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[60vh] rounded-t-3xl">
              <div className="pt-6 pb-12">
                <h3 className="text-lg font-bold text-center mb-6 text-pink-600">
                  Bhumi's Birthday <Sparkles className="inline h-4 w-4" />
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex flex-col items-center justify-center p-3 rounded-xl transition-colors",
                        pathname === item.href ? `${item.color} ${item.bgColor}` : "text-gray-500 hover:bg-gray-100",
                      )}
                    >
                      <div className="p-3 rounded-full bg-white shadow-sm mb-2">{item.icon}</div>
                      <span className="text-sm text-center">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block fixed left-0 top-0 bottom-0 w-64 bg-white/80 backdrop-blur-md border-r border-pink-200 shadow-lg z-50">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-pink-100">
            <div className="flex items-center gap-3 mb-2">
              <BhumiProfile size="md" showBorder={true} />
              <div>
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  Bhumi's Birthday
                </h2>
                <p className="text-sm text-purple-600">June 22nd</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                    pathname === item.href
                      ? `${item.color} ${item.bgColor} font-medium`
                      : "text-gray-600 hover:bg-gray-100",
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {pathname === item.href && <ChevronRight className="ml-auto h-4 w-4" />}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-pink-100">
            <p className="text-xs text-center text-gray-500">Made with ❤️ for Bhumi</p>
          </div>
        </div>
      </div>
    </>
  )
}
