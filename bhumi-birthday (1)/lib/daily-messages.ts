export interface DailyMessage {
  id: string
  daysUntil: number
  message: string
  emoji: string
  color: string
  bgColor: string
}

export const dailyMessages: DailyMessage[] = [
  {
    id: "30-days",
    daysUntil: 30,
    message: "30 days to go! The countdown begins, and we're already excited to celebrate you!",
    emoji: "🎯",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "25-days",
    daysUntil: 25,
    message: "Just 25 days left! Time to start planning something amazing for your special day.",
    emoji: "📅",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "20-days",
    daysUntil: 20,
    message: "20 days and counting! Your birthday energy is already in the air.",
    emoji: "✨",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    id: "15-days",
    daysUntil: 15,
    message: "Halfway through the countdown! 15 days until we get to celebrate you properly.",
    emoji: "🎪",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    id: "14-days",
    daysUntil: 14,
    message: "Two weeks to go! The anticipation is building, and so is our excitement.",
    emoji: "🎨",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "10-days",
    daysUntil: 10,
    message: "Single digits now! 10 days until your birthday - the final stretch begins.",
    emoji: "🚀",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "7-days",
    daysUntil: 7,
    message: "One week left! Time to get ready for an absolutely wonderful celebration.",
    emoji: "🌟",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    id: "5-days",
    daysUntil: 5,
    message: "Just 5 days to go! We can practically feel the birthday magic in the air.",
    emoji: "🎭",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "3-days",
    daysUntil: 3,
    message: "3 days left! The excitement is real, and your special day is almost here.",
    emoji: "🎪",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    id: "2-days",
    daysUntil: 2,
    message: "Tomorrow's the day before! Can you feel the birthday vibes getting stronger?",
    emoji: "🎊",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "1-day",
    daysUntil: 1,
    message: "Tomorrow is THE day! Get ready for 24 hours of pure birthday awesomeness.",
    emoji: "🎉",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: "birthday",
    daysUntil: 0,
    message: "IT'S YOUR BIRTHDAY! Today is all about you - enjoy every single moment!",
    emoji: "🎂",
    color: "text-pink-600",
    bgColor: "bg-gradient-to-r from-pink-50 to-purple-50",
  },
  {
    id: "after-1",
    daysUntil: -1,
    message: "Hope your birthday was absolutely perfect! The celebration continues.",
    emoji: "🌈",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "after-7",
    daysUntil: -7,
    message: "A week since your birthday! Hope you're still feeling the birthday glow.",
    emoji: "✨",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
]

export function getDaysUntilBirthday(): number {
  const today = new Date()
  const currentYear = today.getFullYear()
  let birthday = new Date(currentYear, 5, 22) // June 22nd (month is 0-indexed)

  // If birthday has passed this year, calculate for next year
  if (today > birthday) {
    birthday = new Date(currentYear + 1, 5, 22)
  }

  const diffTime = birthday.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
}

export function getTodaysMessage(): DailyMessage {
  const daysUntil = getDaysUntilBirthday()

  // Find exact match first
  let message = dailyMessages.find((msg) => msg.daysUntil === daysUntil)

  // If no exact match, find the closest one
  if (!message) {
    if (daysUntil > 30) {
      message = dailyMessages[0] // Use 30-day message for anything beyond
    } else if (daysUntil < -7) {
      message = dailyMessages[dailyMessages.length - 1] // Use week-after message
    } else {
      // Find closest message
      message = dailyMessages.reduce((closest, current) => {
        const closestDiff = Math.abs(closest.daysUntil - daysUntil)
        const currentDiff = Math.abs(current.daysUntil - daysUntil)
        return currentDiff < closestDiff ? current : closest
      })
    }
  }

  return message
}

export function getShareText(message: DailyMessage): string {
  const daysUntil = getDaysUntilBirthday()

  if (daysUntil === 0) {
    return `🎂 It's Bhumi's Birthday! ${message.message} 🎉`
  } else if (daysUntil > 0) {
    return `${message.emoji} ${daysUntil} days until Bhumi's birthday! ${message.message}`
  } else {
    return `${message.emoji} ${message.message}`
  }
}
