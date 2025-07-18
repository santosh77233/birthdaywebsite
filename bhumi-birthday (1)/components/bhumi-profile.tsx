import Image from "next/image"
import { cn } from "@/lib/utils"

interface BhumiProfileProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  showBorder?: boolean
  showGlow?: boolean
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-32 h-32",
}

export function BhumiProfile({ size = "md", className, showBorder = true, showGlow = false }: BhumiProfileProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative rounded-full overflow-hidden",
          sizeClasses[size],
          showBorder && "ring-4 ring-pink-200 ring-offset-2 ring-offset-white/50",
          showGlow && "shadow-xl shadow-pink-500/25",
        )}
      >
        <Image src="/images/bhumi-profile.png" alt="Bhumi's Profile Photo" fill className="object-cover" priority />
      </div>
      {showGlow && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400/20 to-purple-400/20 animate-pulse"></div>
      )}
    </div>
  )
}
