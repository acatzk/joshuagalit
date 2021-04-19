import Moment from 'react-moment'
import SponsorCard from '~/components/SponsorCard'
import { ViewsIcon, LikeIcon } from '~/utils/Icons'
import ProjectCommentForm from './ProjectCommentForm'

export default function ProjectPost ({ projects }) {
  const { 
    id, title, description, 
    created_at, project_image_url, 
    views_aggregate: { aggregate: { count } } 
  } = projects[0]

  return (
    <div key={id} className="px-4 space-y-6 pb-10">
      <div className="flex items-center justify-center">
        <h1 className="font-semibold text-2xl md:text-3xl tracking-wide">{ title }</h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            <img 
              className="w-7 h-7 border-gray-200 dark:border-gray-700 rounded-full" 
              src="/images/my-picture-tiny.jpg"
            />
          </div>
          <h1 className="text-sm tracking-tight text-gray-700 dark:text-gray-400 line-clamp-1">Joshua Galit / <Moment date={created_at} format="MMM DD, YYYY" /></h1>
        </div>
        <div className="flex flex-wrap items-center space-x-1.5 text-gray-500">
          <div className="flex flex-wrap items-center space-x-1">
            <span className="text-xs font-medium mt-0.5">{ count }</span>
            <ViewsIcon className="w-4 h-4" />
          </div>
          <span>&bull;</span>
          <button 
            data-tip="Like"
            className="flex items-center space-x-0.5 rounded-lg border border-transparent 
            border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 
            hover:text-black dark:hover:text-white px-1 py-0.5 focus:outline-none 
            transition ease-in-out duration-200">
            <span>
              <LikeIcon className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs">45</span>
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <h1 className="text-base text-gray-700 dark:text-gray-400">{ description }</h1>
        <div className="flex-shrink-0 overflow-hidden rounded-lg ring-2 ring-gray-400 dark:ring-gray-600">
          <img src={project_image_url} />
        </div>
      </div>
      <ProjectCommentForm {...projects} />
      <SponsorCard />
    </div>
  )
}