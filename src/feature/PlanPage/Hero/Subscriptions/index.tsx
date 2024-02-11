import CardPlans from '@/component/CardPlans'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'

const cardPlanInfo = [
  {
    title: 'Gestão de Carteira',
    flag: false,
    prize: '29',
    cents: ',16',
    icons: [
      <FaRegCheckCircle key="icon-1" size={18} />,
      <FaRegCheckCircle key="icon-2" size={18} />,
      <FaRegCheckCircle key="icon-3" size={18} />,
      <FaRegCheckCircle key="icon-4" size={18} />,
      <FaRegCheckCircle key="icon-5" size={18} />,
      <FaRegCheckCircle key="icon-6" size={18} />,
      <FaRegCheckCircle key="icon-7" size={18} />,
    ],
    descriptions: [
      'Versão Mobile e Portal Web',
      ' Análises de custódia e preço-médio (com e sem ajuste)',
      'Detalhamento do seu extrato de operações',
      'Rentabilidade histórica da carteira, por ativo e por estratégia',
      'Análises evolutivas de patrimônio ',
      'Módulo de balanceamento de ativos e estratégias da carteira (mobile)',
      'Agenda futura dos seus proventos e eventos',
      'Ferramenta de imposto de renda (IR) mensal',
    ],
    path: '#',
    link: 'Assinar gestão de Carteiras',
    textAbout:
      'O essencial para declarar seu IR e acompanhar seus investimentos o ano todo!',
  },
  {
    title: 'TradeMap Explorer',
    flag: true,
    flagLabel: 'Popular',
    prize: '49',
    cents: ',99',
    icons: [
      <FaArrowRight key="icon-1" size={18} />,
      <FaRegCheckCircle key="icon-2" size={18} />,
      <FaRegCheckCircle key="icon-3" size={18} />,
      <FaRegCheckCircle key="icon-4" size={18} />,
      <FaRegCheckCircle key="icon-5" size={18} />,
      <FaRegCheckCircle key="icon-6" size={18} />,
      <FaRegCheckCircle key="icon-7" size={18} />,
    ],
    descriptions: [
      'Tudo das outras assinaturas e mais:',
      ' Módulo avançado de análise de ações e FIIs, com todos os indicadores e históricos desde 2010',
      'Recomendações de compra e venda de ações',
      'Gráfico TradingView (Web), criação de templates pessoais e 25+ de AT',
      'Prateleira e análises de fundos e renda fixa',
      'Cotação em tempo real (se conectar com corretora brasileira)',
      'Informações de empresas estrangeiras',
    ],
    path: '#',
    link: 'Assinar o explorer',
    textAbout:
      'Uma união de ferramentas e recomendações para você investir melhor',
  },
]

export default function Subscriptions() {
  const halfIndex = Math.ceil(cardPlanInfo.length / 2)
  const firstHalf = cardPlanInfo.slice(0, halfIndex)
  const secondHalf = cardPlanInfo.slice(halfIndex)
  return (
    <section id="conheca-nossos-planos" className="pt-12 pb-20 container">
      <h2
        data-aos="fade-up"
        className="heading-primary text-gray-main text-center mb-5"
      >
        Assinaturas TradeMap
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay={400}
        className="text-center text-2xl font-thin tracking-tight text-gray-600 mb-10"
      >
        Escolha a que mais combina com você e seus investimentos:
      </p>

      <div className="grid md:grid-cols-12 gap-5">
        <div className="md:col-span-6">
          <CardPlans cards={firstHalf} />
        </div>
        <div className="md:col-span-6">
          <CardPlans cards={secondHalf} />
        </div>
      </div>
    </section>
  )
}
