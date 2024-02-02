'use client'
/* eslint-disable @next/next/no-img-element */
import Input from '@/component/Input'
import InputCheckbox from '@/component/Input/InputCheckbox'
import useMessage from '@/lib/hooks/useMessage'
import useProgressBar from '@/lib/hooks/useProgressBar'
import {
  CreateLoginPayload,
  createLoginSchema,
} from '@/lib/services/User/createLogin/schema'
import classMerge from '@/lib/utils/classMerge'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'

export default function UserLoginForm() {
  const progress = useProgressBar()
  const message = useMessage()

  const form = useForm<CreateLoginPayload>({
    resolver: zodResolver(createLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmit: SubmitHandler<CreateLoginPayload> = async (data) => {
    try {
      progress.start()
      const response = await signIn('signIn', {
        ...data,
        redirect: false,
      })

      if (response?.error) throw new Error(response.error)
      message.success('Login realizado com sucesso!')
      setTimeout(() => {
        window.location.href = '/onboard/perfil'
      }, 2000)
    } catch (error) {
      message.error(
        'Ocorreu um erro ao realizar o login. Verifique os dados e tente novamente!',
      )
    } finally {
      progress.done()
    }
  }

  return (
    <section
      className={classMerge(['grid', 'lg:grid-cols-12', 'min-h-screen'])}
    >
      <div
        className={classMerge([
          'hidden',
          'lg:col-span-6',
          'bg-gray-main-login',
          'lg:flex',
          'flex-col',
          'items-center',
          'justify-between',
          'h-full',
          'py-10',
        ])}
      >
        <div />
        <img src="/assets/login/trademap-logo-login.svg" alt="logo trademap" />
        <img
          className="items-end"
          src="/assets/login/logo-vm.svg"
          alt="logo valemobi"
        />
      </div>
      <div
        className={classMerge([
          'lg:col-span-6',
          'bg-gray-main-login',
          'lg:bg-gray-main-light',
          'flex',
          'justify-center',
          'items-center',
          'px-4',
          'lg:px-0',
        ])}
      >
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full mx-auto md:max-w-[432px] flex flex-col gap-5 "
        >
          <h1 className="text-2xl mb-[20px] text-white-main font-medium">
            Entre ou crie sua conta
          </h1>
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="E-mail"
                type="text"
                helpText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                label="Senha"
                placeholder=""
                type="password"
                helpText={fieldState.error?.message}
              />
            )}
          />
          <div className="flex  justify-between items-center">
            <InputCheckbox label="Lembrar conta" />
            <a className="text-green-main hover:underline" href="#">
              Esqueci a senha
            </a>
          </div>
          <button
            disabled={
              progress.isLoading ||
              !!form.watch(['email', 'password']).includes('')
            }
            type="submit"
            className={classMerge([
              'p-2 ',
              'rounded-lg ',
              'font-medium',
              'bg-[#00D690] ',
              'text-gray-main ',
              'disabled:opacity-25 ',
              'disabled:cursor-not-allowed  ',
              'disabled:!bg-green-main-hover ',
            ])}
          >
            Entrar na minha conta
          </button>
          <a
            href="/onboard/cadastro"
            className="p-2 text-center rounded-lg text-[#36D698] font-medium hover:underline border-2 border-[#36D698]"
          >
            Criar uma conta
          </a>
          <div className="flex flex-col items-center gap-2">
            <p className="text-white-main mt-10">Ou entre com:</p>
            <button
              type="submit"
              className="bg-white rounded-md lg:w-[208px] self-start px-3 py-2 lg:px-0 lg:self-center"
            >
              <img
                className="mx-auto"
                src="/assets/login/google.svg"
                alt="icon google"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
