import { User } from 'next-auth'

export type GetUserMePayload = {
  token: string
}

export type GetUserMeResponse = User
