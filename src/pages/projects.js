import useSWR from 'swr'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import ProjectList from '~/components/ProjectList'
import { GET_PROJECT_QUERY } from '~/graphql/queries'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'

export async function getStaticProps () {
  const initialData = await hasuraAdminClient.request(GET_PROJECT_QUERY)

  return {
    props: {
      initialData
    }
  }
}

export default function ProjectsPage ({ initialData }) {
  const { data } = useSWR(GET_PROJECT_QUERY, (query) => hasuraAdminClient.request(query), { 
    initialData,
    revalidateOnMount: true
  })

  return (
    <p>
      <Head>
        <title>Projects | Joshua Galit</title>
      </Head>
      <Layout>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl mx-auto"
        >
          <ProjectHeader />
          <ProjectList projects={data.projects} />
        </motion.div>
      </Layout>
    </p>
  )
}

function ProjectHeader () {
  return (
    <div className="px-4 pt-4 md:pt-10">
      <h3 className="text-gray-900 text-lg font-semibold dark:text-white">My Projects</h3>
      <p className="text-gray-600 text-sm dark:text-gray-500">Open source in GitHub</p>
    </div>
  )
}