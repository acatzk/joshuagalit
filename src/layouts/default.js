import { useState, useCallback } from 'react'
import ActiveLink from '~/components/ActiveLink'

export default function Layout ({ children }) {

  const [isAudio, setIsAudio] = useState() 
  const toggleAudio = useCallback(() => {
    setIsAudio(v => !v)
  }, [])

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
      text: 'Contact',
      href: '/contact'
    }
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
        </div>toggleAudio
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
              {links.map(({ text, href}, i) => (
                <li key={i} className="w-1/4 text-center">
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