import { SearchIcon } from '~/utils/Icons'
import ActiveLink from '~/utils/ActiveLink'

export default function BlogHeader () {

  const links = [
    {
      text: 'All',
      href: '/blog'
    },
    {
      text: 'Personal',
      href: '/blog/tagged/personal'
    },
    {
      text: 'Programming',
      href: '/blog/tagged/Programming'
    }
  ]

  return (
    <div className="flex flex-wrap items-center justify-center md:justify-between py-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 px-4 bg-white dark:bg-dark-dim transition ease-in-out duration-700">
      <nav>
        <ul className="flex flex-wrap items-center text-gray-400 space-x-6">
          {links.map(({ text, href }, i) => (
            <li key={i}>
              <ActiveLink href={ href } current="text-blue-twitter">
                <a className="font-medium hover:text-blue-twitter transition ease-in-out duration-150">{ text }</a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="relative flex items-center">
        <div className="absolute pl-4 pt-2.5">
          <SearchIcon className="h-7 w-7 fill-current text-gray-400" />
        </div>
        <input 
          type="text" 
          className="pl-11 w-full bg-gray-100 dark:bg-gray-800 focus:bg-white rounded-lg border-0 py-2 focus:ring-2 focus:ring-inset transition ease-in-out duration-150 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 ring-gray-200 focus:ring-blue-twitter" 
        />
      </div>
    </div>
  )
}