import Link from 'next/link'
import Moment from 'react-moment'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

export default function BlogCard ({ author, avatar, slug, title, description, image, created_at }) {
  const { theme } = useTheme()
  
  return (
    <Link href={ `/blog/${slug}` }>
      <a>
        <motion.div 
          whileHover={{ y: -5 }}
          className="flex flex-col w-full border bg-white dark:bg-gray-800 dark:border-gray-800 overflow-hidden rounded-lg hover:shadow-2xl transition ease-in-out duration-200"
        >
          <div className="w-full max-w-3xl h-72 flex-shrink-0">
            <img className="w-full h-full" src={ image } alt={ image } />
          </div>
          <div className="flex flex-col justify-between px-6 py-4 h-[250px] space-y-6">
            <div className="space-y-2">
              <h1 className="font-semibold text-lg tracking-wide leading-relaxed line-clamp-2">{ title }</h1>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-4">{ description }</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0" data-tip={ author }>
                <img src={ avatar } className="w-7 h-7 rounded-full border dark:border-gray-600" />
                <ReactTooltip place="right" type={ theme === 'light' ? 'dark' : 'light' } effect="float" />
              </div>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400 line-clamp-1">
                <Moment date={created_at} format="DD MMMM, YYYY" />
              </p>
            </div>
          </div>
        </motion.div>
      </a>
    </Link>
  )
}