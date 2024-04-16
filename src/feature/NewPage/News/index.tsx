/* eslint-disable @next/next/no-img-element */
'use client'
import CardNewsMain from '@/component/CardNewsMain'
import CarrouselNewsPage from '@/component/CarrouselNewsPage'

const listNews = [
  {
    link: '/',
    description: '26 de fevereiro de 2024',
    src: '/assets/new-page/carrousel-news/card-b3.webp',
    title: 'Ibovespa fecha com leve alta, destaque para setor frigorífico',
  },
  {
    link: '/',
    description: '26 de fevereiro de 2024',
    src: '/assets/new-page/carrousel-news/card-numeric.webp',
    title:
      'Ibovespa opera em leve alta, à espera de dados da economia doméstica e internacional',
  },
  {
    link: '/',
    description: '26 de fevereiro de 2024',
    src: '/assets/new-page/carrousel-news/card-trade.webp',
    title:
      'Ibov dando vexame, gringo pedindo refund e... o que é que tá acontecendo com a NVIDIA?',
  },
  {
    link: '/',
    description: '26 de fevereiro de 2024',
    src: '/assets/new-page/carrousel-news/card-b3.webp',
    title:
      'Ibovespa fecha em leve queda; Destaque para Vale (VALE3) e B3 (B3AS3)',
  },
]

export default function News() {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-14">
        <div data-aos="fade-up" className="md:col-span-6">
          <CarrouselNewsPage>
            <div>
              <img
                className="h-full rounded-xl w-full"
                src="/assets/new-page/carrousel-news/card-numeric.webp"
                alt=""
              />
              <h6 className="mt-6 text-2xl font-bold">
                Ibovespa opera em alta, com Relatório Focus e prévia da inflação
                no Brasil
              </h6>
            </div>
            <div>
              <img
                className="h-full rounded-xl w-full"
                src="/assets/new-page/carrousel-news/card-b3.webp"
                alt=""
              />
              <h6 className="mt-6 text-2xl font-bold">
                Ibovespa opera em alta, com Relatório Focus e prévia da inflação
                no Brasil
              </h6>
            </div>
          </CarrouselNewsPage>
        </div>
        <div className="md:col-span-6">
          <ul className="grid md:grid-cols-2 gap-5">
            {listNews.map((item, index) => {
              return (
                <li
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100 + 500}
                  key={item.title}
                >
                  <CardNewsMain {...item} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
