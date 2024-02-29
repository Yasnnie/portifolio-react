import Head from 'next/head'
import PageContainer from '@/components/PageContainer'
import GridProjects from '@/components/GridProjects'

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Projetos - Yasmin Carvalho</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <GridProjects />
      </PageContainer>
    </>
  )
}
