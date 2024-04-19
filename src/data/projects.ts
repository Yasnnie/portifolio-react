import ObservatorioImg from '/public/assets/img/ObservatorioRIEH.png'
import RepositorioImg from '/public/assets/img/RepositorioRIEH.png'
import PortalImg from '/public/assets/img/PortalRIEH.png'
import PechinchouImg from '/public/assets/img/Pechinchou.png'
import AppPechinchouImg from '/public/assets/img/AppPechinchou.png'
import AppRiehImg from '/public/assets/img/AppRieh.png'
import PEISImg from '/public/assets/img/PEIS.png'
import MCMImg from '/public/assets/img/MCM.png'

export const projects = [
  {
    title: 'Observatório RIEH',
    subtitle: 'UFAL/MEC',
    description:
      "Uma ferramenta de análise e monitoramento desenvolvida para acompanhar a implementação da Rede de Inovação para Educação Híbrida (RIEH) em todo o país. Permite coletar e analisar dados e estatísticas para avaliar o progresso da rede.",
    technologies: ['Next.js', 'Styled-Components', 'Microfrontend'],
    link:'https://rieh.mec.gov.br/observatorio',
    img: ObservatorioImg
  },
  {
    title: 'Repositório RIEH',
    subtitle: 'UFAL/MEC',
    description:
      "O Repositório da Rede de Inovação para Educação Híbrida é um sistema que disponibiliza uma variedade de Recursos Educacionais Digitais (REDs), incluindo vídeos, animações, imagens, áudios, textos e planos de aula para enriquecer a oferta de Educação Híbrida.",
    technologies: ['Next.js', 'Styled-Components', 'Microfrontend'],
    link:'https://rieh.mec.gov.br/repositorio',
    img: RepositorioImg
  },
  {
    title: 'Aplicativo do Repositório RIEH',
    subtitle: 'UFAL/MEC',
    description:
      `O aplicativo da Rede de Inovação para Educação Híbrida (RIEH) foi projetado para disponibilizar Recursos Educacionais Digitais (REDs) offline, adotando a abordagem "Offline First" para garantir acesso contínuo aos REDs, independentemente da conectividade.`,
    technologies: ['React-Native', 'Expo', 'IOS', 'Android'],
    link:'#',
    img: AppRiehImg
  },
  {
    title: 'Portal RIEH',
    subtitle: 'UFAL/MEC',
    description:
      "Uma plataforma online do Ministério da Educação (MEC) que reúne notícias, recursos e informações sobre a Rede de Inovação para Educação Híbrida (RIEH), oferecendo um ponto centralizado de acesso a atualizações sobre sua implementação.",
      technologies: [
        'Wagtail',
        'Python',
        'HTML',
        'CSS',
        'JavaScript',
        'Postgrees',
      ],
    link:'https://rieh.mec.gov.br/',
    img: PortalImg
  },
  {
    title: 'Pechinchou Frontend',
    subtitle: 'Pechinchou',
    description:
      "Pechinchou, a rede social das promoções, conecta usuários em busca das melhores ofertas, descontos e cupons de lojas virtuais. Com 8 anos de experiência no mercado digital, a plataforma oferece uma experiência de compra econômica e colaborativa.",
    technologies: ['Next.js', 'Styled-Components'],
    link:'https://pechinchou.com.br/',
    img: PechinchouImg
  },
  {
    title: 'Pechinchou App',
    subtitle: 'Pechinchou',
    description:
      "O aplicativo do Pechinchou destaca as melhores promoções das principais lojas, com uma funcionalidade exclusiva: a Lista de Desejo. Através de Push Notifications, os usuários recebem notificações em tempo real das promoções desejadas, garantindo que não percam nenhuma oferta.",
    technologies: ['React-Native', 'Expo', 'IOS', 'Android'],
    link:'https://pechinchou.com.br/aplicativo',
    img: AppPechinchouImg
  },
  {
    title: 'Sistema de PEIs',
    subtitle: 'IFRN',
    description:
      "O Sistema de Gerenciamento de Planos Educacionais Individualizados (PEIs), utilizado no IFRN - Campus Pau dos Ferros, simplifica e aprimora o acompanhamento de alunos com necessidades especiais. Centralizando o acesso aos PEIs, permite que a equipe pedagógica e os professores gerenciem eficientemente os planos de cada aluno.",
    technologies: [
      'Django',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'Postgrees',
    ],
    link:'https://pei.nadic.ifrn.edu.br/',
    img: PEISImg
  },
  // {
  //   title: 'Tricoa',
  //   subtitle: 'Thalocan',
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   technologies: ['Next.js', 'Styled-Components'],
  //   link:'https://thalocan.com/',
  //   img: ObservatorioImg
  // },
  {
    title: 'MCM Website',
    subtitle: 'MCM',
    description:
      "A MCM, é uma fabricante de conversores e nobreaks de energia no Polo Industrial Vale da Eletrônica. Especializada em produtos de alta performance, atende setores como segurança, telecomunicações, informática e automação. Seu site oferece calculadoras, listas e manuais de seus produtos, entre outras funcionalidades para os clientes.",
    technologies: [
      'Wagtail',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'Postgrees',
    ],
    link:'https://www.mcmfontesenobreaks.ind.br/pt-br/',
    img: MCMImg
  },
]

export const highLightProjects = [projects[0],projects[1], projects[4], projects[6]]
