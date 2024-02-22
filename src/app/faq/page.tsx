import Faq from '@/feature/Faq'
import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: getPageTitle('Página de Faq'),
}

export default function Page() {
  return (
    <>
      <Faq />
    </>
  )
}
