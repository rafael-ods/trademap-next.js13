import CtaInformation from '@/feature/CtaInformation'
import CtaInformationUsers from '@/feature/CtaInformationUsers'
import CtaTrademapCarrousel from '@/feature/CtaTrademapCarrousel'
import Hero from '@/feature/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <CtaInformation />
      <CtaTrademapCarrousel />
      <CtaInformationUsers />
    </>
  )
}
