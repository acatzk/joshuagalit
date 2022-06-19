import React, { useState } from 'react'
import { LogoIcon } from '~/utils/Icons'
import { useForm } from 'react-hook-form'
import { classNames } from '~/utils/classNames'
import { useAuthenticated } from '@nhost/react'
import ProjectAuthModal from './ProjectAuthModal'

type props = {
  actions: any
  isLoginPage: boolean
}

const ProjectPostForm: React.FC<props> = (props) => {
  const { actions, isLoginPage } = props
  const isAuthenticated = useAuthenticated()
  const [isOpen, setIsOpen] = useState(false)
  const { handleComment, handleSignAuth, handleAuthSwitchForm } = actions

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

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
      {!isAuthenticated && (
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center flex-col space-y-3">
            <LogoIcon className="w-8 h-8 fill-current transform rotate-90" />
            <span className="text-xs">Login to comment this project</span>
            <button
              type="button"
              className={classNames(
                'px-4 py-2 font-medium text-sm bg-blue-twitter text-white focus:outline-none',
                'disabled:cursor-not-allowed disabled:bg-gray-300 hover:shadow-lg',
                'dark:disabled:bg-gray-400 disabled:text-gray-800 rounded-lg'
              )}
              onClick={openModal}
            >
              Login
            </button>
            <ProjectAuthModal
              isOpen={isOpen}
              isLoginPage={isLoginPage}
              actions={{ closeModal, handleSignAuth, handleAuthSwitchForm }}
            />
          </div>
        </div>
      )}
      {isAuthenticated && (
        <form className="space-y-4" onSubmit={handleSubmit(handleComment)}>
          <div className="space-y-6">
            {/* <div>
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
            </div> */}
            <div>
              <textarea
                placeholder="Add a public comment..."
                {...register('comment', {
                  required: true
                })}
                disabled={isSubmitting}
                className={classNames(
                  'border-b-2 border-gray-300 dark:border-gray-700 focus:border-blue-twitter',
                  'dark:focus:border-blue-twitter bg-transparent border-0 w-full py-2 focus:outline-none',
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
      )}
    </div>
  )
}

export default ProjectPostForm
