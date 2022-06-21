import useSWR from 'swr'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { nhost } from '~/lib/nhost-client'
import Layout from '~/layouts/defaultLayout'
import { GetStaticProps, NextPage } from 'next'
import { routeAnimation } from '~/mock/animation'
import { AnimatedLoadingIcon } from '~/utils/Icons'
import { GET_PROJECT_QUERY } from '~/graphql/queries'
import ProjectHeader from '~/components/projects/ProjectHeader'

type Props = {
  initialData: {
    id: string
    title: string
    description: string
    demo_url: string
    created_at: string
    project_image_url: string
    source_code_url: string
    slug: string
    views_aggregate: {
      aggregate: {
        viewsCount: number
      }
    }
    comments_aggregate: {
      aggregate: {
        commentsCount: number
      }
    }
  }
}

const ProjectList = dynamic(() => import('~/components/projects/ProjectList'), {
  loading: () => <AnimatedLoadingIcon className="w-5 h-5 text-black dark:text-white" />
})

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await nhost.graphql.request(GET_PROJECT_QUERY)

  return {
    props: {
      initialData: data
    },
    revalidate: 1
  }
}

const Projects: NextPage<Props> = (props) => {
  const { initialData } = props

  const options = {
    initialData,
    revalidateOnMount: true
  }

  const { data } = useSWR(
    GET_PROJECT_QUERY,
    async (query) => await nhost.graphql.request(query),
    options
  )

  return (
    <Layout headTitle="Projects | Joshua Galit" metaDescription="My List of Projects">
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full max-w-5xl mx-auto"
      >
        <ProjectHeader />
        {/* <pre>{JSON.stringify(data?.data?.projects, null, 2)}</pre> */}
        <ProjectList projects={data?.data?.projects} />
      </motion.div>
    </Layout>
  )
}

export default Projects
