import createUser from '@/lib/services/User/createUser'
import CustomError from '@/lib/utils/CustomError'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const user = await createUser(body)
    return NextResponse.json(user, { status: 200 })
  } catch (e) {
    const error = e instanceof CustomError ? e : new CustomError()
    return NextResponse.json(error.getMessage(), { status: error.statusCode })
  }
}
