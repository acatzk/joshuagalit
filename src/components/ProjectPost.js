import Moment from 'react-moment'
import ProjectComment from './ProjectComment'
import SponsorCard from '~/components/SponsorCard'
import { ChatIcon, ViewsIcon} from '~/utils/Icons'

export default function ProjectPost ({ projects, mutate }) {
  const { 
    id, title, description, 
    created_at, project_image_url, 
    views_aggregate: { aggregate: { viewsCount } },
    comments_aggregate: { aggregate: { commentsCount } }
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
              src="/images/my-avatar.jpg"
            />
          </div>
          <h1 className="text-sm tracking-tight text-gray-700 dark:text-gray-400 line-clamp-1">Joshua Galit / <Moment date={created_at} format="MMM DD, YYYY" /></h1>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <div className="flex items-center space-x-1 cursor-default" data-tip="Comments">
            <span className="text-xs font-medium mt-0.5 line-clamp-1">{ commentsCount }</span>
            <ChatIcon className="w-4 h-4" />
          </div>
          <span>&middot;</span>
          <div className="flex items-center space-x-1 cursor-default" data-tip="Views">
            <span className="text-xs font-medium mt-0.5 line-clamp-1">{ viewsCount }</span>
            <ViewsIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <h1 className="text-base text-gray-700 dark:text-gray-400">{ description }</h1>
        <div className="flex-shrink-0 overflow-hidden rounded-lg ring-2 ring-gray-400 dark:ring-gray-600">
          <img src={project_image_url} />
        </div>
      </div>
      <ProjectComment 
        {...projects} 
        mutate={mutate} 
      />
      <SponsorCard />
    </div>
  )
}