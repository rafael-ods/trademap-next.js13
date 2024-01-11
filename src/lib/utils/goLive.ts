import { isAfter, isBefore } from 'date-fns'

export default function goLive() {
  const [startIn, endIn] = String(
    process.env.NEXT_PUBLIC_GO_LIVE_DATE || '',
  ).split('|')

  const dateNow = new Date()
  const startDate = new Date(startIn)
  const endDate = new Date(endIn)

  return {
    isBefore: isBefore(dateNow, startDate),
    isLive: isAfter(dateNow, startDate) && isBefore(dateNow, endDate),
    isAfter: isAfter(dateNow, endDate),
  }
}
