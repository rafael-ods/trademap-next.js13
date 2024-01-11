'use client'
import React, { useEffect } from 'react'
import Gtm from './Gtm'
import AosInit from './AosInit'
import { ToastContainer } from 'react-toastify'
import { useSearchParams } from 'next/navigation'

type ProvidersProps = {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  const params = useSearchParams()

  useEffect(() => {
    const utmSource = params.get('utm_source')
    const utmMedium = params.get('utm_medium')
    const utmCampaign = params.get('utm_campaign')
    const utmTerm = params.get('utm_term')
    const utmContent = params.get('utm_content')

    if (utmSource) localStorage.setItem('utm_source', utmSource)
    if (utmMedium) localStorage.setItem('utm_medium', utmMedium)
    if (utmCampaign) localStorage.setItem('utm_campaign', utmCampaign)
    if (utmTerm) localStorage.setItem('utm_term', utmTerm)
    if (utmContent) localStorage.setItem('utm_content', utmContent)
  }, [params])

  return (
    <>
      <Gtm />
      <AosInit />
      <ToastContainer />
      {children}
    </>
  )
}
