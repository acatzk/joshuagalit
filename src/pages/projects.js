import useSWR from 'swr'
import Head from 'next/head'
import Layout from '~/layouts/default'
import ProjectItem from '~/components/ProjectItem'
import ProjectList from '~/components/ProjectList'
import { GET_PROJECT_QUERY } from '~/graphql/queries'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'

export const getStaticProps = async () => {
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
    <>
      <Head>
        <title>Projects | Joshua Galit</title>
      </Head>
      <Layout>
        <div className="w-full max-w-5xl mx-auto">
          <div className="px-4 pt-4 md:pt-10">
            <h3 className="text-gray-900 text-lg font-semibold dark:text-white">My Projects</h3>
            <p className="text-gray-600 text-sm dark:text-gray-500">Open source in GitHub</p>
          </div>
          <ProjectList>
            {data.projects.map((project) => <ProjectItem key={project.id} {...project} />)}
          </ProjectList>
        </div>
      </Layout>
    </>
  )
}