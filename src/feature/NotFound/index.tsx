'use client'
import InputSearch from '@/component/Input/InputSearch'
import NextLink from 'next/link'

const listNotFound = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Planos',
    path: '/',
  },
  {
    label: 'Notícia',
    path: '/',
  },
  {
    label: 'FAQ',
    path: '/',
  },
]

export default function NotFound() {
  return (
    <section className="container grid lg:grid-cols-12 py-8 lg:py-36 gap-11 lg:gap-0">
      <div
        data-aos="fade-up"
        className="lg:col-span-6 flex flex-col items-center justify-center"
      >
        <span className="text-[#D6D6D6] text-[135px] font-bold">404</span>
        <p className="font-bold text-[53px]">Ooops.</p>
        <p className="text-2xl font-bold">Página não encontrada</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay={400}
        className="lg:col-span-6 flex flex-col gap-4 justify-center w-full lg:max-w-[478px]"
      >
        <p className="text-sm text-gray-400 text-center lg:text-start">
          Conteúdo não encontrado. Efetue uma pesquisa:
        </p>
        <form>
          <InputSearch
            classProps={
              'bg-gray-100 border-none text-sm focus:ring-2 focus:ring-black px-10 py-4 w-full'
            }
          />
        </form>
        <div className="h-1 bg-gray-200 w-[70px]" />
        <div>
          <h6 className="font-bold text-2xl mb-2">Navegue pelo site:</h6>
          <ul className="pl-8 list-disc">
            {listNotFound.map((item) => {
              return (
                <li key={item.label}>
                  <NextLink
                    className="text-base tracking-wider text-green-main-hover font-normal hover:text-green-main transition-colors duration-300"
                    href={item.path}
                  >
                    {item.label}
                  </NextLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
