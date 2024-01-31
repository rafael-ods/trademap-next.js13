import UserLoginForm from '@/feature/User/Create/Login/Form'
import getCurrentUser from '@/lib/services/User/getCurrentUser'
import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
  title: getPageTitle('Login'),
}

export default async function Page() {
  const user = await getCurrentUser()
  if (user) redirect('/onboard/perfil')
  return (
    <>
      <UserLoginForm />
    </>
  )
}
