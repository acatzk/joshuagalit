import useSWR from 'swr'
import Head from 'next/head'
import Moment from 'react-moment'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import { useRouter } from 'next/router'
import ReactTooltip from 'react-tooltip'
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
  const { theme } = useTheme()

  const { data, mutate } = useSWR([GET_PROJECT_BY_SLUG_QUERY, slug], (query, slug) => hasura.request(query, { slug }), {
    initialData, 
    revalidateOnMount: true 
  })

  // useEffect(() => {
  //   async function InsertViewer () {
  //     const { id } = initialData.projects[0]
  //     const { insert_views: { returning: { ...project } } } = await hasuraAdminClient.request(INSERT_VIEWS_MUTATION, {  project_id: id })
  //     mutate({ 
  //       projects: [{
  //         ...project[0].project
  //       }]
  //     })
  //     addToast('Insert view 1', { appearance: 'success', autoDismiss: true })
  //   }

  //   InsertViewer()
  // }, [])

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
          <ProjectHeader />
          <ProjectPreview projects={data.projects}/>
          <ReactTooltip place="right" type={ theme === 'light' ? 'dark' : 'light' } effect="float" />
        </motion.div>
      </Layout>
    </>
  )
}

function ProjectHeader () {
  const router = useRouter()

  return (
    <div className="px-4 pt-4 md:pt-11">
      <button 
        onClick={() => router.push('/projects')} 
        data-tip="Back"
        className="focus:outline-none transition ease-out duration-200 hover:text-blue-twitter dark:hover:text-blue-twitter">
        <svg 
          className="w-8 h-8" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg">
          <path 
            fillRule="evenodd" 
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd">
          </path>
        </svg>
      </button>
    </div>
  )
}

function ProjectPreview ({ projects }) {
  return (
    projects.map(({ id, title, description, demo_url, created_at, project_image_url, source_code_url, slug, views_aggregate }) => {
      const { aggregate: { count } } = views_aggregate

      return (
        <div key={id} className="px-4 space-y-6">
          <div className="flex items-center justify-center mt-10">
            <h1 className="font-semibold text-2xl md:text-3xl tracking-wide">{ title }</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0">
                <img 
                  className="w-7 h-7 border border-gray-200 dark:border-gray-700 rounded-full" 
                  src="/images/my-picture-tiny.jpg"
                />
              </div>
              <h1 className="text-sm tracking-tight text-gray-700 dark:text-gray-400 line-clamp-1">Joshua Galit / <Moment date={created_at} format="MMM DD, YYYY" /></h1>
            </div>
            <div className="flex flex-wrap items-center space-x-1.5 text-gray-500">
              <div className="flex flex-wrap items-center space-x-1">
                <span className="text-xs font-medium mt-0.5">{ count }</span>
                <ViewsIcon />
              </div>
              <span>&bull;</span>
              <button 
                data-tip="Like"
                className="flex items-center space-x-0.5 rounded-lg border border-transparent 
                border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 
                hover:text-black dark:hover:text-white px-1 py-0.5 focus:outline-none 
                transition ease-in-out duration-200">
                <span>
                  <LikeIcon />
                </span>
                <span className="text-xs">45</span>
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex-shrink-0">
              <img src={project_image_url} />
            </div>
            <div>
              <h1 className="text-lg text-gray-600 dark:text-gray-400 font-medium">{ description }</h1>
            </div>
          </div>
        </div>
      )
    })
  )
}

function ViewsIcon () {
  return (
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
    </svg>
  )
}

function LikeIcon () {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
    </svg>
  )
}