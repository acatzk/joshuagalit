import moment from 'moment'
import { ThreeDotIcon } from '~/utils/Icons'

export default function ProjectCommentList ({ projects }) {
  const { comments } = projects[0]

  return (
    comments.map(({ id, name, comment, created_at }) => (
      <div key={id} className="flex space-x-3 py-3 px-2">
        <Avatar name={name} className="w-9 h-9 rounded-full" />
        <div className="flex flex-col -my-1.5 rounded-xl px-4 py-3 bg-gray-100 dark:bg-gray-800 w-full transition ease-in-out duration-700">
          {/* Comment Header section */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <h1 className="font-medium text-gray-800 dark:text-white transition ease-in-out duration-700 line-clamp-1 capitalize">{ name }</h1>
              <span>&bull;</span>
              <span className="text-xs line-clamp-1">
                { moment(created_at).fromNow() }
              </span>
            </div>
            <div>
              <button className="text-gray-500 focus:outline-none">
                <ThreeDotIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Actual comments */}
          <div>
            <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
              { comment }
            </p>
          </div>
        </div>
      </div>
    ))
  )
}

function Avatar ({ className, name }) {
  return (
    <div className="flex-shrink-0">
      <img 
        className={className} 
        src={ 
          name === 'Joshua Galit' 
          ? '/images/my-picture-tiny.jpg' 
          : '/images/default-avatar.jpg' } 
      />
    </div>
  )
}