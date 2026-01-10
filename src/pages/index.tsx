import Head from 'next/head'
import { useEffect, useState } from 'react'
import PageContainer from '@/components/PageContainer'
import HomeAbout from '@/components/HomeAbout'
import Line from '@/components/Line'
import HomeProjects from '@/components/HomeProjects'
import ExperienceContainer from '@/components/ExperienceContainer'
import useScrollReveal from '@/hooks/useScollReview'
import Footer from '@/components/Footer'
import { localeContent, Language } from '@/i18n/locales'

const LANGUAGE_STORAGE_KEY = 'site-language'
const DEFAULT_LANGUAGE: Language = 'pt'

export default function Home() {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE)
  useScrollReveal('.scroll-review-item', {
    duration: 1000,
    delay: 150,
    distance: '230px',
    scale: 1,
    easing: 'ease',
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

    if (storedLanguage === 'pt' || storedLanguage === 'en') {
      setLanguage(storedLanguage)
      return
    }

    const browserLanguage = window.navigator.language.toLowerCase()

    if (browserLanguage.startsWith('en')) {
      setLanguage('en')
    } else if (browserLanguage.startsWith('pt')) {
      setLanguage('pt')
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  const content = localeContent[language]
  const meta = content.metadata
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yasmin Carvalho',
    jobTitle: content.structuredData.jobTitle,
    url: 'https://www.yasc.com.br',
    sameAs: [
      'https://github.com/Yasnnie',
      'https://www.linkedin.com/in/carvalho-yas/',
    ],
    image: 'https://www.yasc.com.br/assets/icon/LogoBackground.svg',
    description: content.structuredData.description,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Yasmin Carvalho" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:image" content="/assets/icon/LogoBackground.svg" />
        <meta property="og:description" content={meta.ogDescription} />
        <meta name="theme-color" content="#1A1F26" />
        <link rel="icon" href="/assets/icon/LogoBackground.svg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <PageContainer language={language} onLanguageChange={setLanguage}>
        <HomeAbout language={language} />
        <Line />
        <ExperienceContainer language={language} />
        <Line />
        <HomeProjects language={language} />
        <Line />
        <Footer language={language} />
      </PageContainer>
    </>
  )
}
