/* eslint-disable @next/next/no-img-element */
'use client'

import ButtonSocial from '@/component/ButtonSocial'
import classMerge from '@/lib/utils/classMerge'

export default function Hero() {
  return (
    <section className="bg-gray-main pt-20">
      <div
        className={classMerge([
          'grid',
          'container',
          'md:grid-cols-12',
          'text-white-main',
        ])}
      >
        <div className="md:col-span-6 flex flex-col gap-6">
          <img
            data-aos="fade-up"
            className="w-[55px] h-auto"
            src="/assets/hero/logo-trademap-clean.png"
            alt="logo trademap"
          />
          <h1
            data-aos="fade-up"
            data-aos-delay={400}
            className="heading-primary w-full lg:max-w-[600px]"
          >
            Seus investimentos na melhor direção.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay={500}
            className="text-[17px] md:text-2xl font-thin text-white-main  w-full lg:max-w-[590px] "
          >
            <strong className="font-bold">Já são mais de 3 milhões</strong> de{' '}
            <br className="md:hidden" /> investidores que usam{' '}
            <br className="hidden md:hidden" /> o
            <strong className="font-bold pl-1">TradeMap</strong> para gerenciar
            todo investimento por um só lugar
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay={600}
            className="text-[18px] md:text-2xl"
          >
            <strong className="font-bold">Não fique de fora dessa</strong>
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay={700}
            className="flex flex-col gap-3 pb-20"
          >
            <ButtonSocial
              src="/assets/hero/btn-google.png"
              alt="google"
              href="#"
            />
            <ButtonSocial
              src="/assets/hero/btn-apple.png"
              alt="apple"
              href="#"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={700}
          className="md:col-span-6 flex justify-center items-end relative"
        >
          <img
            className="w-[328px] md:w-auto"
            src="/assets/hero/cel-trademap.png"
            alt="cell"
          />
          <img
            className="hidden absolute bottom-20 left-0 bg-white-main p-1 xl:block"
            src="/assets/hero/qr-code.png.png"
            alt="qr code"
          />
        </div>
      </div>
    </section>
  )
}
