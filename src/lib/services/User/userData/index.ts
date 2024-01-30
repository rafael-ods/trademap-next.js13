import getApiUri from '@/lib/utils/getApiUri'
import CustomError from '@/lib/utils/CustomError'

export default async function UserData(token: string): Promise<any> {
  const response = await fetch(getApiUri('/api/auth/user/me'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
    cache: 'no-store',
  })
  if (response.ok) {
    return await response.json()
  }

  const error = await response.json()
  throw new CustomError(error)
}
