import Head from 'next/head'
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { MotionConfig } from 'framer-motion'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import { localeContent, Language } from '@/i18n/locales'

const SITE = 'https://www.yasc.com.br'
const PAGE_URL: Record<Language, string> = { pt: `${SITE}/`, en: `${SITE}/en` }
const OG_LOCALE: Record<Language, string> = { pt: 'pt_BR', en: 'en_US' }
const HTML_LANG: Record<Language, string> = { pt: 'pt-BR', en: 'en' }
const OG_IMAGE = `${SITE}/og-image.png`

const PERSON_ID = `${SITE}/#person`
const SOCIAL_PROFILES = [
  'https://github.com/Yasnnie',
  'https://www.linkedin.com/in/carvalho-yas/',
  'https://www.instagram.com/yasc.mp4/',
]

export default function Home() {
  const router = useRouter()
  const language: Language = router.locale === 'en' ? 'en' : 'pt'
  const content = localeContent[language]
  const meta = content.metadata
  const canonical = PAGE_URL[language]
  const other: Language = language === 'pt' ? 'en' : 'pt'

  const handleLanguageChange = useCallback(
    (next: Language) => {
      if (next === language) return
      // Remember the choice so the next visit opens in the same language.
      document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`
      router.push(router.asPath, router.asPath, { locale: next })
    },
    [language, router],
  )

  // Next sets a bare "pt" when the language changes on the client; keep the
  // regional tag that the server renders.
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language]
  }, [language])

  // Links shared before the per-language URLs existed used "?lang=en|pt".
  // Send them to the matching URL. (Search engines already get the right
  // page from the canonical and hreflang tags above.)
  useEffect(() => {
    if (!router.isReady) return
    const param = router.query.lang
    const wanted = Array.isArray(param) ? param[0] : param
    if (wanted === 'pt' || wanted === 'en') {
      router.replace('/', '/', { locale: wanted })
    }
  }, [router])

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Yasmin Carvalho',
        url: PAGE_URL.pt,
        image: `${SITE}/assets/img/profile.png`,
        jobTitle: content.structuredData.jobTitle,
        description: content.structuredData.description,
        sameAs: SOCIAL_PROFILES,
        knowsAbout: [
          'Spring Boot',
          'Next.js',
          'React',
          'React Native',
          'PostgreSQL',
          'TypeScript',
          'Docker',
        ],
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Instituto Federal do Rio Grande do Norte (IFRN)',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Novate8',
          url: 'https://www.novate8.com.br/',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: PAGE_URL.pt,
        name: 'Yasmin Carvalho',
        inLanguage: ['pt-BR', 'en'],
        publisher: { '@id': PERSON_ID },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${canonical}#profile`,
        url: canonical,
        name: meta.title,
        description: meta.description,
        inLanguage: HTML_LANG[language],
        isPartOf: { '@id': `${SITE}/#website` },
        mainEntity: { '@id': PERSON_ID },
      },
    ],
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Yasmin Carvalho" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <link rel="canonical" href={canonical} />

        {/* One entry per language version, plus the fallback for everyone else. */}
        <link rel="alternate" hrefLang="pt-BR" href={PAGE_URL.pt} />
        <link rel="alternate" hrefLang="en" href={PAGE_URL.en} />
        <link rel="alternate" hrefLang="x-default" href={PAGE_URL.pt} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Yasmin Carvalho" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:locale" content={OG_LOCALE[language]} />
        <meta property="og:locale:alternate" content={OG_LOCALE[other]} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={meta.ogImageAlt} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.ogTitle} />
        <meta name="twitter:description" content={meta.ogDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content={meta.ogImageAlt} />

        {/* `key` stops Next from keeping only one of the two theme-color tags. */}
        <meta
          key="theme-color-light"
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          key="theme-color-dark"
          name="theme-color"
          content="#090b11"
          media="(prefers-color-scheme: dark)"
        />

        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link
          rel="icon"
          href="/assets/icon/LogoBackground.svg"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <MotionConfig reducedMotion="user">
        <Nav language={language} onLanguageChange={handleLanguageChange} />
        <main>
          <Hero language={language} />
          <Marquee />
          <About language={language} />
          <Projects language={language} />
          <Experience language={language} />
        </main>
        <Footer language={language} />
      </MotionConfig>
    </>
  )
}
