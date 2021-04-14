import useSWR from 'swr'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import { useRouter } from 'next/router'
import { useToasts } from 'react-toast-notifications'
import { INSERT_VIEWS_MUTATION } from '~/graphql/mutations'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'
import { GET_PROJECT_BY_SLUG_QUERY, GET_PROJECT_SLUGs } from '~/graphql/queries'

export async function getStaticPaths() {
  const { projects } = await hasuraAdminClient.request(GET_PROJECT_SLUGs)

  return {
    paths: projects.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const initialData = await hasuraAdminClient.request(GET_PROJECT_BY_SLUG_QUERY, { slug })

  return {
    props: {
      initialData
    },
    revalidate: 1
  }
}

export default function ProjectPage ({ initialData }) {

  const router = useRouter()
  const { slug } = router.query
  const { addToast } = useToasts()

  const { data, mutate } = useSWR([GET_PROJECT_BY_SLUG_QUERY, slug], (query, slug) => hasura.request(query, { slug }), {
    initialData, 
    revalidateOnMount: true 
  })

  useEffect(() => {
    async function InsertViewer () {
      const { id } = initialData.projects[0]
      const { insert_views } = await hasuraAdminClient.request(INSERT_VIEWS_MUTATION, {  project_id: id })
      mutate({ ...insert_views })
      addToast('Insert view 1', { appearance: 'success', autoDismiss: true })
    }

    InsertViewer()
  }, [])

  return (
    <>
      <Head>
        <title>Project Name</title>
      </Head>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl mx-auto"
        >
          <Link href="/projects">
            <a className="block px-6 py-2 bg-blue-twitter text-white font-semibold rounded lg">Back</a>
          </Link>
          <pre>{ JSON.stringify(data, null, 2) }</pre>
        </motion.div>
      </Layout>
    </>
  )
}