import getAuthConfig from '@/lib/services/auth/getAuthConfig'
import NextAuth from 'next-auth/next'

const handler = NextAuth(getAuthConfig())

export { handler as GET, handler as POST }
