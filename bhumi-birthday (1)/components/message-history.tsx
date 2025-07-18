"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Clock, Heart } from "lucide-react"
import { dailyMessages, getDaysUntilBirthday } from "@/lib/daily-messages"
import { cn } from "@/lib/utils"

export function MessageHistory() {
  const [isExpanded, setIsExpanded] = useState(false)
  const currentDaysUntil = getDaysUntilBirthday()

  // Get messages that have already been shown (past messages)
  const pastMessages = dailyMessages.filter((msg) => msg.daysUntil > currentDaysUntil).reverse()

  if (pastMessages.length === 0) {
    return null
  }

  return (
    <div className="mt-6">
      <Button
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-pink-50"
      >
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-pink-500" />
          <span className="text-sm font-medium text-gray-700">Previous Messages ({pastMessages.length})</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </Button>

      {isExpanded && (
        <div className="space-y-3 mt-4 max-h-96 overflow-y-auto">
          {pastMessages.map((message, index) => (
            <Card
              key={message.id}
              className={cn(
                "border-l-4 border-l-pink-200 bg-gray-50/50",
                "transform transition-all duration-300",
                "hover:shadow-md hover:bg-white/80",
              )}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{message.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {message.daysUntil === 0 ? "Birthday Day" : `${message.daysUntil} days before`}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{message.message}</p>
                  </div>
                  <Heart className="h-4 w-4 text-pink-300 fill-current" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
