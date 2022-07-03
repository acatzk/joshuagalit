import React from 'react'
import { useToggle } from 'react-use'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { nhost } from '~/lib/nhost-client'
import { classNames } from '~/utils/classNames'
import ProjectFeedbackForm from './ProjectFeedbackForm'
import { INSERT_FEEDBACK_MUTATION } from '~/graphql/mutations'

const ProjectHeader: React.FC = () => {
  const [onModal, toggleModal] = useToggle(false)

  const handleFeedback = async (data, e) => {
    const { name, message, emoji } = data

    try {
      const { data, error } = await nhost.graphql.request(INSERT_FEEDBACK_MUTATION, {
        name,
        message,
        emoji
      })

      if (data) {
        toast.success('Your Feedback has been sent.')
      }
      if (error) {
        toast.error(`${error}`)
      }

      e.target.reset()
      toggleModal(false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-between px-4 pt-4 md:pt-10">
      <div className="flex flex-col">
        <h3 className="text-gray-900 text-lg font-bold dark:text-white">My Projects</h3>
        <p className="text-gray-600 text-sm dark:text-gray-500">Open source in GitHub</p>
      </div>
      <div className="relative">
        <button
          onClick={() => toggleModal(true)}
          className={classNames(
            'py-1 px-3 text-gray-500 text-sm border rounded focus:outline-none',
            'border-gray-300 hover:border-black hover:text-black',
            'transition ease-in-out duration-150 dark:text-gray-400 dark:border-gray-600',
            'dark:hover:text-gray-200 dark:hover:border-gray-400'
          )}
        >
          Feedback
        </button>
        {onModal && (
          <>
            <button
              onClick={() => toggleModal(false)}
              type="button"
              className="z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none"
            ></button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.2 }}
              className={classNames(
                'absolute z-40 right-0 shadow-2xl border border-gray-50 dark:border-gray-700',
                'bg-white dark:bg-dark-dim text-gray-900 dark:text-white rounded-lg w-72',
                'md:w-80 -mt-9 overflow-hidden'
              )}
            >
              <div className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">Feedback</div>
              <ProjectFeedbackForm actions={{ handleFeedback }} />
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectHeader
