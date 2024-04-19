import Head from 'next/head'
import PageContainer from '@/components/PageContainer'
import HomeAbout from '@/components/HomeAbout'
import Line from '@/components/Line'
import HomeProjects from '@/components/HomeProjects'
import ExperienceContainer from '@/components/ExperienceContainer'
import useScrollReveal from '@/hooks/useScollReview'
import Footer from '@/components/Footer'
import Logo from '/public/assets/icon/LogoBackground.svg'


export default function Home() {
  useScrollReveal('.scroll-review-item', {
    duration: 1000,
    delay: 150,
    distance: '230px',
    scale: 1,
    easing: 'ease',

  });
  return (
    <>
      <Head>
        <title>Yasmin Carvalho</title>
        <meta name="description" content="Como desenvolvedora apaixonada, meu foco está em criar experiências digitais excepcionais que inspiram e cativam os usuários. Com habilidades sólidas em tecnologias líderes do setor, como Next.js, React, React Native, Vue.js, Python e Django, estou sempre na vanguarda da inovação. Desde a criação de websites dinâmicos e responsivos até o desenvolvimento de aplicativos móveis intuitivos, cada projeto é uma oportunidade de aplicar meu conhecimento técnico e minha criatividade. Com uma abordagem centrada no usuário e um compromisso com a qualidade, estou pronta para transformar suas ideias em realidade digital de primeira classe." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon/LogoBackground.svg" />
        <meta property="og:image" content={Logo} />
        <meta name="keywords" content="developer, frontend, mobile, website, portifolio, next, react, react-native"/>
        <meta name="author" content="Yasmin Carvalho"/>
        <meta name="robots" content="index"/>
        <meta property="og:title" content="Yasmin Carvalho"/>
        <meta name="theme-color" content="#0067FF"/>
      </Head>

      <PageContainer>
        <HomeAbout />
        <Line />
        <ExperienceContainer />
        <Line />
        <HomeProjects />
        <Line />
        <Footer/>
      </PageContainer>
    </>
  )
}
