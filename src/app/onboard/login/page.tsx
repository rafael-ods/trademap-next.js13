import UserLoginForm from '@/feature/User/Login/Form'
import getPageTitle from '@/lib/utils/getPageTitle'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: getPageTitle('Login'),
}

export default function page() {
  return (
    <>
      <UserLoginForm />
    </>
  )
}
