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
import SuperaEnemImg from '/public/assets/img/superaenem.png'

import PEISImg from '/public/assets/img/PEIS.png'
import TelaBrasilImg from '/public/assets/img/telabrasil.jpeg'

export const projects = [
  {
    title: 'Supera Enem',
    subtitle: 'Autoral | Trabalho de Conclusão de Curso (TCC)',
    description:
      'Plataforma autoral desenvolvida como TCC, o Supera Enem utiliza inteligência artificial para oferecer uma preparação personalizada para o ENEM. Liderei o desacoplamento do portal do usuário em um micro-frontend com Next.js, garantindo modularidade, escalabilidade e alta performance. A plataforma inclui planejamento semanal inteligente, simulados diários, análise de desempenho e criação de resumos e flashcards personalizados.',
    technologies: ['Next.js', 'Docker', 'Spring Boot', 'Keycloak', 'MinIO', 'RabbitMQ'],
    link: 'https://www.superaenem.com.br/',
    img: [SuperaEnemImg],
  },
  {
    title: 'Pé de Meia',
    subtitle: 'UFAL/MEC',
    description:
      'Neste projeto de grande impacto nacional o principal desafio foi garantir alta performance para lidar com grandes volumes de dados. Por isso, encabecei o desacomplamento das páginas/funcionalidades referentes ao portal do usuário para um micro-frontend Next.js. Trazendo escalabilidade e performace de maneira modular.',
    technologies: ['Next.js', 'ChakraUi', 'Docker', 'react-query', 'micro-frontend'],
    link: 'https://gestaopresente.mec.gov.br/',
    img: [PDMImg],
  },
  {
    title: 'Novate8 Landing Page',
    subtitle: 'Novate8',
    description:
      'Fui responsável pela recriação da landing page institucional da Novate8, com foco em um visual mais moderno, sofisticado e comercialmente atrativo. A nova versão foi desenvolvida com técnicas avançadas de SEO, incluindo meta tags, robots.txt, sitemap.xml e integração com o Google Search Console, ampliando significativamente o alcance digital da marca. Também configurei o Google Analytics para monitoramento de tráfego e análise de métricas de desempenho.',
    technologies: ['Next.js', 'Scss', 'Google Analytics', 'SEO', 'Motion Framer'],
    link: 'https://www.novate8.com.br',
    img: [NovateLandingImg],
  },
  {
    title: 'OrçaPharma',
    subtitle: 'Novate8',
    description:
      'No Orçapharma, um serviço de multi-atendimento para redes de farmácias, desenvolvi um micro-frontend em Next.js para comunicação em tempo real via Websocket com o WhatsApp. Este micro-serviço otimizou a gestão de atendimento e facilitou a criação de canais de vendas integrados entre sistemas web e aplicativos de mensagens.',
    technologies: ['Next.js', 'Django', 'Scss', 'Websocket', 'Styled-Components'],
    link: 'https://orcapharma.com.br/',
    img: [OrcapharmaImg, Orcapharma2Img],
  },
  {
    title: 'Tela Brasil',
    subtitle: 'UFAL/MINC',
    description:
      'Liderei o desenvolvimento mobile do Tela Brasil, o streaming público do Ministério da Cultura. Fui responsável por criar um player customizado com funções como legendas, ajustes de velocidade e qualidade de reprodução. Também desenvolvi recursos offline, incluindo download de filmes e séries para visualização sem conexão, garantindo acessibilidade em qualquer lugar.',
    technologies: ['React-Native', 'Expo'],
    link: 'https://telabrasil-dev.nees.ufal.br/',
    img: [TelaBrasilImg],
  },
  {
    title: 'Rede de Inovação para a Educação Híbrida',
    subtitle: 'UFAL/MEC',
    description:
      'A Rede de Inovação para a Educação Híbrida (RIEH) é uma iniciativa do Ministério da Educação que apoia a implementação da Educação Híbrida na rede pública, garantindo infraestrutura e suporte técnico para promover um ensino mais equitativo e eficaz. Lá pude trabalhar em vários módulos, como: Aplicativo, Portal, Repositório e Observatório. ',
    technologies: ['Next.js', 'React-Native', 'Styled-Components', 'Docker'],
    link: 'https://rieh.nees.ufal.br/',
    img: [PortalImg, RepositorioImg, ObservatorioImg],
  },

  {
    title: 'Pechinchou',
    subtitle: 'Pechinchou',
    description:
      'O Pechinchou, uma das maiores redes de promoções, foi minha primeira experiência profissional. Em 2021, participei da reconstrução do site e do aplicativo, liderando a migração tecnológica para Next.js (Frontend) e React Native (Mobile), o que modernizou a plataforma, melhorou a performance, passando de centenas para milhares de usuários simultaneamente.',
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
    title: 'Sistema de PEIs',
    subtitle: 'IFRN',
    description:
      'O Sistema de Gerenciamento de Planos Educacionais Individualizados (PEIs) foi meu projeto integrador no terceiro semestre da faculdade e meu primeiro sistema fullstack. Atualmente em uso no IFRN - Campus Pau dos Ferros, o sistema tem como objetivo simplificar e aprimorar o acompanhamento de alunos com necessidades especiais, oferecendo uma solução prática e eficiente para atender às demandas pedagógicas do campus. ',
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
    title: 'MCM Website',
    subtitle: 'MCM',
    description:
      'A MCM, é uma fabricante de conversores e nobreaks de energia no Polo Industrial Vale da Eletrônica. Especializada em produtos de alta performance, atende setores como segurança, telecomunicações, informática e automação. Seu site oferece calculadoras, listas e manuais de seus produtos, entre outras funcionalidades para os clientes.',
    technologies: ['Wagtail', 'Python', 'HTML/CSS', 'JavaScript', 'Postgrees'],
    link: 'https://mcmfontesenobreaks.ind.br',
    img: [MCMImg],
  },
]

export const highLightProjects = [
  projects[0],
  projects[1],
  projects[4],
  projects[6],
]
