import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'
import Template from './templates'
import NotFound from '@/feature/NotFound'

export const metadata: Metadata = {
  title: getPageTitle('Página não encontrada'),
}

export default function Page() {
  return (
    <Template>
      <NotFound />
    </Template>
  )
}
