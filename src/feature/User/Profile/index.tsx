'use client'

import Template from '@/app/templates'
import Button from '@/component/Button'
import useMessage from '@/lib/hooks/useMessage'
import useProgressBar from '@/lib/hooks/useProgressBar'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'

type UserProfileProps = {
  user: User | undefined
}

export default function UserProfile({ user }: UserProfileProps) {
  const progress = useProgressBar()
  const message = useMessage()

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
        'Ocorreu um erro ao realizar a requisição. Tente novamente!!',
      )
    } finally {
      progress.done()
    }
  }
  return (
    <Template>
      <section className="min-h-screen flex flex-col gap-6 items-center justify-center bg-gray-main-login">
        <div className="text-white text-4xl text-center">{`Olá ${user?.name}  seja bem vindo!`}</div>
        <Button
          onClick={handleExit}
          colorMode="contrast"
          classProps={'w-[300px] !text-2xl'}
        >
          Sair
        </Button>
      </section>
    </Template>
  )
}
