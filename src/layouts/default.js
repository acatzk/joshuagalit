import ActiveLink from '~/components/ActiveLink'

export default function Layout ({ children }) {

  const links = [
    {
      text: 'About',
      href: '/'
    },
    {
      text: 'Portfolio',
      href: '/portfolio'
    },
    {
      text: 'Blog',
      href: '/blog'
    },
    {
      text: 'Journal',
      href: '/journal'
    },
    {
      text: 'Contact',
      href: '/contact'
    }
  ]

  return (
    <div className="flex flex-row justify-between w-full min-h-screen h-screen bg-white text-gray-700 p-4 md:p-10">
      <div className="flex flex-col justify-between h-full">
        <ActiveLink href="/" current="">
          <a>
            <div className="flex-shrink-0">
              <img className="w-16" src="/vercel.svg" />
            </div>
          </a>
        </ActiveLink>
        <div>
          social icons
        </div>
      </div>
      <div className="flex items-center justify-center flex-1">
        { children }
      </div>
      <div className="flex flex-col items-center justify-between h-full w-14">
        <div>
          dark mode
        </div>
        <div className="transform rotate-90">
          <nav>
            <ul className="flex space-x-4">
              {links.map(({ text, href}, i) => (
                <li key={i}>
                  <ActiveLink href={href} current="">
                    <a>{ text }</a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          dark mode
        </div>
      </div>
    </div>
  )
}