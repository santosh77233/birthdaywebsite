import type { ReactNode } from "react"
import { BirthdayNavigation } from "./birthday-navigation"
import { FloatingBhumiProfile } from "./floating-bhumi-profile"
import { PWAInstall } from "./pwa-install"
import { PWAStatus } from "./pwa-status"
import { ServiceWorkerRegistration } from "./service-worker-registration"
import { DailyMessageNotification } from "./daily-message-notification"

interface BirthdayLayoutProps {
  children: ReactNode
  showNavigation?: boolean
}

export function BirthdayLayout({ children, showNavigation = true }: BirthdayLayoutProps) {
  return (
    <div className="min-h-screen">
      <ServiceWorkerRegistration />
      <PWAStatus />
      <DailyMessageNotification />
      {showNavigation && <BirthdayNavigation />}
      <div className="md:pl-64">{children}</div>
      <FloatingBhumiProfile />
      <PWAInstall />
    </div>
  )
}
