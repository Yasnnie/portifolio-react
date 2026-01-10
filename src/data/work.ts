export type LocalizedText = {
  pt: string
  en: string
}

export interface ExperienceEntry {
  timer: LocalizedText
  title: LocalizedText
  texts: LocalizedText[]
  link: string
}

export const dataWork: ExperienceEntry[] = [
  {
    timer: { pt: '2025 - Presente', en: '2025 - Present' },
    title: {
      pt: 'Desenvolvedora Fullstack - Novate8',
      en: 'Fullstack Developer - Novate8',
    },
    texts: [
      {
        pt: 'Participei do desenvolvimento do sistema Orçõapharma, atuando principalmente nos módulos de leitura de receita com inteligência artificial, atendimentos via WhatsApp e na drogaria virtual. O módulo de leitura de receita foi desenvolvido em Django e utiliza IA para interpretar prescrições médicas automaticamente, reduzindo o tempo médio de resposta das farmácias para 2 minutos. Já os módulos de atendimento e drogaria virtual foram implementados em Next.js, com uso de SCSS Modules e WebSocket para comunicação em tempo real. A drogaria virtual foi reformulada com Styled Components e Next.js com getStaticPaths, permitindo personalização visual para cada farmácia (cores, logo e identidade), tornando o sistema mais escalável. Atualmente, a plataforma é utilizada por mais de 12 farmácias em todo o Brasil.',
        en: 'I participated in the development of the Orçõapharma system, working mainly on modules for AI-powered prescription reading, WhatsApp attendance, and the virtual pharmacy. The prescription reader, built with Django, uses AI to interpret medical prescriptions automatically, reducing the average pharmacy response time to two minutes. The attendance and virtual pharmacy modules were implemented with Next.js, SCSS Modules, and WebSocket for real-time communication. The virtual pharmacy was redesigned with Styled Components and Next.js getStaticPaths, allowing each pharmacy to customize colors, logos, and identity, which made the system more scalable. Today the platform is used by more than twelve pharmacies across Brazil.',
      },
      {
        pt: 'Também fui responsável pela recriação da landing page institucional da empresa, com foco em um visual mais moderno, sofisticado e comercialmente atrativo. A nova versão foi desenvolvida com técnicas de SEO, incluindo o uso de meta tags, robots.txt, sitemap.xml e integração com o Google Search Console, ampliando significativamente o alcance digital da marca Orçõapharma. Além disso, configurei e integrei ferramentas de análise como o Google Analytics, permitindo o monitoramento do tráfego e o acompanhamento de métricas de desempenho da página.',
        en: 'I also rebuilt the company’s institutional landing page, focusing on a more modern, sophisticated, and commercially attractive visual. The new version was developed with SEO techniques such as meta tags, robots.txt, sitemap.xml, and integration with Google Search Console, which significantly extended Orçõapharma’s digital reach. I also configured and integrated analytics tools like Google Analytics to monitor traffic and track performance metrics.',
      },
    ],
    link: 'https://www.novate8.com.br/',
  },
  {
    timer: { pt: '2022 - Presente', en: '2022 - Present' },
    title: {
      pt: 'Desenvolvedora Frontend e Mobile - NADIC',
      en: 'Frontend and Mobile Developer - NADIC',
    },
    texts: [
      {
        pt: 'Participei de projetos nacionais e internacionais de grande escala pelo NADIC, com foco em desenvolvimento Frontend e Mobile. Atuei em colaboração com o Ministério da Educação no programa Pé-de-Meia, um sistema voltado à gestão de incentivos financeiros para estudantes da rede pública. Fui responsável por liderar o desacoplamento do portal do usuário, promovendo maior escalabilidade, modularização e autonomia ao projeto. Também introduzi o uso do React Query para gerenciamento de cache, o que reduziu significativamente os tempos de carregamento de telas (de 30-40 segundos para menos de 10 segundos), otimizando a performance e aliviando a carga do backend frente a milhões de dados processados.',
        en: 'I participated in large national and international projects at NADIC, focusing on frontend and mobile development. I collaborated with the Ministry of Education on the Pé-de-Meia program, a system that manages financial incentives for public school students. I led the decoupling of the user portal, increasing scalability, modularization, and autonomy for the project. I also introduced React Query for cache management, which cut screen load times from 30-40 seconds to under 10 seconds, improving performance and reducing backend pressure across millions of data points.',
      },
      {
        pt: 'Fui também líder técnica no projeto RIEH (Rede de Instituições de Educação Híbrida), um sistema para gestão e disseminação de conteúdos educacionais. No módulo de Observatório, utilizei getStaticProps para gerar dashboards altamente performáticos. Atuei no desenvolvimento do repositório web e mobile, implementando players personalizados, categorização de conteúdos e a integração de login via gov.br usando OAuth2.',
        en: 'I also served as technical lead on the RIEH (Hybrid Education Innovation Network) project, a system for managing and sharing educational content. In the observatory module I used getStaticProps to generate highly performant dashboards. I worked on the repository web and mobile modules, implementing custom players, content categorization, and gov.br OAuth2 login.',
      },
      {
        pt: 'No projeto Tela Brasil, voltado para distribuição de conteúdos audiovisuais educacionais (filmes, séries e documentários), atuei como líder técnica mobile, desenvolvendo funcionalidades offline first, suporte a downloads de mídia e player de vídeo personalizado.',
        en: 'On the Tela Brasil project, focused on distributing audiovisual educational content (films, series, and documentaries), I acted as mobile technical lead, developing offline-first features, support for media downloads, and a custom video player.',
      },
      {
        pt: 'Além disso, participei de projetos como Thalocan, MCM Fontes e No Breaks — sendo que neste último fui responsável por todo o desenvolvimento do front-end da página de vendas da marca.',
        en: 'Additionally, I contributed to projects such as Thalocan, MCM Fontes, and No Breaks — where I was responsible for all of the frontend work on the brand’s sales page.',
      },
    ],
    link: 'https://nadic.ifrn.edu.br/',
  },
  {
    timer: { pt: '2021 - 2022', en: '2021 - 2022' },
    title: {
      pt: 'Desenvolvedora Frontend e Mobile - Pechinchou',
      en: 'Frontend and Mobile Developer - Pechinchou',
    },
    texts: [
      {
        pt: 'Liderei a equipe na migração do aplicativo mobile de Flutter para React Native, resultando em mais de 100 mil downloads em apenas um mês após o lançamento. No app, também fui responsável pela implementação de notificações inteligentes para listas de desejo, além de estruturar todo o fluxo de autenticação com OAuth2, integrando login via Google, Apple e Facebook.',
        en: 'I led the team migrating the mobile app from Flutter to React Native, resulting in more than 100,000 downloads within one month of launch. I also implemented smart notifications for wish lists and structured the entire OAuth2 authentication flow with Google, Apple, and Facebook login.',
      },
      {
        pt: 'No sistema web, participei da reconstrução completa do front-end utilizando Next.js e Styled-Components, aumentando a capacidade de tráfego do site para suportar mais de 3 mil acessos simultâneos. Implantamos o uso de getStaticPaths para as páginas de produto, reduzindo o tempo de carregamento da página principal. Também configurei o Google Analytics para análise de tráfego e comportamento de usuários.',
        en: 'On the web, I rebuilt the frontend with Next.js and Styled Components, increasing the site’s capacity to handle over 3,000 simultaneous users. We implemented getStaticPaths for product pages to reduce the home page load time. I also configured Google Analytics for traffic and behavioral analysis.',
      },
      {
        pt: 'Além disso, desenvolvemos uma ferramenta de geração automática de postagens para Instagram, que criava imagens otimizadas para stories com apenas um clique, facilitando o trabalho do time de social mídia.',
        en: 'I created an automated tool to generate Instagram posts, producing optimized story images with a single click and helping the social media team streamline their workflow.',
      },
    ],
    link: 'https://pechinchou.com.br/',
  },
  {
    timer: { pt: '2020 - 2021', en: '2020 - 2021' },
    title: {
      pt: 'Aprendiz - VVC Distribuidora de Bebidas Ltda.',
      en: 'Apprentice - VVC Distribuidora de Bebidas Ltda.',
    },
    texts: [
      {
        pt: 'Auxiliei no monitoramento e suporte da infraestrutura de rede da empresa, assegurando sua estabilidade e operação eficaz. Também desenvolvi uma aplicação desktop em C# para otimizar a distribuição de notas fiscais de pedidos, automatizando um processo manual e reduzindo o tempo gasto no setor de logística de minutos para segundos.',
        en: 'I assisted with monitoring and supporting the company’s network infrastructure to keep its operation stable. I also developed a C# desktop application to optimize the distribution of sales invoices, automating a manual process and reducing logistics time from minutes to seconds.',
      },
    ],
    link: 'https://vvcdistribuidora.com.br/',
  },
]

export const dataStudy = [
  {
    timer: { pt: '2022 - Presente', en: '2022 - Present' },
    title: {
      pt: 'Graduação em Análise e Desenvolvimento de Sistemas',
      en: "Bachelor's Degree in Systems Analysis and Development",
    },
    texts: [
      {
        pt: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte - Campus Pau dos Ferros',
        en: 'Federal Institute of Education, Science and Technology of Rio Grande do Norte - Pau dos Ferros Campus',
      },
    ],
    link: 'https://portal.ifrn.edu.br/cursos/superiores/graduacao/tecnologia-em-analise-e-desenvolvimento-de-sistemas/',
  },
  {
    timer: { pt: '2018 - 2022', en: '2018 - 2022' },
    title: {
      pt: 'Ensino Médio Técnico Integrado em Informática',
      en: 'Integrated Technical High School in Computer Science',
    },
    texts: [
      {
        pt: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte - Campus Pau dos Ferros',
        en: 'Federal Institute of Education, Science and Technology of Rio Grande do Norte - Pau dos Ferros Campus',
      },
    ],
    link: 'https://portal.ifrn.edu.br/cursos/tecnicos/tecnico-integrado/informatica/',
  },
]
