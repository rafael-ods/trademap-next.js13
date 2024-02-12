import CardTalkAbout from '@/component/CardTalkAbout'
import CarrouselTalkAbout from '@/component/CarrouselTalkAbout'

export default function TalkAbout() {
  const infoCards = [
    {
      id: 0,
      description:
        'Aplicativo bem intuitivo, interface extremamente amigável e sem bugs. PERFEITO. Parabéns a equipe de desenvolvedores/programadores.',
      assessment: 5,
      nameUser: 'Pedro Nascimento',
    },
    {
      id: 1,
      description: ' Ótimo! Facilita muito ver os investimentos por aqui.',
      assessment: 5,
      nameUser: 'Rafaela Borges',
    },
    {
      id: 2,
      description:
        'O APP está melhor ainda, fácil de entender e operar. Parabéns!!!',
      assessment: 5,
      nameUser: 'Gabriel Rocha junior',
    },
    {
      id: 3,
      description:
        'Fácil manuseio, informações claras, rápidas e boa performance do mercado!',
      assessment: 5,
      nameUser: 'Viviane Araújo silva',
    },
    {
      id: 4,
      description:
        'Melhor aplicativo para acompanhar as movimentações da Bolsa de valores!',
      assessment: 5,
      nameUser: 'Bruno Silva',
    },
    {
      id: 5,
      description:
        'Melhor aplicativo para acompanhar as movimentações da Bolsa de valores!',
      assessment: 5,
      nameUser: 'Vanessa Lopes',
    },
    {
      id: 6,
      description:
        'Aplicativo bem intuitivo, interface extremamente amigável e sem bugs. PERFEITO. Parabéns a equipe de desenvolvedores/programadores.',
      assessment: 5,
      nameUser: 'Thiago Oliveira',
    },
    {
      id: 7,
      description:
        'O APP está melhor ainda, fácil de entender e operar. Parabéns!!!',
      assessment: 5,
      nameUser: 'Lucas Silva',
    },
  ]

  return (
    <section className="pb-11 text-center container">
      <div className=" border-t-[1px] py-8 lg:py-11  lg:max-w-[800px]  mx-auto border-opacity-60 border-gray-main " />
      <h4
        data-aos="fade-up"
        className="heading-primary text-gray-main mb-11 normal-case "
      >
        O que as pessoas falam de nós
      </h4>
      <div>
        <CarrouselTalkAbout>
          {infoCards.map((item, index) => {
            return (
              <ul key={item.id}>
                <li data-aos="fade-up" data-aos-delay={(index + 1) * 100 + 400}>
                  <CardTalkAbout
                    description={item.description}
                    stars={item.assessment}
                    nameUser={item.nameUser}
                  />
                </li>
              </ul>
            )
          })}
        </CarrouselTalkAbout>
      </div>
    </section>
  )
}
