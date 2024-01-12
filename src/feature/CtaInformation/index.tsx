'use client'

import CardInformationSteps from "@/component/CardInformationSteps"
import classMerge from "@/lib/utils/classMerge"

export default function CtaInformation() {

  const listInformationSteps = [
    {
      id: 0,
      src: '/assets/cta-information/grafico-icon.png',
      alt: 'icon grafico',
      title: 'Acompanhe o mercado brasileiro e internacional',
    },
    {
      id: 1,
      src: '/assets/cta-information/cel-icon.png',
      alt: 'icon cel',
      title: 'Conecte seu app com corretoras parceiras e envie ordens reais​',
    },
    {
      id: 2,
      src: '/assets/cta-information/grafico-pizza-icon.png',
      alt: 'icon grafico pizza',
      title: 'Consolide sua carteira de investimentos​',
    },
    {
      id: 3,
      src: '/assets/cta-information/user-icon.png',
      alt: 'icon user',
      title: 'Participe de comunidades exclusivas de investidores​',
    },

  ]

  return (
    <section className="container py-14 grid md:grid-cols-12 relative">
      <img
      className={classMerge([
        'absolute',
        'hidden ',
        'lg:block ',
        'opacity-[0.31] ',
        'w-[70px] ',
        'h-auto ',
        'right-[50px] ',
        'bottom-[250px]',
      ])}
        src="/assets/cta-information/elemento-2.png"
      />
        <span className={classMerge([
          'absolute ',
          'right-0',
          'top-[250px]',
          'h-2 ',
          'w-2 ',
          'bg-green-main ',
          'rounded-full',
        ])} />
        <div
        data-aos="fade-up"
        className="hidden md:block md:col-span-5 relative">
            <img className="absolute top-[100px] inset-0" src="/assets/cta-information/elemento.png" />
            <img className="ml-8 z-10" src="/assets/cta-information/cel-broken.png" />
        </div>
        <div className="md:col-span-7 flex flex-col justify-center">
         <h2
          data-aos="fade-up"
          data-aos-delay={400}
          className="heading-secondary text-[#01E59B] mb-10">
            Esteja sempre um passo
            à frente com as melhores ferramentas</h2>
            <ul className="grid md:grid-cols-2 gap-8">
              {listInformationSteps.map((item, index) => {
                return (
                  <li key={item.id} data-aos="fade-up" data-aos-delay={(index + 1) * 100 + 500}>
                    <CardInformationSteps
                    alt={item.alt}
                    src={item.src}
                    title={item.title}
                    />
                  </li>
                )
              })}
            </ul>
        </div>
    </section>
  )
}
