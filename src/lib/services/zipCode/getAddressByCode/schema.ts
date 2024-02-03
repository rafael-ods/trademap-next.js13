export type GetAddressByCodePayload = {
  code: string
}

export type GetAddressByCodeResponse = {
  number: string
  zipCode: string
  street: string
  complement: string
  neighborhood: string
  state: string
  city: string
}
