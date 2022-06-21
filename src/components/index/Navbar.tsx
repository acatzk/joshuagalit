import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navbarTabs } from '~/mock/data'
import { useState, useEffect } from 'react'
import { classNames } from '~/utils/classNames'

const Navbar: React.FC = () => {
  const { pathname } = useRouter()
  const [activeItem, setActiveItem] = useState<string>('')

  useEffect(() => {
    if (pathname === '/') setActiveItem('About')
    if (pathname === '/projects') setActiveItem('Projects')
    if (pathname === '/resume') setActiveItem('Resume')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex justify-between space-x-3 my-4">
      <span
        className={classNames(
          'font-bold text-blue-twitter text-lg md:text-2xl',
          'border-b border-blue-twitter border-opacity-40'
        )}
      >
        {activeItem}
      </span>
      <div className="space-x-5">
        {navbarTabs.map(({ title, route }, i) => (
          <NavItem
            key={i}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            title={title}
            route={route}
          />
        ))}
      </div>
    </div>
  )
}

type NavProps = {
  activeItem: string
  setActiveItem: Function
  title: string
  route: string
}

const NavItem: React.FC<NavProps> = (props) => {
  const { activeItem, setActiveItem, title, route } = props

  return activeItem !== title ? (
    <Link href={route}>
      <a
        onClick={() => setActiveItem(title)}
        className={classNames(
          'text-gray-600 dark:text-gray-300 font-medium',
          'hover:text-blue-twitter dark:hover:text-blue-twitter',
          'transition ease-in-out duration-150'
        )}
      >
        {title}
      </a>
    </Link>
  ) : null
}

export default Navbar
