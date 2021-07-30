import useSWR from 'swr'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Layout from 'layouts/defaultLayout'
import { routeAnimation } from 'mock/animation'
import { GetStaticProps, NextPage } from 'next'
import { GET_PROJECT_QUERY } from 'graphql/queries'
import { hasuraAdminClient } from 'lib/hasura-admin-client'
import ProjectHeader from 'components/Projects/ProjectHeader'

interface ProjectsPageProps {
  initialData: any
}

export const getStaticProps: GetStaticProps = async () => {
  const initialData = await hasuraAdminClient.request(GET_PROJECT_QUERY)

  return {
    props: {
      initialData,
    },
    revalidate: 1,
  }
}

const ProjectList = dynamic(() => import('components/Projects/ProjectList'), {
  ssr: false,
  loading: () => (
    <p className="flex items-center justify-center min-h-screen">Loading...</p>
  ),
})

const Projects: NextPage<ProjectsPageProps> = ({ initialData }) => {
  const { data } = useSWR(
    GET_PROJECT_QUERY,
    (query) => hasuraAdminClient.request(query),
    {
      initialData,
      revalidateOnMount: true,
    },
  )

  return (
    <Layout
      headTitle="Projects | Joshua Galit"
      metaDescription="My List of Projects"
    >
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full max-w-5xl mx-auto"
      >
        <ProjectHeader />
        <ProjectList projects={data.projects} />
      </motion.div>
    </Layout>
  )
}

export default Projects
