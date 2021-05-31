import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu } from '@headlessui/react'
import ActiveLink from '~/utils/ActiveLink'
import { useState, useCallback } from 'react'
import Scrollbar from 'react-smooth-scrollbar'
import ThemeChanger from '~/utils/ThemeChanger'
import { navigations, socialLinks } from '~/static/default'
import MessengerCustomerChat from 'react-messenger-customer-chat'
import { ThreeDotIcon, LogoIcon, SoundIcon } from '~/utils/Icons'

export default function Layout ({ children }) {
  const [isAudio, setIsAudio] = useState() 
  const toggleAudio = useCallback(() => setIsAudio(v => !v), [])

  return (
    // Main Layout
    <div className="font-sans antialiased flex flex-col md:flex-row justify-between w-full min-h-screen h-screen bg-white text-black dark:bg-dark-dim dark:text-white transition ease-in-out duration-700">

      {/* First Flex Column */}
      <div className="flex items-center flex-row md:flex-col justify-between h-auto md:h-full pb-3 border-b border-gray-200 dark:border-gray-600 md:border-0 px-4 py-4 md:py-12 md:px-10">
        <div className="flex items-center space-x-2">
          <ActiveLink href="/" current="">
            <a>
              <div className="flex-shrink-0">
                <LogoIcon className="w-8 h-8 fill-current transform rotate-90" />
              </div>
            </a>
          </ActiveLink>
          <button onClick={toggleAudio} className="focus:outline-none">
            <SoundIcon isAudio={isAudio} className="w-6 h-6 text-gray-200 dark:text-gray-500" />
          </button>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col space-y-3">
            {/* My Social Links */}
            {socialLinks.map(({ icon, href }, i) => (
              <motion.button 
                key={i} 
                whileHover={{ y: -3 }} 
                className="focus:outline-none rounded-full p-1 hover:shadow-lg"
              >
                <Link href={ href }>
                  <a target="_blank">{ icon }</a>
                </Link>
              </motion.button>
            ))}
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex items-center space-x-2">
            <ThemeChanger />
            <SocialMenu socialLinks={socialLinks}/>
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      <Scrollbar
        damping={0.1}
        thumbMinSize={20}
        className="flex-1"
      >
        <div className="min-h-screen h-screen">
          { children }
        </div>
      </Scrollbar>

      {/* Navigation links */}
      <div className="flex flex-row md:flex-col items-end md:items-center justify-center md:justify-between md:h-full w-full md:w-14 border-t border-gray-200 dark:border-gray-600 md:border-0 px-4 py-4 md:py-12 md:px-16">
        <div className="hidden md:block">
          <ThemeChanger />
        </div>
        <div className="transform rotate-0 md:rotate-90 w-full md:w-auto">
          <nav>
            <ul className="flex items-center justify-between space-x-0 md:space-x-8">
              {navigations.map(({ text, href }, i) => (
                <li key={i} className="w-1/4 text-center">
                  <ActiveLink href={href} current="font-semibold text-blue-twitter">
                    <a className="text-xs tracking-widest hover:text-blue-twitter transition ease-in-out duration-200">
                      { text }
                    </a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          {process.env.NODE_ENV === 'production' && (
            <MessengerCustomerChat 
              pageId={process.env.MESSENGER_PAGE_ID}
              appId={process.env.MESSENGER_APP_ID}
            />
          )}
        </div>
      </div>

    </div>
  )
}

function SocialMenu ({ socialLinks }) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="rounded-full focus:outline-none p-1 hover:shadow  transition ease-out duration-200 border border-transparent hover:border-gray-300">
            <ThreeDotIcon className="w-6 h-6" />
          </Menu.Button>
          { open && (
            <Menu.Items 
              className="absolute right-3 top-14 flex flex-col space-y-1 py-1 px-1 z-50 bg-white dark:bg-dark-dim outline-none border dark:border-gray-600 rounded-lg shadow-lg"
            >
              {socialLinks.map(({ icon, href }, i) => (
                <Menu.Item key={i}>
                  <motion.button key={i} whileHover={{ y: -3 }} className="focus:outline-none rounded-full p-1 hover:shadow-lg">
                    <Link href={ href }>
                      <a target="_blank">{ icon }</a>
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