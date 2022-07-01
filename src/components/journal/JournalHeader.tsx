import AuthModal from '../AuthModal'
import React, { useState } from 'react'
import { useAuthenticated } from '@nhost/react'
import { classNames } from '~/utils/classNames'

type Props = {
  actions: any
  isLoginPage: boolean
}

const JournalHeader: React.FC<Props> = (props) => {
  const { isLoginPage, actions } = props
  const { handleLogout, handleSignAuth, handleAuthSwitchForm } = actions

  const [isOpen, setIsOpen] = useState(false)
  const isAuthenticated = useAuthenticated()

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return (
    <header
      className={classNames(
        'w-full py-3 px-4 mt-2 md:mt-8 border-b',
        'border-gray-200 dark:border-gray-700'
      )}
    >
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-end space-x-2">
          <h1 className="font-extrabold text-2xl">
            Work <span className="tracking-wide text-blue-twitter">Journal</span>
          </h1>
        </div>
        <div>
          {!isAuthenticated ? (
            <>
              <button
                type="button"
                onClick={openModal}
                className={classNames(
                  'text-base font-medium px-4 py-1 rounded-md focus:outline-none',
                  'border border-black bg-transparent text-black',
                  'hover:text-white hover:bg-black hover:border-black',
                  'dark:text-white dark:bg-transparent dark:hover:bg-white dark:border-white dark:hover:text-black',
                  'transition ease-in-out duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                Sign In
              </button>
              <AuthModal
                isOpen={isOpen}
                isLoginPage={isLoginPage}
                actions={{ closeModal, handleSignAuth, handleAuthSwitchForm }}
              />
            </>
          ) : (
            <div>
              <button
                type="button"
                onClick={handleLogout}
                className={classNames(
                  'text-base font-medium px-4 py-1 rounded-md focus:outline-none',
                  'border border-black bg-transparent text-black',
                  'hover:text-white hover:bg-black hover:border-black',
                  'dark:text-white dark:bg-transparent dark:hover:bg-white dark:border-white dark:hover:text-black',
                  'transition ease-in-out duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default JournalHeader
