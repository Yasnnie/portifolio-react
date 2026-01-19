import Head from 'next/head'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import PageContainer from '@/components/PageContainer'
import HomeAbout from '@/components/HomeAbout'
import Line from '@/components/Line'
import HomeProjects from '@/components/HomeProjects'
import ExperienceContainer from '@/components/ExperienceContainer'
import useScrollReveal from '@/hooks/useScollReview'
import Footer from '@/components/Footer'
import { localeContent, Language } from '@/i18n/locales'

const LANGUAGE_STORAGE_KEY = 'site-language'
const DEFAULT_LANGUAGE: Language = 'en'

export default function Home() {
  const router = useRouter()
  const hasInitializedLanguage = useRef(false)
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE)
  useScrollReveal('.scroll-review-item', {
    duration: 1000,
    delay: 150,
    distance: '230px',
    scale: 1,
    easing: 'ease',
  })

  const updateLanguageQuery = useCallback(
    (nextLanguage: Language) => {
      if (!router.isReady) {
        return
      }

      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, lang: nextLanguage },
        },
        undefined,
        { shallow: true },
      )
    },
    [router],
  )

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      hasInitializedLanguage.current ||
      !router.isReady
    ) {
      return
    }

    hasInitializedLanguage.current = true

    const queryLanguage = router.query.lang

    const normalizedQueryLanguage = Array.isArray(queryLanguage)
      ? queryLanguage[0]
      : queryLanguage

    if (normalizedQueryLanguage === 'pt' || normalizedQueryLanguage === 'en') {
      setLanguage(normalizedQueryLanguage)
      return
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)

    if (storedLanguage === 'pt' || storedLanguage === 'en') {
      setLanguage(storedLanguage)
      updateLanguageQuery(storedLanguage)
      return
    }

    const browserLanguage = window.navigator.language.toLowerCase()

    if (browserLanguage.startsWith('en')) {
      setLanguage('en')
      updateLanguageQuery('en')
    } else if (browserLanguage.startsWith('pt')) {
      setLanguage('pt')
      updateLanguageQuery('pt')
    } else {
      setLanguage(DEFAULT_LANGUAGE)
      updateLanguageQuery(DEFAULT_LANGUAGE)
    }
  }, [router.isReady, router.query.lang, updateLanguageQuery])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  const handleLanguageChange = useCallback(
    (nextLanguage: Language) => {
      setLanguage(nextLanguage)
      updateLanguageQuery(nextLanguage)
    },
    [updateLanguageQuery],
  )

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

      <PageContainer
        language={language}
        onLanguageChange={handleLanguageChange}
      >
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
