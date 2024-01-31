import getApiUri from '@/lib/utils/getApiUri'
import CustomError from '@/lib/utils/CustomError'
import { GetUserMePayload, GetUserMeResponse } from './schema'

export default async function getUserMe(
  token: GetUserMePayload,
): Promise<GetUserMeResponse> {
  const response = await fetch(getApiUri('/api/auth/user/me'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),

    cache: 'no-store',
  })

  const body = await response.json()
  if (response.ok) {
    return {
      ...body,
      token,
    }
  }
  throw new CustomError(body)
}
