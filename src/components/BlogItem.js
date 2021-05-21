import moment from 'moment'
import Link from 'next/link'

export default function BlogCard ({ slug, title, publishedAt, summary }) {
  const formattedData = moment(publishedAt).format('MMMM DD, YYYY')

  return (
    <Link href={ `/${slug}` }>
      <a className="py-6 group">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold line-clamp-2 group-hover:text-blue-twitter transition ease-in-out duration-150">{ title }</h1>
            <span className="text-sm font-medium line-clamp-1 text-gray-500 dark:text-gray-400">{ formattedData }</span>
          </div>
          <p className="text-gray-700 dark:text-gray-400 line-clamp-2 max-w-2xl">{ summary }</p>
        </div>
      </a>
    </Link>
  )
}