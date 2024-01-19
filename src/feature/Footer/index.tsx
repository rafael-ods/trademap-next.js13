import NavIcon from '@/component/NavIcon'
import classMerge from '@/lib/utils/classMerge'

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  const listFooter = [
    {
      id: 0,
      title: 'Informações',
    },
    {
      id: 1,
      href: '#',
      label: 'FAQ',
    },
    {
      id: 2,
      href: '#',
      label: 'Tutoriais',
    },
    {
      id: 3,
      href: '#',
      label: 'Planos',
    },
    {
      id: 4,
      href: '#',
      label: 'Cadastre-se',
    },
    {
      id: 5,
      title: 'Trabalhe conosco',
      href: '#',
      label: 'talento@valemobi.com.br',
    },
  ]

  return (
    <footer>
      <div className="bg-gray-main relative z-20">
        <div
          className={classMerge([
            '-z-10',
            'h-full',
            'w-full',
            'bg-cover',
            'absolute',
            'opacity-10',
            'bg-no-repeat',
            'lg:bg-top',
            'bg-footer-background',
          ])}
        ></div>
        <div className="container grid lg:grid-cols-12 py-16 gap-8">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <img
              className="w-[54px] h-auto"
              src="/assets/footer/logo-trademap-clean.png"
              alt=""
            />
            <h6 className="text-white-main font-semibold uppercase text-sm">
              Somos o trademap
            </h6>
            <p className="paragraph text-white-main font-thin text-sm pr-7">
              Nossa missão é oferecer a mais completa plataforma do mercado
              financeiro para todos os tipos de investidores!
            </p>
            <NavIcon colorMode="main" />
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div>
              <h6 className="text-sm text-white-main font-semibold uppercase">
                Contato
              </h6>
              <a
                className="text-[12px] text-white-main font-semibold tracking-wide"
                href="mailto:suporte@trademap.com.br"
              >
                suporte@trademap.com.br
              </a>
            </div>
            <div>
              <p className="paragraph text-gray-main-icon text-xs font-extralight pr-7">
                Av General Furtado Nascimento, 740, cj 55, Alto de Pinheiros São
                Paulo – SP – CEP 05465-070 CNPJ 10.535.290/0001-21
              </p>
            </div>
            <div>
              <h6 className="text-sm text-white-main font-semibold uppercase">
                Imprensa
              </h6>
              <p className="text-[12px] text-white-main font-semibold tracking-wide">
                imprensa@trademap.com.br
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ul>
              {listFooter.map((item) => {
                return (
                  <li key={item.id} className="odd:mb-2">
                    <h6 className="text-sm text-white-main font-semibold uppercase odd:mb-1">
                      {item.title}
                    </h6>
                    <a
                      className="text-green-main-hover text-base hover:text-green-main transition-colors duration-300 ease-in-out w-full "
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <form className="lg:col-span-3 flex flex-col w-full max-w-[250px]">
            <h6 className="text-white-main text-base font-medium uppercase mb-3">
              Newsletter
            </h6>
            <div className="space-y-4">
              <input
                required
                type="text"
                placeholder="Nome"
                className="!appearance-none border-none w-full text-gray-600"
              />
              <input
                required
                type="email"
                placeholder="E-mail"
                className="!appearance-none border-none w-full text-gray-600"
              />
            </div>
            <button className="bg-green-main font-semibold text-gray-950 hover:text-white hover:transition-colors hover:duration-300 hover:ease-in-out py-2 px-6 w-fit lg:self-end mt-4">
              Assinar
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-main-light py-9">
        <div className="container flex items-center justify-between flex-wrap flex-row-reverse lg:flex-row space-y-2 lg:space-y-0">
          <p className="paragraph text-gray-400 text-[13px] font-extralight">
            Uma marca do grupo Valemobi – 2024 © All Rights Reserved.
          </p>
          <a
            className="text-green-main-hover text-sm hover:text-green-main  hover:transition-colors hover:duration-300 hover:ease-in-out"
            href="https://www.linkedin.com/in/rafaelods/"
            target="_blank"
          >
            Desenvolvido por <strong>Rafael Oliveira</strong>
          </a>
          <a
            className="text-green-main-hover text-sm hover:text-green-main  hover:transition-colors hover:duration-300 hover:ease-in-out"
            href="#"
          >
            Termos de Uso e Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
