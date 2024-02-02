'use client'
import Button from '@/component/Button'
import Input from '@/component/Input'

export default function UserCreateForm() {
  return (
    <section className="bg-gray-main-login py-10 lg:py-14">
      <form data-aos="fade-up" data-aos-delay={600} className="container">
        <div className="grid lg:grid-cols-12 gap-4 text-white">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="paragraph text-white mb-6">Dados do acesso</p>
            <Input label="E-mail" type="email" />
            <Input label="Senha" type="password" />
            <Input label="Confirmar senha" type="password" />
          </div>
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="paragraph text-white mb-6">Dados pessoais</p>
            <Input label="Nome" type="text" />
            <Input label="Sobrenome" type="text" />
            <Input label="Celular" type="text" placeholder="(99)99999-9999" />
            <Input
              label="Data de nascimento"
              type="text"
              placeholder="dd/mm/aaaa"
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
