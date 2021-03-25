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
    // Main Layout
    <div className="flex flex-col md:flex-row justify-between w-full min-h-screen h-screen bg-white text-gray-700 p-4 md:p-10">

      {/* First Flex Column */}
      <div className="flex flex-row md:flex-col justify-between h-14 md:h-full">
        <ActiveLink href="/" current="">
          <a>
            <div className="flex-shrink-0">
              <img className="w-16" src="/vercel.svg" />
            </div>
          </a>
        </ActiveLink>
        <div className="hidden md:block">
          social icons
        </div>
        <div className="block md:hidden">
          dark mode
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="flex items-center justify-center flex-1">
        { children }
      </div>

      {/* Navigation links */}
      <div className="flex flex-row md:flex-col items-end md:items-center justify-center md:justify-between h-14 md:h-full w-full md:w-14">
        <div className="hidden md:block">
          dark mode
        </div>
        <div className="transform rota-0 md:rotate-90">
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
        <div className="hidden md:block">
          Say Hi
        </div>
      </div>

    </div>
  )
}