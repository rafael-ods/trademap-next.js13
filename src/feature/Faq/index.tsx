'use client'
import LogoTradeMap from '@/component/LogoTradeMap'
import classMerge from '@/lib/utils/classMerge'
import NextLink from 'next/link'
import { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import CardFaq from './CardFaq'
import { MdOutlineClose } from 'react-icons/md'

const listLink = [
  {
    path: '#',
    label: 'Entrar',
  },
  {
    path: '#',
    label: 'Enviar uma solicitação',
  },
]

const faqList = [
  {
    href: '#',
    title: 'Guia de Primeiros Passos',
    description:
      'Aqui você pode encontrar a resposta sobre planos, cadastro e segurança no TradeMap!',
  },
  {
    href: '#',
    title: 'Minha conta',
    description:
      'Tire suas dúvidas sobre: alteração de dados cadastrais, resgate de senha e mais!',
  },
  {
    href: '#',
    title: 'Assinaturas',
    description:
      'Conheça nossos planos e combos e tenha uma experiência ainda mais completa na hora de investir!',
  },
  {
    href: '#',
    title: 'Carteira',
    description:
      'Saiba tudo sobre o Módulo de Carteiras: consolidar seus investimentos, conexão com a sua corretora e o portal da B3!',
  },
  {
    href: '#',
    title: 'Operando no TradeMap',
    description:
      'Como enviar ordens diretamente pelo TradeMap utilizando o Multibroker!',
  },
  {
    href: '#',
    title: 'Outras funcionalidades do TradeMap',
    description:
      'Saiba mais sobre: Ligas, EducaMap, Programa de Pontos, Ideias e Notícias!',
  },
  {
    href: '#',
    title: 'TradeChat',
    description: 'Saiba mais sobre o TradeChat!',
  },
  {
    href: '#',
    title: 'Conceitos de mercado',
    description:
      'Entenda sobre alguns conceitos de mercado para operar com mais segurança!',
  },
]

export default function Faq() {
  const [searchValue, setSearchValue] = useState('')
  const [selected, setSelected] = useState(false)

  const handleClearClick = () => {
    setSearchValue('')
  }

  return (
    <section>
      <header className="pt-5 pb-3 bg-white-main-light border-b-[1px] shadow">
        <div className="container flex items-center justify-between">
          <LogoTradeMap
            href="/"
            src="/assets/faq/trademapLogo.png"
            classProps="w-[78px] h-auto"
          />

          <nav>
            <ul
              className={classMerge([
                'fixed',
                'hidden',
                'w-full',
                'bg-white',
                'left-0',
                'top-[71px]',
                'lg:flex',
                ' lg:flex-row',
                ' lg:relative',
                ' lg:top-0',
                {
                  flex: !!selected,
                  'flex-col': !!selected,
                },
              ])}
            >
              {listLink.map((item, index) => {
                return (
                  <li
                    className={classMerge([
                      'py-3',
                      'px-6 ',
                      {
                        'border-b': index === 0,
                        'border-b-gray-300': index === 0,
                        'lg:border-0': index === 0,
                      },
                    ])}
                    key={item.label}
                  >
                    <NextLink
                      className={classMerge([
                        {
                          'lg:hidden': index === 1,
                        },
                        'text-sm',
                      ])}
                      href={item.path}
                    >
                      {item.label}
                    </NextLink>
                  </li>
                )
              })}
            </ul>
            {selected ? (
              <MdOutlineClose
                size={18}
                className="lg:hidden cursor-pointer"
                onClick={() => setSelected((old) => !old)}
              />
            ) : (
              <FaBars
                color="#949393"
                className="lg:hidden cursor-pointer"
                onClick={() => setSelected((old) => !old)}
              />
            )}
          </nav>
        </div>
      </header>
      <div className="bg-faq-bg bg-cover bg-center h-[300px] ">
        <div className="container flex items-center justify-center h-full">
          <div className="relative w-full lg:max-w-[600px]">
            {searchValue.length > 0 && (
              <FaTimes
                className="absolute top-1/3 right-4 !cursor-pointer"
                color="#a09f9f"
                onClick={handleClearClick}
              />
            )}
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pl-10 text-sm text-gray-500 rounded-3xl focus:ring-green-main"
              type="text"
            />
            <FaSearch className="absolute top-1/3 left-4" color="#a09f9f" />
          </div>
        </div>
      </div>
      <div className="container py-[60px]">
        <ul className="grid md:grid-cols-2 lg:grid-cols-12 gap-8">
          {faqList.map((item, index) => {
            return (
              <li
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100 + 400}
                className={classMerge([
                  'md:col-span-6',
                  'xl:col-span-4',
                  {
                    'md:!col-span-6':
                      index === faqList.length - 1 ||
                      index === faqList.length - 2,
                  },
                ])}
              >
                <CardFaq
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="container">
        <h2 className="font-bold text-2xl mb-4">Artigos promovidos</h2>
        <div className="flex items-center flex-wrap gap-7">
          <div className="py-4 w-full lg:max-w-[350px] border-b border-b-gray-400">
            <NextLink className=" text-sm" href="#">
              Como faço para editar ou excluir um ativo da minha carteira?
            </NextLink>
          </div>
          <div className="py-4 w-full lg:max-w-[320px] border-b border-b-gray-300">
            <NextLink className=" text-sm" href="#">
              Como consultar as maiores quedas e altas da bolsa?
            </NextLink>
          </div>
        </div>
        <div className="mt-16 mb-24 h-[1px] bg-gray-300" />
      </div>
      <footer className="border-t pt-9 pb-14 border-t-gray-400">
        <div className="container">
          <a className="text-sm text-gray-500" href="#">
            TradeMap
          </a>
        </div>
      </footer>
    </section>
  )
}
