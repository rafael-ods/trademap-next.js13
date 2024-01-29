/* eslint-disable @next/next/no-img-element */
import Input from '@/component/Input'
import InputCheckbox from '@/component/Input/InputCheckbox'
import classMerge from '@/lib/utils/classMerge'

export default function UserLoginForm() {
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
        <form className="w-full mx-auto md:max-w-[432px] flex flex-col gap-5 ">
          <h1 className="text-2xl mb-[20px] text-white-main font-medium">
            Entre ou crie sua conta
          </h1>
          <Input label="E-mail, CPF ou celular" type="text" />
          <Input label="Senha" type="password" />
          <div className="flex  justify-between items-center">
            <InputCheckbox label="Lembrar conta" />
            <a className="text-green-main hover:underline" href="#">
              Esqueci a senha
            </a>
          </div>

          <button className="bg-[#00D690] p-2 rounded-lg text-gray-main font-medium hover:bg-green-main-hover">
            Entrar na minha conta
          </button>
          <button className="p-2 rounded-lg text-[#36D698] font-medium hover:underline border-2 border-[#36D698]">
            Criar uma conta
          </button>

          <div className="flex flex-col items-center gap-2">
            <p className="text-white-main mt-10">Ou entre com:</p>
            <button className="bg-white rounded-md lg:w-[208px] self-start px-3 py-2 lg:px-0 lg:self-center">
              <img
                className="mx-auto"
                src="/assets/login/google.svg"
                alt="icon goolge"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
