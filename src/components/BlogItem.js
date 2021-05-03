import Link from 'next/link'
import { useTheme } from 'next-themes'
import ReactTooltip from 'react-tooltip'
import { ViewsIcon } from '~/utils/Icons'

export default function BlogCard ({ slug, title, summary }) {
  const { theme } = useTheme()
  
  return (
    <Link href={ `/${slug}` }>
      <a className="py-6 group">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold line-clamp-2 group-hover:text-blue-twitter transition ease-in-out duration-150">{ title }</h1>
            <div className="flex items-center space-x-1 cursor-default text-gray-500 dark:text-gray-400" data-tip="Views">
              <span className="text-xs font-medium mt-0.5 line-clamp-1">245</span>
              <ViewsIcon className="w-4 h-4" />
            </div>
            <ReactTooltip 
              place="bottom" 
              type={ theme === 'light' ? 'dark' : 'light' } 
              effect="solid" 
            />
          </div>
          <p className="text-gray-700 dark:text-gray-400 line-clamp-2 max-w-2xl">{ summary }</p>
        </div>
      </a>
    </Link>
  )
}