import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'
import ActiveLink from '~/components/ActiveLink'
import ThemeChanger from '~/components/ThemeChanger'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function Layout ({ children }) {

  const [isAudio, setIsAudio] = useState() 
  const toggleAudio = useCallback(() => {
    setIsAudio(v => !v)
  }, [])

  const navigations = [
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
      text: 'Contact',
      href: '/contact'
    }
  ]
  const socialLinks = [
    {
      icon: <svg className="w-6 h-6 fill-current text-[#4267B2] dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path></svg>,
      href: 'https://www.facebook.com/acatzk'
    },
    {
      icon: <svg className="w-6 h-6 fill-current text-[#1DA1F2] dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>,
      href: 'https://twitter.com/angryboy_19'
    },
    {
      icon: <svg className="w-6 h-6 fill-current text-[#333] dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>,
      href: 'https://github.com/acatzk'
    },
    {
      icon: <svg className="w-6 h-6 fill-current text-[#0077B5] dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>,
      href: 'https://www.linkedin.com/in/joshua-galit-7b6b84200/'
    },
    {
      icon: <svg className="w-6 h-6 fill-current text-[#ea4c89] dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"></path></svg>,
      href: 'https://dribbble.com/angryboy'
    },
    {
      icon: <svg className="w-6 h-6 fill-current text-[#f48024] dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"></path></svg>,
      href: 'https://stackoverflow.com/users/14108225/joshua-galit'
    }
  ]

  return (
    // Main Layout
    <div className="flex flex-col md:flex-row justify-between w-full min-h-screen h-screen bg-white text-black px-4 py-4 md:py-12 md:px-12 dark:bg-dark-dim dark:text-white">

      {/* First Flex Column */}
      <div className="flex items-center flex-row md:flex-col justify-between h-auto md:h-full pb-3 border-b border-gray-200 dark:border-gray-600 md:border-0">
        <div className="flex items-center space-x-2">
          <ActiveLink href="/" current="">
            <a>
              <div className="flex-shrink-0">
                <LogoIcon className="w-8 h-8 fill-current" />
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
              <motion.button key={i} whileHover={{ y: -3 }} className="focus:outline-none rounded-full p-1 hover:shadow-lg">
                <Link href={ href }>
                  <a target="_blank">{ icon }</a>
                </Link>
              </motion.button>
            ))}
          </div>
        </div>
        <div className="block md:hidden">
          <ThemeChanger />
        </div>
      </div>

      {/* Dynamic Content */}
      <PerfectScrollbar style={{ touchAction: "none" }}>
        <div className="overflow-y-auto flex h-auto md:h-full">
          { children }
        </div>
      </PerfectScrollbar>

      {/* Navigation links */}
      <div className="flex flex-row md:flex-col items-end md:items-center justify-center md:justify-between h-14 md:h-full w-full md:w-14 border-t border-gray-200 dark:border-gray-600 md:border-0">
        <div className="hidden md:block">
          <ThemeChanger />
        </div>
        <div className="transform rotate-0 md:rotate-90 w-full md:w-auto">
          <nav>
            <ul className="flex items-center justify-between space-x-0 md:space-x-8">
              {navigations.map(({ text, href }, i) => (
                <motion.li 
                  key={i} 
                  whileHover={{ y: -3 }}
                  className="w-1/4 text-center"
                >
                  <ActiveLink href={href} current="text-fuchsia-500 font-semibold">
                    <a className="text-xs tracking-widest hover:text-fuchsia-500 transition ease-in-out duration-200">{ text }</a>
                  </ActiveLink>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <div className="flex-shrink-0">
            <WavingHand />
          </div>
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

function WavingHand () {
  return (
    <button className="flex flex-col items-center focus:outline-none">
      <motion.div
        animate={{ rotate: 30 }}
        transition={{
          yoyo: Infinity,
          from: 0,
          duration: 0.4,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        <img className="w-10 h-10" src="/svgs/hand-wave.svg" />
      </motion.div>
      <span className="text-xs font-semibold">say hi.</span>
    </button>
  )
}