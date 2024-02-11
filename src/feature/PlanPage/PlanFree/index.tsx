/* eslint-disable @next/next/no-img-element */
import ButtonSocial from '@/component/ButtonSocial'
import classMerge from '@/lib/utils/classMerge'
import NextLink from 'next/link'
import { ImArrowUpRight2 } from 'react-icons/im'

export default function PlanFree() {
  const listMechanic = [
    {
      id: 0,
      alt: 'icon',
      src: '/assets/plan/plan-free/grafico.svg',
      description: 'Envio de ordens em corretoras nacionais e de cripto',
    },
    {
      id: 1,
      alt: 'icon',
      src: '/assets/plan/plan-free/celular.svg',
      description:
        'Envio e acompanhamento de ordens pelo multibroker do TradeMap',
    },
    {
      id: 2,
      alt: 'icon',
      src: '/assets/plan/plan-free/profile.svg',
      description: 'Participe de comunidades exclusivas de investidores​',
    },
    {
      id: 3,
      alt: 'icon',
      src: '/assets/plan/plan-free/grafico-pizza.svg',
      description:
        'Hub educacional com cursos gratuitos e relatórios de especialistas do mercado',
    },
  ]
  return (
    <section>
      <div className="container grid lg:grid-cols-12 min-h-screen py-6 lg:py-0 gap-8">
        <div className="lg:col-span-6 flex flex-col justify-center gap-4">
          <p
            data-aos="fade-up"
            className=" text-2xl text-center sm:text-start lg:font-normal"
          >
            Plano Free.
          </p>
          <h4
            data-aos="fade-up"
            data-aos-delay={400}
            className="heading-primary text-gray-main lowercase"
          >
            São inúmeras ferramentas e conteúdos
            <strong className="heading-primary"> GRATUITOS.</strong>
          </h4>
          <p
            data-aos="fade-up"
            data-aos-delay={500}
            className="paragraph text-xl font-thin text-center lg:text-start"
          >
            Gerencie seus investimentos e opere de forma rápida, fácil e segura!
          </p>

          <ul className="grid grid-cols-2 gap-4">
            {listMechanic.map((item, index) => {
              return (
                <li
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100 + 600}
                  key={item.id}
                  className={classMerge([
                    'flex ',
                    'flex-col',
                    'lg:flex-row',
                    'items-center ',
                    'gap-3',
                  ])}
                >
                  <img
                    className="bg-gray-200 rounded-lg p-2"
                    src={item.src}
                    alt={item.alt}
                  />
                  <h6 className="paragraph text-sm  text-center lg:text-start">
                    {item.description}
                  </h6>
                </li>
              )
            })}
          </ul>
          <NextLink
            data-aos="fade-up"
            data-aos-delay={1300}
            href="#"
            className={classMerge([
              'mt-6',
              'mx-auto',
              'lg:mx-0',
              'w-fit',
              'py-3',
              'px-12',
              'text-sm',
              'uppercase ',
              'font-bold ',
              'rounded-lg ',
              'text-center',
              'transition-colors',
              'duration-300',
              'hover:text-white',
              'bg-btn-gradient-plan-pro',
              'hover:bg-btn-gradient-plan-pro-hover',
              'shadow-green-main-boxShadow',
            ])}
          >
            Cadastre-se Grátis
          </NextLink>
        </div>
        <div className="lg:col-span-6 flex flex-col justify-center items-center relative">
          <img
            data-aos="fade-left"
            alt="celular trademap"
            className="w-[212px] h-auto self-end"
            src="/assets/plan/plan-free/celular-plan-free.png"
          />
          <img
            data-aos="fade-right"
            alt="qr code"
            src="/assets/plan/plan-free/qr-code.png"
            className="w-[118px] h-auto absolute shadow-2xl hidden sm:block"
          />
          <div>
            <p className="absolute left-20 bottom-[33%] uppercase font-semibold text-right text-xs leading-4 hidden sm:block">
              Aponte sua câmera <br /> e baixe grátis
              <ImArrowUpRight2
                size={18}
                className="absolute -top-5 -right-5 font-bold"
              />
            </p>
            {/* mobile */}
            <div className="absolute top-1/3  left-14 flex flex-col gap-1 sm:hidden">
              <p className="font-bold">Baixe grátis:</p>
              <ButtonSocial
                href="#"
                alt="icon apple"
                src="/assets/plan/plan-free/btn-apple.png"
              />
              <ButtonSocial
                href="#"
                alt="icon google"
                src="/assets/plan/plan-free/btn-google.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
