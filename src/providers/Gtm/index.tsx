'use client'
import { useEffect } from 'react'
import { ReactTagManager } from 'react-gtm-ts'

export default function GtmProvider() {
  const id = process.env.NEXT_PUBLIC_GTM_ID || ''

  useEffect(() => {
    if (id) {
      ReactTagManager.init({
        code: id,
        debug: false,
        performance: false,
      })
    }
  }, [id])

  return null
}
