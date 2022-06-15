import React, { useState } from 'react'
import { classNames } from '~/utils/classNames'
import MyDayLoginWithModal from './MyDayLoginModal'

const MyDayHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={classNames(
        'w-full py-3 px-4 mt-2 md:mt-8 border-b',
        'border-gray-200 dark:border-gray-700'
      )}
    >
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-end space-x-2">
          <h1 className="font-extrabold text-2xl">MyDay</h1>
          <span
            className={classNames('text-xl font-semibold text-red-600 border-b border-red-100')}
          >
            On Development
          </span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
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
          <MyDayLoginWithModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  )
}

export default MyDayHeader
