import React from 'react'
import { mutate } from 'swr'
import Image from 'next/image'
import { GrGithub } from 'react-icons/gr'
import { useForm } from 'react-hook-form'
import ProjectCommentList from './ProjectItem'
import { classNames } from '~/utils/classNames'
import { useToasts } from 'react-toast-notifications'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'
import { BiMessageRoundedDots, BiLinkExternal } from 'react-icons/bi'
import { INSERT_PROJECT_COMMENT_MUTATION } from '~/graphql/mutations'

type props = {}

const ProjectPostForm: React.FC<props> = () => {
  const { addToast } = useToasts()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid }
  } = useForm({ mode: 'onChange' })

  const handleComment = async (data, e) => {
    const { name, comment } = data
    // const { id } = projects[0]
    // const {
    //   insert_project_comments: {
    //     returning: { ...project }
    //   }
    // } = await hasuraAdminClient.request(INSERT_PROJECT_COMMENT_MUTATION, {
    //   project_id: id,
    //   name,
    //   comment
    // })

    // mutate({
    //   projects: [
    //     {
    //       ...project[0].project
    //     }
    //   ]
    // })

    e.target.reset()
    addToast("I'M STILL FIXING THE BUG SORRY FOR INCONVENIENCE", {
      appearance: 'warning',
      autoDismiss: true
    })
  }

  return (
    <div
      className={classNames(
        'inline-flex flex-col rounded-b-xl p-4 bg-gray-100 dark:bg-gray-800 w-full',
        'transition ease-in-out duration-700 border-b border-r border-l',
        'border-gray-200 dark:border-gray-700'
      )}
    >
      <form className="space-y-4" onSubmit={handleSubmit(handleComment)}>
        <div className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              {...register('name', {
                required: true
              })}
              disabled={isSubmitting}
              className={classNames(
                'border-b-2 border-gray-300 dark:border-gray-700 focus:border-blue-twitter',
                'dark:focus:border-blue-twitter bg-transparent border-0 w-full py-1 focus:outline-none',
                'focus:ring-0 transition ease-in-out duration-200 disabled:cursor-not-allowed disabled:opacity-50'
              )}
            />
          </div>
          <div>
            <textarea
              placeholder="Add a public comment..."
              {...register('comment', {
                required: true
              })}
              disabled={isSubmitting}
              className={classNames(
                'border-b-2 border-gray-300 dark:border-gray-700 focus:border-blue-twitter',
                'dark:focus:border-blue-twitter bg-transparent border-0 w-full py-1 focus:outline-none',
                'focus:ring-0 transition ease-in-out duration-200 disabled:cursor-not-allowed disabled:opacity-50'
              )}
            />
          </div>
        </div>
        <div className="float-right">
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className={classNames(
              'px-4 py-2 font-medium text-sm bg-blue-twitter text-white focus:outline-none',
              'rounded-full disabled:cursor-not-allowed disabled:bg-gray-300',
              'dark:disabled:bg-gray-400 disabled:text-gray-800'
            )}
          >
            {isSubmitting ? 'Commenting...' : 'Comment'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProjectPostForm
