import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { token } = await req.json()

  if (token === '1234') {
    return NextResponse.json({
      success: true,
      name: 'Rafael',
      email: 'admin@gmail.com',
      lastName: 'Oliveira',
    })
  } else {
    return NextResponse.json({
      success: false,
      message: 'Credenciais inválidas',
    })
  }
}
