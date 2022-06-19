import React from 'react'
import { useForm } from 'react-hook-form'
import { classNames } from '~/utils/classNames'

type props = {
  actions: any
}

const ProjectPostForm: React.FC<props> = (props) => {
  const { actions } = props
  const { handleComment } = actions

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid }
  } = useForm({ mode: 'onChange' })

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
