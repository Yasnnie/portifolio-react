import type { StaticImageData } from 'next/image'
import ObservatorioImg from '/public/assets/img/ObservatorioRIEH.png'
import RepositorioImg from '/public/assets/img/RepositorioRIEH.png'
import PortalImg from '/public/assets/img/PortalRIEH.png'
import PechinchouImg from '/public/assets/img/Pechinchou.png'
import AppPechinchouImg from '/public/assets/img/AppPechinchou.png'
import OrcapharmaImg from '/public/assets/img/Orcapharma.png'
import Orcapharma2Img from '/public/assets/img/Orcapharma2.png'
import PDMImg from '/public/assets/img/PDM.png'
import MCMImg from '/public/assets/img/MCM.png'
import NovateLandingImg from '/public/assets/img/novatelanding.png'
import PEISImg from '/public/assets/img/PEIS.png'
import TelaBrasilImg from '/public/assets/img/telabrasil.jpeg'
import StudoFlowImg from '/public/assets/img/StudoFlow.png'
import OrcaPayImg from '/public/assets/img/OrcaPay.png'

export type LocalizedText = {
  pt: string
  en: string
}

export interface ProjectItem {
  title: LocalizedText
  subtitle: string
  description: LocalizedText
  technologies: string[]
  link: string
  img: StaticImageData[]
  /** Optional fallback for projects without screenshots: an animated Lottie tile. */
  lottie?: 'studoFlow' | 'orcaPay'
  featured?: boolean
}

