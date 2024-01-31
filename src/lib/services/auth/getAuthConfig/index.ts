import CredentialsProvider from 'next-auth/providers/credentials'
import { GetAuthConfigResponse } from './schema'
import createLogin from '../../User/createLogin'
import getUserMe from '../../User/getUserMe'
import getCurrentUser from '../../User/getCurrentUser'

export default function getAuthConfig(): GetAuthConfigResponse {
  return {
    providers: [
      CredentialsProvider({
        id: 'signIn',
        name: 'signIn',
        credentials: {
          email: { label: 'E-mail', type: 'text', value: '' },
          password: { label: 'Password', type: 'password', value: '' },
        },
        async authorize(credentials) {
          try {
            const login = await createLogin({
              email: credentials?.email || '',
              password: credentials?.password || '',
            })
            const userData = await login.json()
            if (userData.status === 400) {
              throw userData
            }
            if (login.ok) {
              const user = await getUserMe(userData.token)
              if (user) return { ...user, token: userData.token }
            }
            return login
          } catch (error) {
            return null
          }
        },
      }),
      CredentialsProvider({
        id: 'refresh-user',
        name: 'refresh-user',
        credentials: {},
        async authorize() {
          try {
            const user = await getCurrentUser()
            const me = await getUserMe({ token: user?.token || '' })
            console.log(user, me)
            if (me) return me
            return null
          } catch (error) {
            return null
          }
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    session: {
      strategy: 'jwt',
      maxAge: 60 * 60 * 24 * 1, // 1 day
    },
    pages: {
      signIn: '/onboard/login',
    },
    callbacks: {
      async session({ session, token }) {
        const blackList = ['iat', 'exp', 'jti']
        const sanitizedToken = Object.keys(token).reduce(
          (response, item) => {
            if (!blackList.includes(item)) {
              response[item] = token[item]
              return response
            }
            return response
          },
          {} as Record<string, any>,
        )
        return { ...session, user: sanitizedToken }
      },
      async jwt({ token, user }) {
        return (user as any) || token
      },
    },
  }
}
