import getApiUri from '@/lib/utils/getApiUri'
import { CreateUserPayload, CreateUserResponse } from './schema'
import CustomError from '@/lib/utils/CustomError'

export default async function createUser({
  ...data
}: CreateUserPayload): Promise<CreateUserResponse> {
  const request = await fetch(getApiUri('/'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  })

  const body = await request.json()

  if (request.ok) return body

  throw new CustomError(body)
}
