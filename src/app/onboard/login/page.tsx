import UserLoginForm from '@/feature/User/Create/Login/Form'
import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: getPageTitle('Login'),
}

export default function Page() {
  return (
    <>
      <UserLoginForm />
    </>
  )
}
