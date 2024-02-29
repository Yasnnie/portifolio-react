import Head from 'next/head'
import PageContainer from '@/components/PageContainer'
import FormContact from '@/components/FormContact'

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - Yasmin Carvalho</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <FormContact />
      </PageContainer>
    </>
  )
}
