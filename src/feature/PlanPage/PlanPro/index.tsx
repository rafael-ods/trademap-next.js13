import classMerge from '@/lib/utils/classMerge'
import NextLink from 'next/link'

/* eslint-disable @next/next/no-img-element */

export default function PlanPro() {
  const listMechanic = [
    {
      id: 0,
      alt: 'icon',
      src: '/assets/plan/plan-pro/check.svg',
      description: 'Todas as ferramentas do TradeMap (mobile e web)',
    },
    {
      id: 1,
      alt: 'icon',
      src: '/assets/plan/plan-pro/check.svg',
      description:
        'Acesso ao RocketTrader, a plataforma avançada de negociação',
    },
    {
      id: 2,
      alt: 'icon',
      src: '/assets/plan/plan-pro/check.svg',
      description:
        'Tenha o AddIn completo, a ferramenta de análise profunda de ativos.',
    },
    {
      id: 3,
      alt: 'icon',
      src: '/assets/plan/plan-pro/check.svg',
      description: 'Módulo de Opções completo no TradeMap',
    },
  ]

  return (
    <section className="bg-white-main min-h-screen flex items-center justify-center pt-6 pb-11 lg:py-0">
      <div className=" grid lg:grid-cols-12 gap-6 lg:gap-12">
        <div className="lg:col-span-6 relative">
          <div
            className={classMerge([
              'block ',
              'top-1/2 ',
              'absolute ',
              'transform ',
              'h-[250px] ',
              'w-[250px] ',
              'lg:h-[500px] ',
              'lg:w-[500px] ',
              'rounded-full ',
              'bg-opacity-25 ',
              '-right-[150px] ',
              'lg:-right-[200px] ',
              '-translate-x-1/2 ',
              '-translate-y-1/2 ',
              ' bg-green-main  ',
            ])}
          />
          <img
            className="h-auto max-w-full"
            data-aos="fade-right"
            src="/assets/plan/plan-pro/mac-trade-map.png"
            alt="mac tela trademap"
          />
        </div>
        <div className="lg:col-span-6 flex flex-col justify-center w-full lg:max-w-[932px]  ">
          <div className="container flex flex-col gap-5">
            <p
              data-aos="fade-up"
              data-aos-delay={400}
              className="font-bold text-2xl lg:font-normal"
            >
              Plano Pro.
            </p>
            <h4
              data-aos="fade-up"
              data-aos-delay={500}
              className="heading-primary text-gray-main"
            >
              Tenha todas as <br /> ferramentas do TradeMap
              <strong className="heading-primary">
                {' '}
                <br /> à sua disposição.
              </strong>
            </h4>
            <p
              data-aos="fade-up"
              data-aos-delay={600}
              className="paragraph text-xl font-thin text-center lg:text-start"
            >
              Analise ativos com profundidade, faça a gestão da sua carteira,
              acompanhe todos os momentos do mercado para a melhor tomada de
              decisão.
            </p>

            <ul className="grid grid-cols-2 gap-4">
              {listMechanic.map((item, index) => {
                return (
                  <li
                    data-aos="fade-up"
                    data-aos-delay={(index + 1) * 100 + 800}
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
                    <h6 className="paragraph font-bold text-[14px] lg:text-base text-center lg:text-start">
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
                'lg:py-1',
                'px-16',
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
              Conhecer mais <br className="hidden lg:block" /> do pro
            </NextLink>
          </div>
        </div>
      </div>
    </section>
  )
}
