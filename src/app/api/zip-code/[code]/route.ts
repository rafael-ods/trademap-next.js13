import getAddressByCode from '@/lib/services/zipCode/getAddressByCode'
import CustomError from '@/lib/utils/CustomError'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params: { code } }: { params: { code: string } },
) {
  try {
    const address = await getAddressByCode({ code })
    return NextResponse.json(address, { status: 200 })
  } catch (e) {
    const error = e instanceof CustomError ? e : new CustomError()
    return NextResponse.json(error.getMessage(), { status: error.statusCode })
  }
}
