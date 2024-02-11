import HeroPlan from '@/feature/PlanPage/Hero'
import PlanFree from '@/feature/PlanPage/PlanFree'
import PlanPro from '@/feature/PlanPage/PlanPro'
import Subscriptions from '@/feature/PlanPage/Subscriptions'
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
      <PlanPro />
      <PlanFree />
    </>
  )
}
