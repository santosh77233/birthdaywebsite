import { BhumiProfile } from "./bhumi-profile"

export function FloatingBhumiProfile() {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <div className="relative">
        <BhumiProfile size="md" showBorder={true} showGlow={true} className="animate-bounce" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full"></div>
      </div>
    </div>
  )
}
