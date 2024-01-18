/* eslint-disable @next/next/no-img-element */
'use client'

import CardNews from '@/component/CardNews'
import classMerge from '@/lib/utils/classMerge'
import Link from 'next/link'

export default function News() {
  const cardNews = [
    {
      id: 0,
      alt: 'home broker',
      label: 'Leia mais',
      link: '#',
      src: '/assets/news/homebroke.png',
      title: 'Ibovespa fecha em baixa, com dúvidas sobre a economia chinesa',
    },
    {
      id: 1,
      alt: 'B3',
      label: 'Leia mais',
      link: '#',
      src: '/assets/news/b3.png',
      title:
        'Ibovespa fecha em baixa, na esteira de Nova York, após fala de dirigente do Fed',
    },
    {
      id: 2,
      alt: 'B3',
      label: 'Leia mais',
      link: '#',
      src: '/assets/news/b3.png',
      title:
        'Ibovespa fecha em alta, em dia marcado por dados econômicos e volatilidade em Nova York',
    },
    {
      id: 4,
      label: 'Leia mais',
      link: '#',
      alt: 'toro wall street',
      src: '/assets/news/toro.png',
      title:
        'Ibovespa em 2023 e principais ações: Descubra os destaques e as decepções deste ano de recordes',
    },
  ]

  return (
    <section className="container mt-8 lg:mt-12 relative">
      <span className="w-[10px] h-[10px] bg-green-main rounded-full absolute top-20 -left-5 hidden xl:block" />
      <span className="w-[10px] h-[10px] bg-green-main rounded-full absolute top-[150px] -right-5 hidden xl:block" />
      <div
        className={classMerge([
          'border-t',
          'border-gray-300',
          'grid',
          'lg:grid-cols-12',
          'py-8',
          'lg:py-16',
          'gap-6',
          'lg:gap-0',
        ])}
      >
        <div className="lg:col-span-6 flex flex-col gap-5 w-full md:max-w-[430px] lg:pl-6">
          <img
            data-aos="fade-up"
            className="w-[262px] h-auto"
            src="/assets/news/trademap-logo-long.png"
            alt="logo trademap"
          />
          <p
            data-aos="fade-up"
            data-aos-delay={400}
            className="paragraph text-lg font-light"
          >
            Saiba tudo sobre sobre mercados, empresas, investimentos,
            macroeconomia e finanças pessoais.
          </p>
          <Link
            data-aos="fade-up"
            data-aos-delay={500}
            className="text-gray-main font-semibold hover:text-[#00E59B] hover:transition-colors hover:duration-300 hover:ease-out w-fit"
            href="#"
          >
            Ir para notícias ➝
          </Link>
        </div>
        <div className="lg:col-span-6">
          <div className="grid md:grid-cols-2 gap-3">
            {cardNews.map((item, index) => {
              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100 + 500}
                >
                  <CardNews
                    src={item.src}
                    alt={item.alt}
                    href={item.link}
                    title={item.title}
                    label={item.label}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
