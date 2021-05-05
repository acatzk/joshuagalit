import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function NotFound () {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center px-4 h-screen min-h-screen bg-white dark:bg-dark-dim text-gray-800 transition ease-in-out duration-700">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center">
          <h1 className="font-bold text-9xl -mr-6 dark:text-gray-100">4</h1>
          <div className="flex-shrink-0 z-50">
            <img className="w-48 h-48" src="/images/emoji.png" />
          </div>
          <h1 className="font-bold text-9xl -ml-8 dark:text-gray-100">4</h1>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl uppercase font-semibold dark:text-gray-200">Oops! Page not be found</h2>
          <div className="max-w-md text-center">
            <p className="text-gray-500 text-sm dark:text-gray-400">Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
          </div>
        </div>
        <div>
          <motion.button 
            whileHover={{ y: -4 }}
            onClick={() => router.push('/')} 
            className="px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-white font-semibold hover:shadow-xl transition ease-in-out duration-150 focus:outline-none">
            Back to Homepage
          </motion.button>
        </div>
      </div>
    </div>
  )
}