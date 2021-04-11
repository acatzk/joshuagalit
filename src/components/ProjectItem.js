import { format, register } from 'timeago.js'
import styles from '~/styles/project.module.css'

export default function ProjectItem ({ title, description, demo_url, source_code_url, project_image_url, created_at }) {
  return (
    <div className="flex flex-col md:flex-row py-6 w-full space-y-4 md:space-y-0 space-x-0 md:space-x-6">
      <a href={ demo_url } target="_blank" className={ `flex-shrink-0 w-auto h-72 h md:w-72 md:h-48 relative ${styles.picture}` }>
        <img 
          src={ project_image_url } 
          className={ `absolute inset-0 w-full h-full object-cover ${styles.picture__thumbnail}` }
        />
      </a>
      <div className="flex flex-col items-start w-full justify-between py-2 space-y-4 md:space-y-0">
        <div className="space-y-2 md:space-y-4 w-full">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <h1 className="text-xl font-semibold line-clamp-1 text-gray-900 dark:text-white">{ title }</h1>
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
        <div>
          {source_code_url && (
            <a href={ source_code_url } target="_blank" className="flex items-center font-medium space-x-2 group group-hover:underline text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200">
              <span className="block">
                <GitHubIcon />
              </span>
              <span className="text-sm group-hover:underline line-clamp-1">
                { source_code_url.split('https://github.com/') }
              </span>
            </a>
          )}
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
      ['1min', '1min'],
      ['%smins', '%smins'],
      ['1hr', '1hr'],
      ['%shrs', '%shrs'],
      ['1D', '1D'],
      ['%sD', '%sD'],
      ['1W', '1W'],
      ['%sW', '%sW'],
      ['1M', '1M'],
      ['%sM', '%sM'],
      ['1Y', 'YY'],
      ['%sY', '%sY']
    ][index]
  }

  register('my-locale', localeFunc)
  
  return format(`${date.split('T')[0]}`, 'my-locale')
}

function VerifiedIcon ({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <g>
        <path
          d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
        </path>
      </g>
    </svg>
  )
}

function GitHubIcon () {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
    </svg>
  )
}