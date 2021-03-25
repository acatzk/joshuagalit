import Head from 'next/head'
import Layout from '~/layouts/default'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Joshua Galit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        Dynamic Data comin'
      </Layout>
    </> 
  )
}
