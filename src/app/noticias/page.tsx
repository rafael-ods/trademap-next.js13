import HeaderNews from '@/feature/NewPage/Hero'
import Marketplace from '@/feature/NewPage/Marketplace'
import News from '@/feature/NewPage/News'
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
      <News />
      <Marketplace />
    </>
  )
}
