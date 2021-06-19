import { FiSearch } from 'react-icons/fi'

export default function BlogHeader ({ count }) {
  return (
    <div className="mt-4 md:mt-10 space-y-5 pb-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-3xl md:text-5xl font-black">Blog ({ count })</h1>
      <div className="relative flex items-center max-w-lg">
        <div className="absolute pl-4">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          className="pl-11 w-full bg-gray-100 dark:bg-gray-800 focus:bg-white rounded-lg border-0 py-2 focus:ring-2 focus:ring-inset transition ease-in-out duration-150 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 ring-gray-200 focus:ring-blue-twitter" 
          placeholder="Search by post title"
        />
      </div>
    </div>
  )
}