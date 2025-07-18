import Head from 'next/head'
import PageContainer from '@/components/PageContainer'
import HomeAbout from '@/components/HomeAbout'
import Line from '@/components/Line'
import HomeProjects from '@/components/HomeProjects'
import ExperienceContainer from '@/components/ExperienceContainer'
import useScrollReveal from '@/hooks/useScollReview'
import Footer from '@/components/Footer'



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
        <title>Yasmin Carvalho | Desenvolvedora Frontend & Mobile</title>
        <meta name="description" content="Desenvolvedora frontend e mobile especializada em React, Next.js e aplicações modernas. Crio experiências digitais com foco em performance, usabilidade e inovação." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Yasmin Carvalho, desenvolvedora frontend, desenvolvedora mobile, React, Next.js, portfolio, desenvolvedora web, React Native, Vue.js, Django" />
        <meta name="author" content="Yasmin Carvalho" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Yasmin Carvalho | Desenvolvedora Frontend & Mobile" />
        <meta property="og:image" content="/assets/icon/LogoBackground.svg" />
        <meta property="og:description" content="Portfólio de Yasmin Carvalho — desenvolvedora frontend e mobile especializada em tecnologias modernas como React, Next.js e Django." />
        <meta name="theme-color" content="#1A1F26" />
        <link rel="icon" href="/assets/icon/LogoBackground.svg" />

        <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Yasmin Carvalho",
                "jobTitle": "Desenvolvedora Frontend e Mobile",
                "url": "https://www.yasc.com.br",
                "sameAs": [
                  "https://github.com/Yasnnie",
                  "https://www.linkedin.com/in/carvalho-yas/"
                ],
                "image": "https://www.yasc.com.br/assets/icon/LogoBackground.svg",
                "description": "Portfólio de Yasmin Carvalho — desenvolvedora frontend e mobile especializada em React, Next.js, Vue.js e Django. Criação de interfaces modernas, responsivas e de alta performance."
              }
              `}
        </script>

      </Head>


      <PageContainer>
        <HomeAbout />
        <Line />
        <ExperienceContainer />
        <Line />
        <HomeProjects />
        <Line />
        <Footer />
      </PageContainer>
    </>
  )
}
