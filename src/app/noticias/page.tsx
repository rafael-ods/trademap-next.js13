import HeaderNews from '@/feature/NewPage/Hero'
import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: getPageTitle('Página de Noticias'),
}

export default function Page() {
  return (
    <>
      <HeaderNews />
    </>
  )
}
