export type Language = 'pt' | 'en'

export type LocalizedString = {
  pt: string
  en: string
}

export interface AboutCard {
  label: string
  title: string
  text: string
}

export interface LocaleContent {
  nav: {
    about: string
    projects: string
    experience: string
    contact: string
    openMenu: string
    closeMenu: string
    languageLabel: string
  }
  hero: {
    status: string
    line1: string
    line2: string
    intro: string
    ctaProjects: string
    ctaResume: string
    photoAlt: string
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    cards: AboutCard[]
    fun: { before: string; highlight: string; after: string }
  }
  projects: {
    eyebrow: string
    title: string
    featuredLabel: string
    live: string
    visit: string
  }
  experience: {
    eyebrow: string
    professionalTitle: string
    academicTitle: string
    downloadResume: string
    showMore: string
    showLess: string
    visitCompany: string
    visitCourse: string
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    backToTop: string
  }
  footer: {
    built: string
    copyright: string
  }
  metadata: {
    title: string
    description: string
    keywords: string
    ogTitle: string
    ogDescription: string
    ogImageAlt: string
  }
  structuredData: {
    jobTitle: string
    description: string
  }
}

export const localeContent: Record<Language, LocaleContent> = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      languageLabel: 'Idioma',
    },
    hero: {
      status: 'Studo.Flow no ar',
      line1: 'Full stack',
      line2: 'developer',
      intro:
        'Sou desenvolvedora full stack com Spring Boot e Next.js. Transformo ideias em produtos que as pessoas usam de verdade, de portais do governo a um SaaS próprio.',
      ctaProjects: 'Ver projetos',
      ctaResume: 'Baixar CV',
      photoAlt: 'Foto de Yasmin Carvalho sorrindo em uma praça na Itália',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Do primeiro HTML ao meu próprio produto.',
      intro:
        'Comecei em 2020, com HTML e CSS para sites de servidores de RP e JavaScript para bots do Discord. De lá para cá, passei por uma startup de promoções, por sistemas de educação pública em escala nacional e por produtos para redes de farmácias. Hoje sou desenvolvedora full stack com Spring Boot e Next.js e desenvolvo o Studo.Flow, meu SaaS de estudos com IA.',
      cards: [
        {
          label: 'Hoje',
          title: 'Studo.Flow',
          text: 'Meu SaaS autoral. Produto, interface e código na mesma mesa, e cada decisão passa por mim.',
        },
        {
          label: 'Ofício',
          title: 'Full stack',
          text: 'Spring Boot e PostgreSQL no back-end, Next.js no front-end. Do banco de dados à interface, e também apps mobile com React Native.',
        },
        {
          label: 'Impacto',
          title: 'Educação pública',
          text: 'Pé de Meia, RIEH e Tela Brasil: sistemas de escala nacional feitos para o MEC e o MinC.',
        },
        {
          label: 'Fora do código',
          title: 'Jogos, música e viagens',
          text: '',
        },
      ],
      fun: {
        before: 'Jogo ',
        highlight: 'Valorant',
        after:
          ', ouço música, assisto a séries e filmes e passo tempo com família e amigos. Sempre que dá, conheço um lugar novo.',
      },
    },
    projects: {
      eyebrow: 'Projetos',
      title: 'Trabalhos selecionados.',
      featuredLabel: 'Projeto autoral',
      live: 'No ar',
      visit: 'Visitar projeto',
    },
    experience: {
      eyebrow: 'Experiência',
      professionalTitle: 'Trajetória profissional.',
      academicTitle: 'Formação.',
      downloadResume: 'Baixar CV',
      showMore: 'Ver detalhes',
      showLess: 'Ocultar detalhes',
      visitCompany: 'Visitar o site de',
      visitCourse: 'Ver a página do curso:',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar.',
      text: 'Tem uma ideia, um projeto ou uma vaga? Me escreve.',
      backToTop: 'Voltar ao topo',
    },
    footer: {
      built: 'Feito com Next.js e Styled-Components. Publicado na Vercel.',
      copyright: '© 2026 Yasmin Carvalho T. de Alencar',
    },
    metadata: {
      title: 'Yasmin Carvalho | Desenvolvedora Full Stack',
      description:
        'Desenvolvedora full stack com Spring Boot e Next.js. Criadora do Studo.Flow. Crio produtos digitais com foco em performance, usabilidade e inovação.',
      keywords:
        'Yasmin Carvalho, desenvolvedora full stack, Spring Boot, Next.js, PostgreSQL, React, React Native, Studo.Flow, portfólio, desenvolvedora web',
      ogTitle: 'Yasmin Carvalho | Desenvolvedora Full Stack',
      ogDescription:
        'Portfólio de Yasmin Carvalho, desenvolvedora full stack com Spring Boot e Next.js e criadora do Studo.Flow.',
      ogImageAlt:
        'Yasmin Carvalho sorrindo, ao lado do texto Full stack developer, Spring Boot, Next.js e Studo.Flow',
    },
    structuredData: {
      jobTitle: 'Desenvolvedora Full Stack',
      description:
        'Portfólio de Yasmin Carvalho, desenvolvedora full stack com Spring Boot e Next.js e criadora do Studo.Flow.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      languageLabel: 'Language',
    },
    hero: {
      status: 'Studo.Flow is live',
      line1: 'Full stack',
      line2: 'developer',
      intro:
        'I am a full stack developer working with Spring Boot and Next.js. I turn ideas into products people actually use, from government portals to a SaaS of my own.',
      ctaProjects: 'See projects',
      ctaResume: 'Download CV',
      photoAlt: 'Photo of Yasmin Carvalho smiling in a square in Italy',
    },
    about: {
      eyebrow: 'About',
      title: 'From my first HTML to a product of my own.',
      intro:
        'I started in 2020, writing HTML and CSS for RP server websites and JavaScript for Discord bots. Since then I have worked at a promotions startup, on nationwide public education systems, and on products for pharmacy networks. Today I am a full stack developer working with Spring Boot and Next.js, and I build Studo.Flow, my own AI study SaaS.',
      cards: [
        {
          label: 'Today',
          title: 'Studo.Flow',
          text: 'My own SaaS. Product, interface and code at the same desk, and every decision goes through me.',
        },
        {
          label: 'Craft',
          title: 'Full stack',
          text: 'Spring Boot and PostgreSQL on the back end, Next.js on the front end. From the database to the interface, plus mobile apps with React Native.',
        },
        {
          label: 'Impact',
          title: 'Public education',
          text: 'Pé de Meia, RIEH and Tela Brasil: nationwide systems built for the Ministries of Education and Culture.',
        },
        {
          label: 'Off the clock',
          title: 'Games, music and travel',
          text: '',
        },
      ],
      fun: {
        before: 'I play ',
        highlight: 'Valorant',
        after:
          ', listen to music, watch series and films, and spend time with family and friends. Whenever I can, I visit somewhere new.',
      },
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work.',
      featuredLabel: 'Original project',
      live: 'Live',
      visit: 'Visit project',
    },
    experience: {
      eyebrow: 'Experience',
      professionalTitle: 'Professional path.',
      academicTitle: 'Education.',
      downloadResume: 'Download CV',
      showMore: 'Show details',
      showLess: 'Hide details',
      visitCompany: 'Visit the website of',
      visitCourse: 'View the course page:',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk.",
      text: 'Got an idea, a project or an opening? Write to me.',
      backToTop: 'Back to top',
    },
    footer: {
      built: 'Built with Next.js and Styled-Components. Hosted on Vercel.',
      copyright: '© 2026 Yasmin Carvalho T. de Alencar',
    },
    metadata: {
      title: 'Yasmin Carvalho | Full Stack Developer',
      description:
        'Full stack developer working with Spring Boot and Next.js. Creator of Studo.Flow. I build digital products focused on performance, usability and innovation.',
      keywords:
        'Yasmin Carvalho, full stack developer, Spring Boot, Next.js, PostgreSQL, React, React Native, Studo.Flow, portfolio, web developer',
      ogTitle: 'Yasmin Carvalho | Full Stack Developer',
      ogDescription:
        'Portfolio of Yasmin Carvalho, full stack developer working with Spring Boot and Next.js and creator of Studo.Flow.',
      ogImageAlt:
        'Yasmin Carvalho smiling, next to the text Full stack developer, Spring Boot, Next.js and Studo.Flow',
    },
    structuredData: {
      jobTitle: 'Full Stack Developer',
      description:
        'Portfolio of Yasmin Carvalho, full stack developer working with Spring Boot and Next.js and creator of Studo.Flow.',
    },
  },
}
