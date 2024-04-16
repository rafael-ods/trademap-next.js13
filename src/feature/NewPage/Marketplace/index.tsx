import CardNewsMain from '@/component/CardNewsMain'
import LabelLink from '@/component/LabelLink'
import React from 'react'

const listNews = [
  {
    link: '/',
    description: '5 de março de 2024',
    src: '/assets/new-page/carrousel-news/card-b3.webp',
    title: 'Destaques da temporada de balanços EUA',
  },
  {
    link: '/',
    description: '15 de fevereiro de 2024',
    src: '/assets/new-page/carrousel-news/card-numeric.webp',
    title:
      'O que esperar dos mercados após os resultados das atas do Copom e FOMC',
  },
  {
    link: '/',
    description: '3 de novembro de 2023',
    src: '/assets/new-page/carrousel-news/card-trade.webp',
    title: 'Papéis da Petrobras lideram as baixas do dia e derruba Ibovespa',
  },
  {
    link: '/',
    description: '26 de fevereiro de 2024',
    src: '/assets/new-page/carrousel-news/card-b3.webp',
    title:
      'Ibovespa fecha em leve queda; Destaque para Vale (VALE3) e B3 (B3AS3)',
  },
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
  {
    link: '/',
    description: '26 de fevereiro de 2024',
    src: '/assets/new-page/carrousel-news/card-b3.webp',
    title:
      'Ibovespa fecha em leve queda; Destaque para Vale (VALE3) e B3 (B3AS3)',
  },
]

export default function Marketplace() {
  return (
    <section className="container py-16">
      <div className="relative border-b-2 border-b-green-main pb-3">
        <h4 className="subtitle text-2xl uppercase">Mercados </h4>
        <div className="absolute w-full -bottom-1 max-w-[300px] h-[4px] bg-[#01E59B]" />
      </div>
      <LabelLink label="Todas de Mercados" href="/" position="end" />

      <ul className="pt-6 grid md:grid-cols-12 gap-y-10">
        {listNews.map((item, index) => {
          return (
            <li
              className="md:col-span-3"
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100 + 500}
            >
              <CardNewsMain {...item} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
