'use client'
import Button from '@/component/Button'
import Input from '@/component/Input'
import InputMask from '@/component/Input/InputMask'
import InputSelect from '@/component/Input/InputSelect'
import useMessage from '@/lib/hooks/useMessage'
import useProgressBar from '@/lib/hooks/useProgressBar'
import createUserSchema, {
  CreateUserPayload,
} from '@/lib/services/User/createUser/schema'
import getStateList from '@/lib/services/state/getStateList'
import { GetAddressByCodeResponse } from '@/lib/services/zipCode/getAddressByCode/schema'
import CustomError from '@/lib/utils/CustomError'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

export default function UserCreateForm() {
  const progress = useProgressBar()
  const message = useMessage()
  const params = useSearchParams()

  const form = useForm<CreateUserPayload>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: String(params.get('name') || ''),
      lastName: String(params.get('lastName') || ''),
      email: String(params.get('email') || ''),
    },
  })

  const handleSubmit: SubmitHandler<CreateUserPayload> = async (data) => {
    try {
      progress.start()

      const response = await fetch('/api/user/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          utmSource: String(localStorage.getItem('utm_source') || ''),
          utmMedium: String(localStorage.getItem('utm_medium') || ''),
          utmCampaign: String(localStorage.getItem('utm_campaign') || ''),
          utmTerm: String(localStorage.getItem('utm_term') || ''),
          utmContent: String(localStorage.getItem('utm_content') || ''),
        }),
        cache: 'no-store',
      })

      if (response.ok) {
        message.success('Cadastro realizado com sucesso!')

        localStorage.removeItem('utm_source')
        localStorage.removeItem('utm_medium')
        localStorage.removeItem('utm_campaign')
        localStorage.removeItem('utm_term')
        localStorage.removeItem('utm_content')
        // setTimeout(() => {
        //   window.location.href = `/cadastro/sucesso?email=${data.email}`
        // }, 2000)
        setTimeout(() => {
          window.location.href = `/login`
        }, 2000)
        return
      }

      const error = await response.json()
      throw new CustomError(error)
    } catch (e) {
      const error = e instanceof CustomError ? e : new CustomError()
      message.error(error.message)
    } finally {
      progress.done()
    }
  }

  const handleSearchZipCode = async (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    try {
      const zipCode = (e.currentTarget.value || '').replace(/\D/g, '')
      if (zipCode.length === 8) {
        const response = await fetch(`/api/zip-code/${zipCode}`, {
          method: 'GET',
          headers: { Accept: 'application/json' },
          cache: 'no-store',
        })
        if (response.ok) {
          const address: GetAddressByCodeResponse = await response.json()
          form.setValue('zipCode', address.zipCode)
          form.setValue('street', address.street)
          form.setValue('neighborhood', address.neighborhood)
          form.setValue('state', address.state)
          form.setValue('city', address.city)
        }
      }
    } catch (e) {
      // handle error
    }
  }

  return (
    <section className="bg-gray-main-login py-10 lg:py-14">
      <form
        data-aos="fade-up"
        data-aos-delay={600}
        className="container"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="grid lg:grid-cols-12 gap-4 text-white">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="paragraph text-white mb-6">Dados do acesso</p>
            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="E-mail *"
                  placeholder="E-mail"
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
                  type="password"
                  label="Senha *"
                  placeholder="senha forte"
                  helpText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="passwordConfirmation"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  type="password"
                  label="Confirmar Senha *"
                  placeholder="repetir senha forte"
                  helpText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Nome *"
                  placeholder="seu nome"
                  helpText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="lastName"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Sobrenome *"
                  placeholder="seu sobrenome"
                  helpText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="phone"
              render={({ field, fieldState }) => (
                <InputMask
                  {...field}
                  label="Celular *"
                  placeholder="(00) 00000-0000"
                  mask="(99) 99999-9999"
                  helpText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="birthdate"
              render={({ field, fieldState }) => (
                <InputMask
                  {...field}
                  label="Data de nascimento *"
                  placeholder="00/00/0000"
                  mask="99/99/9999"
                  helpText={fieldState.error?.message}
                />
              )}
            />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="paragraph text-white mb-6">Dados pessoais</p>

            <Controller
              control={form.control}
              name="zipCode"
              render={({ field, fieldState }) => (
                <InputMask
                  {...field}
                  label="CEP *"
                  placeholder="00000-00"
                  mask="99999-999"
                  helpText={fieldState.error?.message}
                  name={field.name}
                  onKeyUp={handleSearchZipCode}
                />
              )}
            />
            <Controller
              control={form.control}
              name="state"
              render={({ field, fieldState }) => {
                const stateList = getStateList()
                return (
                  <InputSelect
                    {...field}
                    label="Estado *"
                    options={stateList}
                    placeholder="seu estado"
                    helpText={fieldState.error?.message}
                  />
                )
              }}
            />
            <Controller
              control={form.control}
              name="city"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Cidade *"
                  placeholder="sua cidade"
                  helpText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="neighborhood"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Bairro *"
                  placeholder="seu bairro"
                  helpText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="street"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Logradouro *"
                  placeholder="Rua, avenida, estrada..."
                  helpText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="number"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Número *"
                  placeholder="000"
                  helpText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={form.control}
              name="complement"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Complemento"
                  placeholder="se houver"
                  helpText={fieldState.error?.message}
                />
              )}
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay={700}>
          <Button classProps={'w-full !py-3 mt-10'} colorMode="contrast">
            Cadastrar
          </Button>
        </div>
      </form>
    </section>
  )
}
