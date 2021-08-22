import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from 'layouts/defaultLayout'
import ProjectPost from 'components/projects/ProjectPost'
import { INSERT_VIEWS_MUTATION } from 'graphql/mutations'
import { hasuraAdminClient } from 'lib/hasura-admin-client'
import { GET_PROJECT_BY_SLUG_QUERY, GET_PROJECT_SLUGs } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'

interface ProjectPageProps {
  initialData: any
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context

  const initialData = await hasuraAdminClient.request(GET_PROJECT_BY_SLUG_QUERY, {
    slug: params?.slug
  })

  return {
    props: {
      initialData
    },
    revalidate: 1
  }
}

const Projects: NextPage<ProjectPageProps> = ({ initialData }) => {
  const router = useRouter()
  const { slug, isFallback } = router.query

  const { data, mutate } = useSWR(
    [GET_PROJECT_BY_SLUG_QUERY, slug],
    (query, slug) => hasuraAdminClient.request(query, { slug }),
    { initialData, revalidateOnMount: true }
  )

  useEffect(() => {
    const InsertViewer = async () => {
      const { id } = initialData.projects[0]
      const {
        insert_views: {
          returning: { ...project }
        }
      } = await hasuraAdminClient.request(INSERT_VIEWS_MUTATION, {
        project_id: id
      })
      mutate({
        projects: [
          {
            ...project[0].project
          }
        ]
      })
    }
    InsertViewer()
  }, [])

  if (isFallback) return <p>Loading Projects</p>
  if (!isFallback && !data) return <p>No such project found</p>

  return (
    <Layout
      headTitle={initialData.projects[0].title}
      metaDescription={initialData.projects[0].description}
    >
      <div className="w-full max-w-5xl mx-auto">
        <ProjectHeader />
        <ProjectPost mutate={mutate} projects={data.projects} />
      </div>
    </Layout>
  )
}

const ProjectHeader = () => {
  const router = useRouter()

  return (
    <div className="px-4 pt-4 md:pt-11">
      <button
        onClick={() => router.push('/projects')}
        data-tip="Back"
        className="focus:outline-none transition ease-out duration-200 hover:text-blue-twitter dark:hover:text-blue-twitter"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default Projects
