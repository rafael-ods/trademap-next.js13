/* eslint-disable @next/next/no-img-element */
'use client'

import ButtonSocial from '@/component/ButtonSocial'

export default function CtaInformationUsers() {
  return (
    <section className="py-11">
      <div className="container grid md:grid-cols-12">
        <div className="flex flex-col justify-center md:col-span-6">
          <h3
            data-aos="fade-up"
            className="heading-tertiary text-[#01E59B] mb-3"
          >
            +3 Milhões de Usuários.
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay={400}
            className="paragraph text-[18px]"
          >
            Somos o App de finanças mais popular entre os investidores
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay={500}
            className="flex gap-3 py-16 mx-auto md:m-0"
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
        <div className="md:col-span-6">
          <img
            data-aos="fade-up"
            data-aos-delay={600}
            src="/assets/cta-information-users/pessoas-usando-o-tradeMap.png"
            alt="pessoas usando o tradeMap"
          />
        </div>
      </div>
    </section>
  )
}
