import Moment from 'react-moment'
import ProjectTab from './ProjectTab'
import SponsorCard from '~/components/SponsorCard'

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
            <ViewsIcon />
          </div>
          <span>&bull;</span>
          <button 
            data-tip="Like"
            className="flex items-center space-x-0.5 rounded-lg border border-transparent 
            border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 
            hover:text-black dark:hover:text-white px-1 py-0.5 focus:outline-none 
            transition ease-in-out duration-200">
            <span>
              <LikeIcon />
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
      <ProjectTab {...projects} />
      <SponsorCard />
    </div>
  )
}

function ViewsIcon () {
  return (
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
    </svg>
  )
}

function LikeIcon () {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
    </svg>
  )
}