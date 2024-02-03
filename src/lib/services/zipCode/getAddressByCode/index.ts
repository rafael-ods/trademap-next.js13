import CustomError from '@/lib/utils/CustomError'
import { GetAddressByCodePayload, GetAddressByCodeResponse } from './schema'

export default async function getAddressByCode({
  code,
}: GetAddressByCodePayload): Promise<GetAddressByCodeResponse> {
  const request = await fetch(`https://viacep.com.br/ws/${code}/json`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  })

  const body = await request.json()

  if (request.ok)
    return {
      number: '',
      zipCode: body?.cep || '',
      street: body?.logradouro || '',
      complement: '',
      neighborhood: body?.bairro || '',
      state: body?.uf || '',
      city: body?.localidade || '',
    }

  throw new CustomError()
}
