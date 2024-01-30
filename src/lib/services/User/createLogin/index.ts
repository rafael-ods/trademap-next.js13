import getApiUri from '@/lib/utils/getApiUri'
import { CreateLoginPayload } from './schema'

export default async function createLogin({
  ...data
}: CreateLoginPayload): Promise<any> {
  try {
    const requestLogin = await fetch(getApiUri('/api/auth/user/create'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    })
    if (requestLogin.ok) {
      return requestLogin
    }
  } catch (error) {
    return error
  }
}
