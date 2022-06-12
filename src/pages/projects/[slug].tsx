import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '~/layouts/defaultLayout'
import ProjectPostDetails from '~/components/projects/ProjectPostDetails'
import { INSERT_VIEWS_MUTATION } from '~/graphql/mutations'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'
import { GET_PROJECT_BY_SLUG_QUERY, GET_PROJECT_SLUGs } from '~/graphql/queries'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import { nhost } from '~/lib/nhost-client'
import { ParsedUrlQuery } from 'querystring'
import { gql } from '@apollo/client'
import SponsorCard from '~/components/SponsorCard'
import ProjectPostForm from '~/components/projects/ProjectPostForm'
import { AnimatedLoadingIcon } from '~/utils/Icons'
import Link from 'next/link'

interface Props {
  initialData: any
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await nhost.graphql.request(gql`
    query GetProjectBySlugs {
      projects {
        slug
      }
    }
  `)

  return {
    paths: data?.projects?.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const { slug } = ctx.params as IParams
  const { data } = await nhost.graphql.request(GET_PROJECT_BY_SLUG_QUERY, {
    slug
  })

  return {
    props: {
      initialData: data
    },
    revalidate: 1
  }
}

const ProjectPost: NextPage<Props> = (props) => {
  const { initialData } = props

  const router = useRouter()
  const { slug, isFallback } = router.query

  const options = {
    initialData,
    revalidateOnMount: true
  }

  const { data, mutate } = useSWR(
    [GET_PROJECT_BY_SLUG_QUERY, slug],
    async (query, slug) => await nhost.graphql.request(query, { slug }),
    options
  )

  // useEffect(() => {
  //   const InsertViewer = async () => {
  //     const { id } = initialData.projects[0]
  //     const {
  //       data: {
  //         insert_views: {
  //           returning: { ...project }
  //         }
  //       }
  //     } = await nhost.graphql.request(INSERT_VIEWS_MUTATION, {
  //       project_id: id
  //     })
  //     mutate({
  //       projects: [
  //         {
  //           ...project[0].project
  //         }
  //       ]
  //     })
  //   }
  //   InsertViewer()
  // }, [])

  if (isFallback)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AnimatedLoadingIcon className="w-5 h-5 text-black dark:text-white" />
      </div>
    )
  if (!isFallback && !data)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center text-black dark:text-white">
          <p className="font-medium">No such project found!</p>
          <Link href="/projects">
            <a className="hover:underline py-2 px-3 border rounded-full">Goto Projects</a>
          </Link>
        </div>
      </div>
    )

  return (
    <Layout headTitle="Title" metaDescription="This is projects">
      <div className="w-full max-w-5xl mx-auto px-4 mb-6">
        <BackButton />
        <ProjectPostDetails projects={data?.data?.projects[0]} />
        <ProjectPostForm />
        <AnnouncementPage />
        <SponsorCard className="mt-6" />
      </div>
    </Layout>
  )
}

const BackButton = () => {
  const router = useRouter()

  return (
    <div className="pt-4 md:pt-11">
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

const AnnouncementPage = () => {
  return (
    <p className="py-3 px-4 bg-yellow-500 font-bold text-center my-6">
      I&apos;M STILL WORKING ON IN THE COMMENT LIST PROJECTS
    </p>
  )
}

export default ProjectPost
