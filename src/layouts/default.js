import Link from 'next/link'
import { useState, useCallback } from 'react'
import ActiveLink from '~/components/ActiveLink'

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
  let socialLinks = [
    {
      icon: <svg className="w-6 h-6 fill-current hover:opacity-80 text-[#4267B2] transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path></svg>,
      href: 'https://www.facebook.com/acatzk'
    },
    {
      icon: <svg className="w-6 h-6 fill-current hover:opacity-80 text-[#1DA1F2] transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>,
      href: 'https://twitter.com/angryboy_19'
    },
    {
      icon: <svg className="w-6 h-6 fill-current hover:opacity-80 text-[#333] transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>,
      href: 'https://github.com/acatzk'
    },
    {
      icon: <svg className="w-6 h-6 fill-current hover:opacity-80 text-[#f48024] transition ease-in-out duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow icon</title><path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"></path></svg>,
      href: 'https://stackoverflow.com/users/14108225/joshua-galit'
    },
  ]

  return (
    // Main Layout
    <div className="flex flex-col md:flex-row justify-between w-full min-h-screen h-screen bg-white text-gray-700 p-4 md:p-12">

      {/* First Flex Column */}
      <div className="flex items-center flex-row md:flex-col justify-between h-auto md:h-full">
        <div className="flex items-center space-x-2">
          <ActiveLink href="/" current="">
            <a>
              <div className="flex-shrink-0">
                <LogoIcon className="w-8 h-8 fill-current" />
              </div>
            </a>
          </ActiveLink>
          <button onClick={toggleAudio} className="focus:outline-none">
            <SoundIcon isAudio={isAudio} className="w-6 h-6 text-gray-200" />
          </button>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col space-y-5">
            {socialLinks.map(({ icon, href, color }, i) => (
              <Link href={ href } key={i}>
                <a target="_blank" className="focus:outline-none rounded-full text-gray-400">
                  { icon }
                </a>
              </Link>
            ))}
          </div>
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
        <div className="transform rota-0 md:rotate-90 w-full md:w-auto">
          <nav>
            <ul className="flex items-center justify-between space-x-0 md:space-x-4">
              {navigations.map(({ text, href}, i) => (
                <li key={i} className="w-1/4 text-center">
                  <ActiveLink href={href} current="text-indigo-600 pb-2 border-b border-indigo-300 font-semibold">
                    <a className="font-normal text-gray-400">{ text }</a>
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