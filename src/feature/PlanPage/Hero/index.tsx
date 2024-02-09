/* eslint-disable @next/next/no-img-element */
import LogoTradeMap from '@/component/LogoTradeMap'
import classMerge from '@/lib/utils/classMerge'
import NextLink from 'next/link'
import { FaArrowDown } from 'react-icons/fa6'

export default function HeroPlan() {
  return (
    <section className="bg-hero-plan bg-cover bg-top pt-7  lg:pt-28">
      <div className="container grid md:grid-cols-12 text-white">
        <div className="md:col-span-6 pb-7 lg:pb-40 max-w-[365px] md:max-w-none lg:pl-7">
          <div data-aos="fade-up">
            <LogoTradeMap
              href="#"
              classProps={'w-[135px] md:w-[156px] h-auto cursor-auto mb-[31px]'}
              src="/assets/plan/hero-plan/logo-trademap.svg"
            />
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay={400}
            className="text-white-main text-4xl font-semibold tracking-wider mb-3"
          >
            Tudo que um investidor precisa está aqui
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay={500}
            className="text-white-main text-base lg:text-2xl font-thin"
          >
            O TradeMap tem o plano certo para você conquistar seus objetivos
            financeiros.
          </p>
          <NextLink
            href="#conheca-nossos-planos"
            data-aos="fade-up"
            data-aos-delay={600}
            className={classMerge([
              'w-fit',
              'px-6',
              'py-3',
              'mt-7',
              'md:mt-20 ',
              'mx-auto',
              'md:mx-0',
              'flex ',
              'gap-4',
              'font-bold ',
              'uppercase ',
              'items-center ',
              'text-lg',
              'border-b',
              'border-b-green-main-hover',
              'md:py-2',
              'md:text-sm',
              'md:rounded-lg ',
              'md:text-gray-950 ',
              'md:bg-green-main',
              'md:transition-colors',
              'md:hover:text-white',
              'md:shadow-green-main-boxShadow ',
            ])}
          >
            <FaArrowDown />
            Conheça nossos planos
          </NextLink>
        </div>
        <div className="md:col-span-6 flex flex-col justify-end items-center">
          <img
            data-aos="fade-up"
            data-aos-delay={700}
            className="w-[329px] md:w-[470px] h-auto"
            src="/assets/plan/hero-plan/hand-cel-trademap.png"
            alt="Mào com celular"
          />
        </div>
      </div>
    </section>
  )
}
