/* eslint-disable @next/next/no-img-element */
'use client'
export default function HomeBroken() {
  const listBroken = [
    {
      id: 0,
      src: '/assets/home-broken/agora.png',
      atl: 'corretora agora',
    },
    {
      id: 1,
      src: '/assets/home-broken/xp.png',
      atl: 'corretora xp',
    },
    {
      id: 2,
      src: '/assets/home-broken/guide.png',
      atl: 'corretora guide',
    },
    {
      id: 3,
      src: '/assets/home-broken/mercado-bitcoin.png',
      atl: 'corretora mercado-bitcoin',
    },
    {
      id: 4,
      src: '/assets/home-broken/btg-pactual.png',
      atl: 'corretora btg-pactual',
    },
    {
      id: 5,
      src: '/assets/home-broken/orama.png',
      atl: 'corretora orama',
    },
    {
      id: 6,
      src: '/assets/home-broken/terra.png',
      atl: 'corretora terra',
    },
    {
      id: 7,
      src: '/assets/home-broken/nova-dax.png',
      atl: 'corretora nova-dax',
    },
    {
      id: 8,
      src: '/assets/home-broken/biscoin.png',
      atl: 'corretora biscoin',
    },
    {
      id: 9,
      src: '/assets/home-broken/bitcoin-to-you.png',
      atl: 'corretora bitcoin-to-you',
    },
    {
      id: 10,
      src: '/assets/home-broken/nova.png',
      atl: 'corretora nova',
    },
    {
      id: 11,
      src: '/assets/home-broken/warren.png',
      atl: 'corretora warren.png',
    },
    {
      id: 12,
      src: '/assets/home-broken/coinext.png',
      atl: 'corretora coinext.png',
    },
    {
      id: 13,
      src: '/assets/home-broken/binances.png',
      atl: 'corretora binances.png',
    },
    {
      id: 14,
      src: '/assets/home-broken/my-cap.png',
      atl: 'corretora my-cap.png',
    },
    {
      id: 15,
      src: '/assets/home-broken/foxbit.png',
      atl: 'corretora foxbit.png',
    },
    {
      id: 16,
      src: '/assets/home-broken/liqi.png',
      atl: 'corretora liqi.png',
    },
    {
      id: 17,
      src: '/assets/home-broken/microsot.png',
      atl: 'corretora microsot.png',
    },
  ]
  return (
    <section className="container" data-aos="fade-up">
      <div className="bg-gray-main flex flex-col gap-7 md:text-center py-6 px-6 md:py-14 md:px-11 rounded-lg">
        <h1 className="heading-tertiary ">Negocie seus ativos num único APP</h1>
        <p className="paragraph text-gray-main-icon md:text-2xl">
          Com o Multibroker, você negocia criptomoedas, ações na B3 e no mercado
          americano <br /> diretamente pelo TradeMap.
        </p>
        <p className="paragraph uppercase text-gray-main-icon text-xs md:text-base">
          Corretoras parceiras:
        </p>
        <ul className="flex items-center flex-wrap gap-y-1  lg:gap-[20px]">
          {listBroken.map((item) => {
            return (
              <li key={item.id} className="p-[10px] lg:p-[20px]">
                <img
                  className="w-[87px] xl:w-[175px] h-auto"
                  src={item.src}
                  alt={item.atl}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
