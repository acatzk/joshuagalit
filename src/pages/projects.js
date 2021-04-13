import useSWR from 'swr'
import Head from 'next/head'
import { useToggle } from 'react-use'
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
    <>
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
    </>
  )
}

function ProjectHeader () {
  const [onModal, toggleModal] = useToggle(false)
  const emojis = [
    {
      icon: '/svgs/emoji/amaze.svg'
    },
    {
      icon: '/svgs/emoji/happy.svg'
    },
    {
      icon: '/svgs/emoji/unsatisfied.svg'
    },
    {
      icon: '/svgs/emoji/cry.svg'
    }
  ]

  return (
    <div className="flex flex-wrap items-center justify-between px-4 pt-4 md:pt-10">
      <div className="flex flex-col">
        <h3 className="text-gray-900 text-lg font-semibold dark:text-white">My Projects</h3>
        <p className="text-gray-600 text-sm dark:text-gray-500">Open source in GitHub</p>
      </div>
      <div className="relative">
        <button 
          onClick={() => toggleModal(true)}
          className="py-1 px-3 text-gray-500 text-sm border rounded 
                border-gray-300 hover:border-black hover:text-black focus:outline-none 
                transition ease-in-out duration-150 dark:text-gray-400 dark:border-gray-600 
                dark:hover:text-gray-200 dark:hover:border-gray-400">
          Feedback
        </button>
        {onModal && (
          <>
            <button onClick={() => toggleModal(false)} type="button" class="z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none"></button>
            <motion.div 
              as={motion.div}
              static
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.20 }}
              class="absolute z-40 right-0 shadow-2xl border border-gray-50 dark:border-gray-700 bg-white dark:bg-dark-dim text-gray-900 dark:text-white rounded-lg w-72 md:w-80 -mt-8 overflow-hidden"
            >
              <div className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">Feedback</div>
              <form className="space-y-3">
                <div className="px-4">
                  <input 
                    type="text" 
                    autoFocus
                    placeholder="Name"
                    className="w-full text-sm rounded-lg border border-gray-400 focus:ring-0 focus:border-gray-900 bg-white dark:bg-dark-dim dark:focus:border-gray-300" 
                  />
                </div>
                <div className="px-4">
                  <textarea 
                    type="textarea" 
                    rows="4" cols="50"
                    placeholder="Your feedback..."
                    className="w-full text-sm rounded-lg border border-gray-400 focus:ring-0 focus:border-gray-900 bg-white dark:bg-dark-dim dark:focus:border-gray-300">
                  </textarea>
                </div>
                <div className="flex items-center justify-between px-3 border-t border-gray-200 dark:border-gray-700 py-1.5 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center space-x-2">
                    {emojis.map(({ icon }) => (
                      <motion.button 
                        type="button"
                        onClick={(e) => e.preventDefault()}
                        whileHover={{ scale: 1.1 }}
                        className="rounded-full border dark:border-gray-700 p-1 bg-white dark:bg-gray-700 focus:outline-none"
                      >
                        <img className="w-5 h-5" src={icon} />
                      </motion.button>
                    ))}
                  </div>
                  <button  
                    onClick={(e) => e.preventDefault()}
                    type="submit" 
                    className="text-sm px-2 py-1 rounded-md border border-transparent bg-black dark:bg-white text-white dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white hover:border-black dark:hover:border-gray-400 transition ease-in-out duration-200 focus:outline-none font-medium">
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}