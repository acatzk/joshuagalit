import Link from 'next/link'
import { useTheme } from 'next-themes'
import ReactTooltip from 'react-tooltip'
import { format, register } from 'timeago.js'
import styles from '~/styles/project.module.css'
import { VerifiedIcon, GitHubIcon, ViewsIcon, ChatIcon } from '~/utils/Icons'

export default function ProjectItem ({ title, description, demo_url, source_code_url, project_image_url, slug, created_at, views_aggregate, comments_aggregate }) {
  
  const { theme } = useTheme()
  const { aggregate: { viewsCount } } = views_aggregate
  const { aggregate: { commentsCount } } = comments_aggregate

  return (
    <div className="flex flex-col lg:flex-row py-6 w-full space-y-4 md:space-y-0 space-x-0 md:space-x-6">
      <Link href={ `/projects/${slug}` }>
        <a className={ `flex-shrink-0 w-auto h-72 h lg:w-72 md:h-48 relative ${styles.picture}` }>
          <img 
            src={ project_image_url } 
            className={ `absolute inset-0 w-full h-full object-cover ${styles.picture__thumbnail}` }
          />
        </a>
      </Link>
      <div className="flex flex-col items-start w-full justify-between py-2 space-y-4 md:space-y-0">
        <div className="space-y-2 md:space-y-4 w-full">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <Link href={ `/projects/${slug}` }>
                <a className="font-primary text-xl font-black line-clamp-1 text-gray-900 dark:text-white hover:text-blue-twitter dark:hover:text-blue-twitter border-b border-gray-50 dark:border-gray-800 dark:hover:border-blue-twitter hover:border-blue-twitter transition ease-in duration-150">
                  { title }
                </a>
              </Link>
              <span className="text-blue-twitter">
                <VerifiedIcon className="w-4 h-4 fill-current" />
              </span>
              <span className="text-xs text-gray-500 line-clamp-1">
                { FormattedTimeAgo(created_at) }
              </span>
            </div>
            <div>
              {demo_url && (
                <a 
                  href={demo_url} 
                  target="_blank" 
                  className="py-1 px-4 text-gray-500 text-sm border rounded 
                  border-gray-300 hover:border-black hover:text-black focus:outline-none 
                  transition ease-in-out duration-150
                  dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-200 dark:hover:border-gray-400">
                  Visit
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-400 font-normal line-clamp-4">{ description }</p>
        </div>
        <div className="flex items-center justify-between w-full">
          {source_code_url && (
            <a href={ source_code_url } target="_blank" className="flex items-center font-medium space-x-2 group group-hover:underline text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200">
              <span className="block">
                <GitHubIcon className="fill-current w-5 h-5" />
              </span>
              <span className="text-sm group-hover:underline line-clamp-1">
                { source_code_url.split('https://github.com/') }
              </span>
            </a>
          )}
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
          <ReactTooltip place="bottom" type={ theme === 'light' ? 'dark' : 'light' } effect="solid" />
        </div>
      </div>
    </div>
  )
}

function FormattedTimeAgo (date) {
  const localeFunc = (number, index, totalSec) => {
    return [
      ['just now', 'right now'],
      ['%s seconds', '%s seconds'],
      ['1m', '1m'],
      ['%sm', '%sm'],
      ['1h', '1h'],
      ['%sh', '%sh'],
      ['1d', '1d'],
      ['%sd', '%sd'],
      ['1w', '1w'],
      ['%sw', '%sw'],
      ['1 month', '1 month'],
      ['%s months', '%s months'],
      ['1y', '%y'],
      ['%sy', '%sy']
    ][index]
  }
  register('my-locale', localeFunc)
  
  return format(`${date.split('T')[0]}`, 'my-locale')
}