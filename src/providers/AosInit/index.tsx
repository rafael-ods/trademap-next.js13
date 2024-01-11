import AOS from 'aos'
import { useEffect } from 'react'

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 0,
      once: true,
      delay: 300,
    })
  }, [])

  return null
}
