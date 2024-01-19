/* eslint-disable @next/next/no-img-element */
'use client'
import CarrouselTrademap from '@/component/CarrouselTrademap'
import classMerge from '@/lib/utils/classMerge'

export default function CtaTrademapCarrousel() {
  const carrousel = [
    {
      id: 0,
      src: '/assets/cta-trademap-carrousel/trade-chat.png',
      atl: 'imagem chat',
      title: 'Sua nova rede social',
      paragraph:
        'Converse com outros investidores e troque experiências de investimento no TradeMap Ideias – ou chame seus amigos por chat privado no nosso TradeChat.',
    },
    {
      id: 1,
      src: '/assets/cta-trademap-carrousel/educa.png',
      atl: 'imagem EducaMap',
      title: 'EducaMap',
      paragraph:
        'Aprenda conteúdos do mercado com o braço de educação financeira do TradeMap.​',
    },
    {
      id: 2,
      src: '/assets/cta-trademap-carrousel/Liga.png',
      atl: 'imagem liga',
      title: 'Investir pode ser divertido',
      paragraph:
        'Aprenda conteúdos do mercado com o braço de educação financeira do TradeMap.​',
    },
  ]

  return (
    <section className="pt-4 pb-12">
      <div className="container lg:grid md:grid-cols-12 gap-20">
        <div className="md:col-span-4 flex items-center">
          <h3 data-aos="fade-up" className="subtitle text-2xl mb-8">
            Ferramentas exclusivas <br className="hidden sm:flex" /> para você
            investir <br className="hidden sm:flex" />
            melhor!
          </h3>
        </div>
        <div className="md:col-span-8">
          <CarrouselTrademap>
            {carrousel.map((item, index) => {
              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100 + 500}
                  className={classMerge([
                    'group',
                    'relative',
                    'w-full',
                    'cursor-pointer',
                  ])}
                >
                  <img
                    className="w-[315px] h-auto "
                    src={item.src}
                    alt={item.atl}
                  />
                  <div
                    className={classMerge([
                      'absolute',
                      'z-10',
                      'top-0',
                      'p-6',
                      'bg-opacity-70',
                      'bg-black',
                      'h-full',
                      'invisible',
                      'text-right',
                      'flex',
                      'flex-col',
                      'items-center',
                      'justify-between',
                      'group-hover:visible',
                    ])}
                  >
                    <h4
                      className={classMerge([
                        'pb-2',
                        'mt-8',
                        'w-full',
                        'border-b-4',
                        'text-[20px]',
                        'font-semibold',
                        'text-green-main',
                        'border-white',
                        'group-hover:mt-0',
                        'group-hover:ease-in',
                        'group-hover:duration-300',
                        'group-hover:transition-all',
                      ])}
                    >
                      {item.title}
                    </h4>
                    <p className="text-white-main text-[15px] font-light leading-[1.3em] mt-[300px] group-hover:mt-0 group-hover:transition-all group-hover:duration-[.5s] group-hover:ease-linear">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              )
            })}
          </CarrouselTrademap>
        </div>
      </div>
    </section>
  )
}
