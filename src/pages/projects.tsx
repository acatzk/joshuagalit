import useSWR from 'swr'
import { motion } from 'framer-motion'
import { routeAnimation } from '~/animation'
import Layout from '~/layouts/defaultLayout'
import { GetStaticProps, NextPage } from 'next'
import { GET_PROJECT_QUERY } from '~/graphql/queries'
import ProjectList from '~/components/Projects/ProjectList'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'
import ProjectHeader from '~/components/Projects/ProjectHeader'

interface ProjectsPageProps {
  initialData: any
}

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

export const getStaticProps: GetStaticProps = async () => {
  const initialData = await hasuraAdminClient.request(GET_PROJECT_QUERY)

  return {
    props: {
      initialData,
    },
    revalidate: 1,
  }
}

export default Projects
