import Moment from 'react-moment'
import { motion } from 'framer-motion'
import { TrashIcon } from '~/utils/Icons'
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
              src="/images/default-avatar.jpg" 
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
          <TrashIcon className="h-full w-full text-gray-600 dark:text-gray-400" />
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

