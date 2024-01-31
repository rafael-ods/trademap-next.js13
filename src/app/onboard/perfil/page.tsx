import UserProfile from '@/feature/User/Profile'
import getCurrentUser from '@/lib/services/User/getCurrentUser'
import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: getPageTitle('Perfil'),
}

export default async function Page() {
  const user = await getCurrentUser()

  if (!user) redirect('/')

  return (
    <>
      <UserProfile user={user} />
    </>
  )
}
