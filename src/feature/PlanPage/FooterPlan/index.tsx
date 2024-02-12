import classMerge from '@/lib/utils/classMerge'
import { FaRegStarHalfStroke, FaStar } from 'react-icons/fa6'
import NextLink from 'next/link'

/* eslint-disable @next/next/no-img-element */
export default function FooterPlan() {
  return (
    <footer className="bg-footer-plan-bg bg-cover sm:bg-center">
      <div className=" bg-gray-main py-12 lg:py-16 bg-opacity-80 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-7 text-center">
          <p className="text-white font-extralight text-2xl">TradeMap</p>
          <div>
            <h2 className="heading-primary">
              Tudo que você precisa <br />
              <strong className="text-white-main-light">em um só lugar!</strong>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-14 sm:gap-16">
            <div className="text-white text-center space-y-2">
              <p className="font-bold text-5xl">+3M</p>
              <p className="font-thin sm:text-[11px]">Downloads ativos</p>
            </div>
            <div className="hidden sm:flex flex-col items-center gap-4">
              <img
                alt="qr code"
                className="w-[130px] h-auto"
                src="/assets/plan/footer-plan/footer-qr-code-plan.png"
              />
              <p className="text-base heading-secondary font-thin">
                Aponte sua câmera <br />e baixe grátis!
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white font-bold text-5xl mb-3">4.7</p>
              <span className="flex gap-1">
                <FaStar color="#FCB814" size={20} />
                <FaStar color="#FCB814" size={20} />
                <FaStar color="#FCB814" size={20} />
                <FaStar color="#FCB814" size={20} />
                <FaRegStarHalfStroke color="#FCB814" size={20} />
              </span>
              <p className="font-thin sm:text-[11px] text-white">
                Classificação dada pelos <br className="hidden sm:block" />{' '}
                usuários
              </p>
            </div>
          </div>
          <NextLink
            href="#"
            data-aos="fade-up"
            className={classMerge([
              'mt-6',
              'w-fit',
              'py-3',
              'px-12',
              'text-sm',
              'uppercase ',
              'font-bold ',
              'rounded-lg ',
              'text-white',
              'transition-colors',
              'duration-300',
              'bg-btn-gradient-plan-pro',
              'hover:bg-btn-gradient-plan-pro-hover',
              'shadow-green-main-boxShadow',
            ])}
          >
            Começar Grátis
          </NextLink>
        </div>
      </div>
      <div className="bg-gray-main">
        <div className="container py-2">
          <p className="text-[#F7F4EA] text-[10px] sm:text-sm">
            *O valor corresponde a assinatura anual paga integralmente no
            momento da compra.
          </p>
        </div>
      </div>
    </footer>
  )
}
