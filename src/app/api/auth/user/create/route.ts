import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // Simula um login bem-sucedido
  const { email, password } = await req.json()

  if (email === 'admin@gmail.com' && password === '0123456789@Aa') {
    return NextResponse.json({
      success: true,
      message: 'Login bem-sucedido',
      token: '1234',
    })
  } else {
    return NextResponse.json({
      success: false,
      message: 'Credenciais inválidas',
      status: 400,
    })
  }
}
