import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { Menu } from '@headlessui/react'
import { ISocialLink } from '~/mock/type'
import ActiveLink from '~/utils/ActiveLink'
import { BsThreeDots } from 'react-icons/bs'
import { classNames } from '~/utils/classNames'
import Scrollbar from 'react-smooth-scrollbar'
import ThemeChanger from '~/utils/ThemeChanger'
import { LogoIcon, SoundIcon } from '~/utils/Icons'
import { navigations, socialLinks } from '~/mock/data'
import MessengerCustomerChat from 'react-messenger-customer-chat'

interface LayoutProps {
  headTitle: string
  metaDescription?: string
  className?: string
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children, headTitle, metaDescription, className }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <div className="font-sans antialiased flex flex-col md:flex-row justify-between w-full min-h-screen h-screen bg-white text-black dark:bg-dark-dim dark:text-white transition ease-in-out duration-700">
        {/* First Flex Column */}
        <div className="flex items-center flex-row md:flex-col justify-between h-auto md:h-full pb-3 border-b border-gray-200 dark:border-gray-600 md:border-0 px-4 py-4 md:py-12 md:px-10">
          <div className="flex items-center space-x-2">
            <ActiveLink href="/" default="" current="">
              <a>
                <div className="flex-shrink-0">
                  <LogoIcon className="w-8 h-8 fill-current transform rotate-90" />
                </div>
              </a>
            </ActiveLink>
            <button className="focus:outline-none">
              <SoundIcon className="w-6 h-6 text-gray-200 dark:text-gray-500" />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex flex-col space-y-3">
              {/* My Social Links */}
              {socialLinks.map(({ Icon, href, text }, i) => (
                <motion.button
                  key={i}
                  whileHover={{ y: -3 }}
                  className="focus:outline-none rounded-full p-1 hover:shadow-lg"
                >
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon
                      className={`w-6 h-6 dark:text-gray-400 
                      dark:hover:text-white transition ease-in-out duration-200
                        ${text === 'github' && 'text-[#333]'}
                        ${text === 'linkedin' && 'text-[#0077B5]'}
                        ${text === 'stackoverflow' && 'text-[#f48024]'}`}
                    />
                  </a>
                </motion.button>
              ))}
            </div>
          </div>
          <div className="block md:hidden">
            <div className="flex items-center space-x-2">
              <ThemeChanger />
              <SocialMenu socialLinks={socialLinks} />
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <Scrollbar damping={0.1} thumbMinSize={20} className="flex-1">
          <main className={`${className}`}>{children}</main>
        </Scrollbar>

        {/* Navigation links */}
        <div className="flex flex-row md:flex-col items-end md:items-center justify-center md:justify-between md:h-full w-full md:w-14 border-t border-gray-200 dark:border-gray-600 md:border-0 px-4 py-4 md:py-12 md:px-14">
          <div className="hidden md:block">
            <ThemeChanger />
          </div>
          <div className="transform rotate-0 md:rotate-90 w-full md:w-auto">
            <nav>
              <ul className="flex items-center justify-between space-x-0 md:space-x-8">
                {navigations.map(({ text, href }, i) => (
                  <li key={i} className="w-1/4 text-center">
                    <Link href={href}>
                      <a
                        className={classNames(
                          'font-semibold text-xs hover:text-blue-twitter dark:hover:text-blue-twitter',
                          'tracking-widest transition ease-in-out duration-200',
                          router.pathname === href
                            ? 'text-blue-twitter'
                            : 'text-gray-500 dark:text-gray-400'
                        )}
                      >
                        {text}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            {/* {process.env.NODE_ENV === 'production' && (
              <MessengerCustomerChat
                pageId={process.env.MESSENGER_PAGE_ID}
                appId={process.env.MESSENGER_APP_ID}
              />
            )} */}
          </div>
        </div>
      </div>
    </>
  )
}

interface SocialMenuProps {
  socialLinks: Array<ISocialLink>
}

const SocialMenu: React.FC<SocialMenuProps> = ({ socialLinks }) => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="rounded-full focus:outline-none p-1 hover:shadow  transition ease-out duration-200 border border-transparent hover:border-gray-300">
            <BsThreeDots className="w-6 h-6" />
          </Menu.Button>
          {open && (
            <Menu.Items
              as={motion.div}
              static
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute right-3 top-14 flex flex-col space-y-1 py-1 px-1 z-50 bg-white dark:bg-dark-dim outline-none border dark:border-gray-600 rounded-lg shadow-lg"
            >
              {socialLinks.map(({ Icon, href, text }, i) => (
                <Menu.Item key={i}>
                  <motion.button
                    whileHover={{ y: -3 }}
                    className="focus:outline-none rounded-full p-1 hover:shadow-lg"
                  >
                    <Link href={href}>
                      <a href={href} target="_blank" rel="noreferrer">
                        <Icon
                          className={`w-6 h-6 dark:text-gray-400 
                          dark:hover:text-white transition ease-in-out duration-200
                            ${text === 'github' && 'text-[#333]'}
                            ${text === 'linkedin' && 'text-[#0077B5]'}
                            ${text === 'stackoverflow' && 'text-[#f48024]'}`}
                        />
                      </a>
                    </Link>
                  </motion.button>
                </Menu.Item>
              ))}
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  )
}

export default Layout
