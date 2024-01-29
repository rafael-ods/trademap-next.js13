import CtaInformation from '@/feature/CtaInformation'
import CtaInformationUsers from '@/feature/CtaInformationUsers'
import CtaTrademapCarrousel from '@/feature/CtaTrademapCarrousel'
import Hero from '@/feature/Hero'
import HomeBroken from '@/feature/HomeBroken'
import News from '@/feature/News'
import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'
import Template from './templates'

export const metadata: Metadata = {
  title: getPageTitle('Seus investimentos na melhor direção'),
}

export default function Home() {
  return (
    <>
      <Template>
        <Hero />
        <CtaInformation />
        <CtaTrademapCarrousel />
        <CtaInformationUsers />
        <HomeBroken />
        <News />
      </Template>
    </>
  )
}
