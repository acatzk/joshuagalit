import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu } from '@headlessui/react'
import ActiveLink from '~/utils/ActiveLink'
import { useState, useCallback } from 'react'
import ThemeChanger from '~/utils/ThemeChanger'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { navigations, socialLinks } from '~/constants/default'
import MessengerCustomerChat from 'react-messenger-customer-chat'

export default function Layout ({ children }) {

  const [isAudio, setIsAudio] = useState() 
  const toggleAudio = useCallback(() => setIsAudio(v => !v), [])

  return (
    // Main Layout
    <div className="flex flex-col md:flex-row justify-between w-full min-h-screen h-screen bg-white text-black dark:bg-dark-dim dark:text-white transition ease-in-out duration-700">

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
      <PerfectScrollbar style={{ touchAction: "none" }} className="flex-1">
        <div className="flex h-auto md:h-full">
          { children }
        </div>
      </PerfectScrollbar>

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
        <div className="hidden md:block">
          <MessengerCustomerChat 
            pageId="104056078487972"
            appId="869801583598775"
          />
        </div>
      </div>

    </div>
  )
}

function LogoIcon ({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 30">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M5.65177 9.77559V0H0.00041008V15H5.65177L18.3067 9.27318H23.9997V0H18.3067V4.0481L5.65177 9.77559ZM24 30V15H18.3486L5.69368 20.7268H0V30H5.69368V25.9519L18.3486 20.2244V30H24Z">
      </path>
    </svg>
  )
}

function SoundIcon ({ className, isAudio }) {
  return (
    <svg className={className} viewBox="0 0 55 80" fill="currentColor">
      <g transform="matrix(1 0 0 -1 0 80)">
        <rect width="10" height="20" rx="3">
          <animate attributeName="height" begin="0s" dur="4.3s"
            values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear"
            repeatCount={ !isAudio ? 'indefinite' : ''}></animate>
        </rect>
        <rect x="15" width="10" height="80" rx="3">
          <animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear"
            repeatCount={ !isAudio ? 'indefinite' : ''}></animate>
        </rect>
        <rect x="30" width="10" height="50" rx="3">
          <animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50"
            calcMode="linear" repeatCount={ !isAudio ? 'indefinite' : ''}></animate>
        </rect>
        <rect x="45" width="10" height="30" rx="3">
          <animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear"
            repeatCount={ !isAudio ? 'indefinite' : ''}></animate>
        </rect>
      </g>
    </svg>
  )
}

function SocialMenu ({ socialLinks }) {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="rounded-full focus:outline-none p-1 hover:shadow  transition ease-out duration-200 border border-transparent hover:border-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </Menu.Button>
          { open && (
            <Menu.Items 
              as={motion.div}
              static
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.20 }}
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