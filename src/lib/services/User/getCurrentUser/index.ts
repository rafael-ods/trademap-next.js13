import { getServerSession } from 'next-auth'
import getAuthConfig from '../../auth/getAuthConfig'
import { GetCurrentUserResponse } from './schema'

export default async function getCurrentUser(): Promise<GetCurrentUserResponse> {
  const session = await getServerSession(getAuthConfig())

  return session?.user
}
