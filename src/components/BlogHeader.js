import { SearchIcon } from '~/utils/Icons'

export default function BlogHeader () {
  return (
    <div className="mt-4 md:mt-10 space-y-4 pb-6 border-b border-gray-200 dark:border-gray-700">
      <h1 className="font-primary text-3xl md:text-5xl font-black">Blog List</h1>
      <div className="relative flex items-center max-w-lg">
        <div className="absolute pl-4 pt-2.5">
          <SearchIcon className="h-7 w-7 fill-current text-gray-400" />
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