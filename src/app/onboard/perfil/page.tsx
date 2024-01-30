import UserProfile from '@/feature/User/Profile'
import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: getPageTitle('Perfil'),
}

export default async function Page() {
  return (
    <>
      <UserProfile />
    </>
  )
}