export const projects: ProjectItem[] = [
  {
    title: { pt: 'Studo.Flow', en: 'Studo.Flow' },
    subtitle: 'SaaS autoral',
    description: {
      pt: 'Plataforma de estudos com inteligência artificial para estudantes. Você sobe aulas, PDFs e anotações, e o Studo.Flow transforma o material em flashcards, questionários, resumos, transcrições e audiobooks. A plataforma também reúne calendário, metas e Pomodoro, e conta com o Neuron, um assistente de IA que atende dentro do app e pelo WhatsApp. Criei e desenvolvo o produto.',
      en: 'An AI-powered study platform for students. You upload lectures, PDFs and notes, and Studo.Flow turns the material into flashcards, quizzes, summaries, transcripts and audiobooks. It also brings together a calendar, goals and a Pomodoro timer, plus Neuron, an AI assistant that works inside the app and on WhatsApp. I created and build the product.',
    },
    technologies: ['SaaS', 'IA', 'Spring Boot', 'PostgreSQL'],
    link: 'https://www.studoflow.com.br/',
    img: [StudoFlowImg],
    featured: true,
  },
  {
    title: { pt: 'OrçaPay', en: 'OrçaPay' },
    subtitle: 'Novate8',
    description: {
      pt: 'Gateway de pagamentos para negócios. Recebe por Pix e cartão, cobra por link de pagamento ou checkout e divide cada venda entre vários recebedores com o split automático. Tudo é acompanhado e conciliado em um só painel, pensado para marketplaces, franquias e SaaS.',
      en: 'A payment gateway for businesses. It accepts Pix and cards, charges through payment links or checkout, and splits each sale among multiple recipients automatically. Everything is tracked and reconciled in a single dashboard, built for marketplaces, franchises and SaaS.',
    },
    technologies: ['Next.js', 'Spring Boot', 'PostgreSQL'],
    link: 'https://orcapay.com.br/',
    img: [OrcaPayImg],
  },
  {
    title: { pt: 'OrçaPharma', en: 'OrçaPharma' },
    subtitle: 'Novate8',
    description: {
      pt: 'No Orçapharma, um serviço de multi-atendimento para redes de farmácias, desenvolvi um micro-front-end em Next.js para comunicação em tempo real via WebSocket com o WhatsApp. Este micro-serviço otimizou a gestão de atendimento e facilitou a criação de canais de vendas integrados entre sistemas web e aplicativos de mensagens.',
      en: 'At Orçapharma, a multi-service platform for pharmacy networks, I built a Next.js micro-frontend that enables real-time WhatsApp communication via WebSocket. This micro-service optimized customer support and helped align web systems with messaging channels for a unified sales flow.',
    },
    technologies: [
      'Next.js',
      'Django',
      'Scss',
      'Websocket',
      'Styled-Components',
      'Spring Boot',
      'PostgreSQL',
    ],
    link: 'https://orcapharma.com.br/',
    img: [OrcapharmaImg, Orcapharma2Img],
  },
  {
    title: { pt: 'Novate8 Landing Page', en: 'Novate8 Landing Page' },
    subtitle: 'Novate8',
    description: {
      pt: 'Fui responsável pela recriação da landing page institucional da Novate8, com foco em um visual mais moderno, sofisticado e comercialmente atrativo. A nova versão foi desenvolvida com técnicas avançadas de SEO, incluindo meta tags, robots.txt, sitemap.xml e integração com o Google Search Console, ampliando significativamente o alcance digital da marca. Também configurei o Google Analytics para monitoramento de tráfego e análise de métricas de desempenho.',
      en: 'I rebuilt Novate8’s institutional landing page with a more modern, sophisticated, and commercially appealing look. The new version follows advanced SEO techniques, including meta tags, robots.txt, sitemap.xml, and Google Search Console integration, expanding the brand’s digital reach. I also configured Google Analytics to monitor traffic and performance metrics.',
    },
    technologies: [
      'Next.js',
      'Scss',
      'Google Analytics',
      'SEO',
      'Motion Framer',
    ],
    link: 'https://www.novate8.com.br',
    img: [NovateLandingImg],
  },

  {
    title: { pt: 'Tela Brasil', en: 'Tela Brasil' },
    subtitle: 'UFAL/MINC',
    description: {
      pt: 'Liderei o desenvolvimento mobile do Tela Brasil, o streaming público do Ministério da Cultura, hoje no ar. Fui responsável por criar um player customizado com funções como legendas, ajustes de velocidade e qualidade de reprodução. Também desenvolvi recursos offline, incluindo download de filmes e séries para visualização sem conexão, garantindo acessibilidade em qualquer lugar.',
      en: 'I led the mobile development of Tela Brasil, the public streaming service from the Ministry of Culture, now live. I created a custom player with subtitles, playback speed controls, and quality switching, along with offline features such as downloads for films and series to keep the experience accessible anywhere.',
    },
    technologies: ['React-Native', 'Expo'],
    link: 'https://telabrasil.cultura.gov.br/',
    img: [TelaBrasilImg],
  },
  {
    title: {
      pt: 'Rede de Inovação para a Educação Híbrida',
      en: 'Hybrid Education Innovation Network',
    },
    subtitle: 'UFAL/MEC',
    description: {
      pt: 'A Rede de Inovação para a Educação Híbrida (RIEH) é uma iniciativa do Ministério da Educação que apoia a implementação da Educação Híbrida na rede pública, garantindo infraestrutura e suporte técnico para promover um ensino mais equitativo e eficaz. Lá pude trabalhar em vários módulos, como: Aplicativo, Portal, Repositório e Observatório.',
      en: 'The Hybrid Education Innovation Network (RIEH) is an initiative from the Ministry of Education that supports the implementation of blended learning in the public network, ensuring infrastructure and technical support to promote more equitable and effective education. I worked across multiple modules, including the mobile app, portal, repository, and observatory dashboards.',
    },
    technologies: ['Next.js', 'React-Native', 'Styled-Components', 'Docker'],
    link: 'https://rieh.nees.ufal.br/',
    img: [PortalImg, RepositorioImg, ObservatorioImg],
  },
  {
    title: { pt: 'Pechinchou', en: 'Pechinchou' },
    subtitle: 'Pechinchou',
    description: {
      pt: 'O Pechinchou, uma das maiores redes de promoções, foi minha primeira experiência profissional. Em 2021, participei da reconstrução do site e do aplicativo, liderando a migração tecnológica para Next.js (Frontend) e React Native (Mobile), o que modernizou a plataforma, melhorou a performance, passando de centenas para milhares de usuários simultâneos.',
      en: 'Pechinchou, one of Brazil’s largest promotional networks, was my first professional experience. In 2021, I contributed to rebuilding the site and the app, leading the technological migration to Next.js (web) and React Native (mobile), which modernized the platform and improved performance from hundreds to thousands of simultaneous users.',
    },
    technologies: [
      'Next.js',
      'Styled-Components',
      'React-Native',
      'Expo',
      'Firebase',
    ],
    link: 'https://pechinchou.com.br/',
    img: [PechinchouImg, AppPechinchouImg],
  },
  {
    title: { pt: 'Sistema de PEIs', en: 'PEIs Management System' },
    subtitle: 'IFRN',
    description: {
      pt: 'O Sistema de Gerenciamento de Planos Educacionais Individualizados (PEIs) foi meu projeto integrador no terceiro semestre da faculdade e meu primeiro sistema fullstack. Atualmente em uso no IFRN - Campus Pau dos Ferros, o sistema tem como objetivo simplificar e aprimorar o acompanhamento de alunos com necessidades especiais, oferecendo uma solução prática e eficiente para atender às demandas pedagógicas do campus.',
      en: 'The Individualized Educational Plans (PEIs) Management System was my integrator project in the third semester and my first fullstack system. Today it is used at IFRN - Campus Pau dos Ferros to simplify and improve the monitoring of students with special needs, offering a practical and efficient solution to address the campus pedagogical demands.',
    },
    technologies: [
      'Django',
      'Python',
      'HTML/CSS',
      'JavaScript',
      'Docker',
      'PostgreSQL',
    ],
    link: 'https://pei.nadic.ifrn.edu.br/',
    img: [PEISImg],
  },

  {
    title: { pt: 'MCM Website', en: 'MCM Website' },
    subtitle: 'MCM',
    description: {
      pt: 'A MCM é uma fabricante de conversores e nobreaks de energia no Polo Industrial Vale da Eletrônica. Especializada em produtos de alta performance, atende setores como segurança, telecomunicações, informática e automação. Seu site oferece calculadoras, listas e manuais de seus produtos, entre outras funcionalidades para os clientes.',
      en: 'MCM is a manufacturer of energy converters and UPS systems at the Polo Industrial Vale da Eletrônica. Specializing in high-performance products, it serves industries such as security, telecom, IT, and automation. The website provides calculators, product lists, and user manuals, among other features for customers.',
    },
    technologies: ['Wagtail', 'Python', 'HTML/CSS', 'JavaScript', 'Postgrees'],
    link: 'https://mcmfontesenobreaks.ind.br',
    img: [MCMImg],
  },
]

