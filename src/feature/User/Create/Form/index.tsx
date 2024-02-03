'use client'
import Button from '@/component/Button'
import Input from '@/component/Input'
import InputMask from '@/component/Input/InputMask'
import InputSelect from '@/component/Input/InputSelect'
import getStateList from '@/lib/services/state/getStateList'

export default function UserCreateForm() {
  const stateList = getStateList()
  return (
    <section className="bg-gray-main-login py-10 lg:py-14">
      <form data-aos="fade-up" data-aos-delay={600} className="container">
        <div className="grid lg:grid-cols-12 gap-4 text-white">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="paragraph text-white mb-6">Dados do acesso</p>
            <Input label="E-mail" type="email" />
            <Input label="Senha" type="password" />
            <Input label="Confirmar senha" type="password" />
            <Input label="Nome" type="text" />
            <Input label="Sobrenome" type="text" />
            <InputMask
              label="Celular"
              type="text"
              placeholder="(99) 99999-9999"
              mask="(99)99999-9999"
            />
            <InputMask
              label="Data de nascimento *"
              placeholder="00/00/0000"
              mask="99/99/9999"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="paragraph text-white mb-6">Dados pessoais</p>

            <InputMask label="CEP" placeholder="00000-00" mask="99999-999" />
            <InputSelect label="Estado" options={stateList} />
            <Input label="Cidade" type="text" />
            <Input label="Bairro" type="text" />
            <Input label="Endereço" type="text" />
            <Input label="Número" type="text" />
            <Input label="Complemento" type="text" />
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
