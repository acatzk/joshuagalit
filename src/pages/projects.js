import Head from 'next/head'
import Layout from '~/layouts/default'

export default function PortfolioPage () {

  return (
    <>
      <Head>
        <title>Projects | Joshua Galit</title>
      </Head>
      <Layout>
        <div>
          <div className="px-4 py-4 md:py-10">
            <h3 class="text-gray-900 text-lg font-semibold dark:text-white">My Projects</h3>
            <p class="text-gray-600 text-sm dark:text-gray-500">Open source in GitHub</p>
          </div>
        </div>
      </Layout>
    </>
  )
}