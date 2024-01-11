import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: getPageTitle('Página não encontrada'),
}

export default function Not() {
  return <h1>Página não encontrada</h1>
}
