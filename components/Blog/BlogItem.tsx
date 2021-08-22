import React from 'react'
import moment from 'moment'
import Link from 'next/link'

interface BlogItemProps {
  slug: string
  title: string
  publishedAt: string
  summary: string
}

const BlogItem: React.FC<BlogItemProps> = ({ slug, title, publishedAt, summary }) => {
  const formattedData = moment(publishedAt).format('MMMM DD, YYYY')

  return (
    <Link href={`/blog/${slug}`}>
      <a className="py-6 group">
        <div className="flex flex-col">
          <div className="flex items-start justify-between space-x-3">
            <h1 className="text-lg font-semibold group-hover:text-blue-twitter transition ease-in-out duration-150">
              {title}
            </h1>
            <span className="text-sm font-medium line-clamp-1 text-gray-500 dark:text-gray-400 pt-1">
              {formattedData}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl">{summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogItem
