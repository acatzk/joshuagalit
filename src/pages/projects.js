import useSWR from 'swr'
import Head from 'next/head'
import { useToggle } from 'react-use'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import ProjectList from '~/components/ProjectList'
import FeedbackForm from '~/components/FeedbackForm'
import { GET_PROJECT_QUERY } from '~/graphql/queries'
import { useToasts } from 'react-toast-notifications'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'
import { INSERT_FEEDBACK_MUTATION } from '~/graphql/mutations'

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
    <>
      <Head>
        <title>Projects | Joshua Galit</title>
        <link rel="icon" href="/favicon.ico" />
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
    </>
  )
}

function ProjectHeader () {

  const { addToast } = useToasts()
  const [onModal, toggleModal] = useToggle(false)

  const handleFeedback = async ({ name, message, emoji }, e) => {
    try {
      await hasuraAdminClient.request(INSERT_FEEDBACK_MUTATION, {
        name,
        message,
        emoji
      })

      addToast('Your Feedback has been received. Thank you for your help', { appearance: 'success', autoDismiss: true })
      e.target.reset()

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-between px-4 pt-4 md:pt-10">
      <div className="flex flex-col">
        <h3 className="text-gray-900 text-lg font-semibold dark:text-white">My Projects</h3>
        <p className="text-gray-600 text-sm dark:text-gray-500">Open source in GitHub</p>
      </div>
      <div className="relative">
        <button 
          onClick={() => toggleModal(true)}
          className="py-1 px-3 text-gray-500 text-sm border rounded focus:outline-none
                border-gray-300 hover:border-black hover:text-black 
                transition ease-in-out duration-150 dark:text-gray-400 dark:border-gray-600 
                dark:hover:text-gray-200 dark:hover:border-gray-400">
          Feedback
        </button>
        {onModal && (
          <>
            <button onClick={() => toggleModal(false)} type="button" className="z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none"></button>
            <motion.div 
              as={motion.div}
              static
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.20 }}
              className="absolute z-40 right-0 shadow-2xl border border-gray-50 dark:border-gray-700 bg-white dark:bg-dark-dim text-gray-900 dark:text-white rounded-lg w-72 md:w-80 -mt-9 overflow-hidden"
            >
              <div className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">Feedback</div>
              <FeedbackForm onSubmit={handleFeedback} />
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}