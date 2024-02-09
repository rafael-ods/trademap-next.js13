import HeroPlan from '@/feature/PlanPage/Hero'
import Subscriptions from '@/feature/PlanPage/Hero/Subscriptions'
import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: getPageTitle('Encontre o plano ideal para você! - TradeMap 💚 📲'),
}

export default function Page() {
  return (
    <>
      <HeroPlan />
      <Subscriptions />
    </>
  )
}
