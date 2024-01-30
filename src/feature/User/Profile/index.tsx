'use client'

import Button from '@/component/Button'
import useMessage from '@/lib/hooks/useMessage'
import useProgressBar from '@/lib/hooks/useProgressBar'
import { signOut, useSession } from 'next-auth/react'

export default function UserProfile() {
  const progress = useProgressBar()
  const message = useMessage()

  const { data } = useSession()

  const handleExit = async () => {
    try {
      progress.start()
      localStorage.clear()
      await signOut({
        redirect: true,
        callbackUrl: '/',
      })
      message.success('Logout realizado com sucesso!', 5000)
    } catch (error) {
      message.error(
        'Ocorreu um erro ao realizar a requisição. Tente novamente!',
      )
    } finally {
      progress.done()
    }
  }
  return (
    <section className="min-h-screen flex flex-col gap-6 items-center justify-center bg-gray-main">
      <div className="text-white text-4xl">{`Olá ${data?.user?.name} ${data?.user?.lastName} seja bem vindo!`}</div>
      <Button
        onClick={handleExit}
        colorMode="contrast"
        classProps={'w-[300px] !text-2xl'}
      >
        Sair
      </Button>
    </section>
  )
}
