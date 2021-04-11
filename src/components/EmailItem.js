import Moment from 'react-moment'
import { motion } from 'framer-motion'
import { format, register } from 'timeago.js'

export default function EmailItem ({ id, email, message, name, created_at, actions }) {

  const { handleDelete } = actions

  const handleDeleteEmail = () => {
    if (confirm('Are you sure you want to delete?')) {
      handleDelete({ id })
    }
  }
  
  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 transition ease-in-out duration-200 w-full">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img 
              className="h-10 w-10 rounded-full" 
              src="https://st3.depositphotos.com/1767687/16607/v/380/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg" 
              alt="" 
            />
          </div>
          <div className="ml-4">
            { name && <div className="text-sm font-medium text-gray-900 dark:text-white">{ name }</div>}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              { email }
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 max-w-lg">
        <div className="text-sm text-gray-900 dark:text-gray-400">{ message }</div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 flex flex-col dark:text-gray-400">
        { FormattedTimeAgo(created_at) } <span><Moment date={created_at} format="MMMM DD, YYYY" /></span>
      </td>
      <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
        <motion.button 
          whileHover={{ y: -3 }}
          onClick={handleDeleteEmail}
          className="focus:outline-none w-5 h-5"
        >
          <svg className="h-full w-full text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </motion.button>
      </td>
    </tr>
  )
}

function FormattedTimeAgo (date) {
  const localeFunc = (number, index, totalSec) => {
    return [
      ['just now', 'right now'],
      ['%s seconds ago', 'in %s seconds'],
      ['1 minute ago', '1 minute ago'],
      ['%s minutes ago', '%s minutes ago'],
      ['1 hour ago', '1 hour ago'],
      ['%s hours ago', '%s hours ago'],
      ['1 day ago', '1 day ago'],
      ['%s days ago', '%s days ago'],
      ['1 week ago', '1 week ago'],
      ['%s weeks ago', '%s weeks ago'],
      ['1 month ago', '1 month ago'],
      ['%s months ago', '%s months ago'],
      ['1 year ago', '1 year ago'],
      ['%s years ago', '%s years ago']
    ][index]
  }

  register('my-locale', localeFunc)
  
  return format(`${date}`, 'my-locale')
}

