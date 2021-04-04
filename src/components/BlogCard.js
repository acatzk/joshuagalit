import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

export default function BlogCard () {
  const { theme } = useTheme()
  return (
    <Link href="/">
      <a>
        <motion.div 
          whileHover={{ y: -4 }}
          className="flex flex-col w-full border bg-white dark:bg-gray-800 dark:border-gray-800 overflow-hidden rounded-lg hover:shadow-2xl transition ease-in-out duration-200"
        >
          <div className="w-full max-w-3xl h-72 flex-shrink-0">
            <img className="w-full h-full" src="https://hasura.io/blog/content/images/2020/10/25m_fund_raiser-1.png" />
          </div>
          <div className="px-6 py-4 h-full space-y-6">
            <div className="space-y-2">
              <h1 className="font-semibold text-lg tracking-wide leading-relaxed line-clamp-2">Annoucing our $25M Series B financing</h1>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-5">I'm happy to announce our $25M Series B financing led by Lightspeed (Techcrunch) with participation of our existing investors Vertex, Nexus, SAP.io & Strive.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0" data-tip="Joshua Galit">
                <img src="/images/my-picture-tiny.jpg" className="w-6 h-6 rounded-full border dark:border-gray-600" />
                <ReactTooltip place="right" type={ theme === 'light' ? 'dark' : 'light' } effect="float" />
              </div>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400 line-clamp-1">01 September, 2020</p>
            </div>
          </div>
        </motion.div>
      </a>
    </Link>
  )
}