export type Language = 'pt' | 'en'

interface NavLabels {
  home: string
  experience: string
  projects: string
}

interface HomeAboutParagraph1 {
  intro: string
  link: string
  afterLink: string
}

interface HomeAboutParagraph2 {
  intro: string
  highlight1: string
  middle: string
  highlight2: string
  outro: string
}

interface HomeAboutParagraph3 {
  intro: string
  highlight: string
  outro: string
}

export type LocalizedString = {
  pt: string
  en: string
}

export interface LocaleContent {
  header: {
    subtitle: string
    nav: NavLabels
    languageLabel: string
  }
  homeAbout: {
    paragraph1: HomeAboutParagraph1
    paragraph2: HomeAboutParagraph2
    paragraph3: HomeAboutParagraph3
  }
  homeProjectsTitle: string
  experience: {
    professionalTitle: string
    academicTitle: string
    downloadResume: string
  }
  footer: {
    designer: string
    code: string
    technologies: string
    techConnector: string
    published: string
    closing: string
    copyright: string
  }
  metadata: {
    title: string
    description: string
    keywords: string
    ogTitle: string
    ogDescription: string
  }
  structuredData: {
    jobTitle: string
    description: string
  }
}

export const localeContent: Record<Language, LocaleContent> = {
  pt: {
    header: {
      subtitle: 'Desenvolvedora Web e Mobile',
      nav: {
        home: 'Início',
        experience: 'Experiência',
        projects: 'Projetos',
      },
      languageLabel: 'Idioma',
    },
    homeAbout: {
      paragraph1: {
        intro:
          'Por volta de 2020, comecei a explorar HTML e CSS para criar sites para servidores de RP e JavaScript para bots do Discord. Não demorou muito, logo entrei no mercado de trabalho para minha primeira vaga como desenvolvedora web em uma ',
        link: 'startup local',
        afterLink:
          '. Lá, foquei em desenvolver sistemas escaláveis e com uma boa experiência de usuário.',
      },
      paragraph2: {
        intro: 'Atualmente, faço parte do ',
        highlight1: 'NADIC',
        middle:
          ', um núcleo de pesquisa dedicado a criar soluções tecnológicas para diversas empresas. Lá trabalho em projetos voltados para a ',
        highlight2: 'educação brasileira',
        outro:
          '. Meu objetivo é contribuir para a sociedade através da tecnologia, buscando impactar positivamente a vida das pessoas. Sempre me dediquei a projetos que têm o potencial de alcançar grandes massas e fazer a diferença no mundo.',
      },
      paragraph3: {
        intro: 'No meu tempo livre, gosto de jogar ',
        highlight: 'Valorant',
        outro:
          ' e outros jogos online, ouvir música e assistir a séries e filmes. Fora do computador, priorizo momentos de qualidade com minha família e amigos, como também conhecer novos lugares.',
      },
    },
    homeProjectsTitle: 'Projetos',
    experience: {
      professionalTitle: 'Profissional',
      academicTitle: 'Acadêmica',
      downloadResume: 'Download CV',
    },
    footer: {
      designer: 'O design deste portfólio foi criado no ',
      code: 'e o código feito pelo ',
      technologies: 'As tecnologias usadas são: ',
      techConnector: ' e ',
      published: 'publicado na Vercel.',
      closing: 'Até a próxima! 🤘',
      copyright: '© 2024 - Yasmin Carvalho T. de Alencar',
    },
    metadata: {
      title: 'Yasmin Carvalho | Desenvolvedora Frontend & Mobile',
      description:
        'Desenvolvedora frontend e mobile especializada em React, Next.js e aplicações modernas. Crio experiências digitais com foco em performance, usabilidade e inovação.',
      keywords:
        'Yasmin Carvalho, desenvolvedora frontend, desenvolvedora mobile, React, Next.js, portfólio, desenvolvedora web, React Native, Vue.js, Django',
      ogTitle: 'Yasmin Carvalho | Desenvolvedora Frontend & Mobile',
      ogDescription:
        'Portfólio de Yasmin Carvalho — desenvolvedora frontend e mobile especializada em tecnologias modernas como React, Next.js e Django. Criação de interfaces modernas, responsivas e de alta performance.',
    },
    structuredData: {
      jobTitle: 'Desenvolvedora Frontend e Mobile',
      description:
        'Portfólio de Yasmin Carvalho — desenvolvedora frontend e mobile especializada em tecnologias modernas como React, Next.js e Django. Criação de interfaces modernas, responsivas e de alta performance.',
    },
  },
  en: {
    header: {
      subtitle: 'Web and Mobile Developer',
      nav: {
        home: 'Home',
        experience: 'Experience',
        projects: 'Projects',
      },
      languageLabel: 'Language',
    },
    homeAbout: {
      paragraph1: {
        intro:
          'Back in 2020, I started experimenting with HTML and CSS to build websites for RP servers and JavaScript for Discord bots. Before long, I entered the job market with my first role as a web developer at a ',
        link: 'local startup',
        afterLink:
          '. There, I focused on crafting scalable systems with a strong user experience.',
      },
      paragraph2: {
        intro: 'Today I am part of ',
        highlight1: 'NADIC',
        middle:
          ', a research hub dedicated to building technological solutions for various companies. There I contribute to projects focused on ',
        highlight2: 'Brazilian education',
        outro:
          ". My goal is to use technology to contribute positively to society, always seeking to impact people's lives. I consistently focus on projects with the potential to reach wide audiences and make a difference.",
      },
      paragraph3: {
        intro: 'In my free time I enjoy playing ',
        highlight: 'Valorant',
        outro:
          ' and other online games, listening to music, and watching series and films. Outside of the computer, I prioritize quality time with family and friends while also exploring new places.',
      },
    },
    homeProjectsTitle: 'Projects',
    experience: {
      professionalTitle: 'Professional',
      academicTitle: 'Academic',
      downloadResume: 'Download Resume',
    },
    footer: {
      designer: 'The design of this portfolio was created in ',
      code: 'and the code was built with ',
      technologies: 'Technologies on the stack include: ',
      techConnector: ' and ',
      published: 'published on Vercel.',
      closing: 'See you soon! 🤘',
      copyright: '© 2024 - Yasmin Carvalho T. de Alencar',
    },
    metadata: {
      title: 'Yasmin Carvalho | Frontend & Mobile Developer',
      description:
        'Frontend and mobile developer specializing in React, Next.js, and modern applications. I build digital experiences focused on performance, usability, and innovation.',
      keywords:
        'Yasmin Carvalho, frontend developer, mobile developer, React, Next.js, portfolio, web developer, React Native, Vue.js, Django',
      ogTitle: 'Yasmin Carvalho | Frontend & Mobile Developer',
      ogDescription:
        'Portfolio of Yasmin Carvalho — frontend and mobile developer focused on modern technologies like React, Next.js, and Django. Crafting high-performance, responsive interfaces.',
    },
    structuredData: {
      jobTitle: 'Frontend and Mobile Developer',
      description:
        'Portfolio of Yasmin Carvalho — frontend and mobile developer focused on modern technologies like React, Next.js, and Django. Crafting high-performance, responsive interfaces.',
    },
  },
}
