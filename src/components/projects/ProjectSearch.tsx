import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { classNames } from '~/utils/classNames'

const ProjectSearch: React.FC = () => {
  return (
    <div className="sticky top-0">
      <div className="relative flex items-center">
        <div className="absolute pl-4">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className={classNames(
            'pl-11 w-full bg-gray-100 dark:bg-gray-800 focus:bg-white',
            'rounded-lg border-0 py-2 focus:ring-2 focus:ring-inset transition',
            'ease-in-out duration-150 dark:text-white disabled:cursor-not-allowed',
            'disabled:opacity-50 ring-gray-200 focus:ring-blue-twitter'
          )}
          placeholder="Search Project"
        />
      </div>
    </div>
  )
}

export default ProjectSearch
