import { ThreeDotIcon } from '~/utils/Icons'

export default function ProjectCommentList () {
  return (
    [0,1,2,3,4,5].map((i) => (
      <div key={i} className="flex space-x-3 py-4 px-2">
        <Avatar className="w-9 h-9 rounded-full" />
        <div className="flex flex-col -my-1.5 rounded-xl px-4 py-3 bg-gray-100 dark:bg-gray-800 w-full transition ease-in-out duration-700">
          {/* Comment Header section */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <h1 className="font-medium text-gray-800 dark:text-white transition ease-in-out duration-700 line-clamp-1">Joshua Galit</h1>
              <span>&bull;</span>
              <span className="text-xs line-clamp-1">24 minutes ago</span>
            </div>
            <div>
              <button className="text-gray-500 focus:outline-none">
                <ThreeDotIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Actual comments */}
          <div>
            <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">Occaecat veniam officia nisi est do mollit veniam ex sunt enim. Cupidatat irure magna labore incididunt mollit cillum laborum labore non consequat incididunt laborum. Id sunt laborum excepteur esse elit pariatur officia fugiat incididunt ullamco. Exercitation est magna eu duis proident labore ea aliqua nisi aliqua.</p>
          </div>
        </div>
      </div>
    ))
  )
}

function Avatar ({ className }) {
  return (
    <div className="flex-shrink-0">
      <img className={className} src="/images/default-avatar.jpg" />
    </div>
  )
}