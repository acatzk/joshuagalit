import React from 'react'
import Image from 'next/image'
import { BsDownload } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { FiMail, FiUsers } from 'react-icons/fi'
import { classNames } from '~/utils/classNames'
import { abbreviateNumber } from '~/utils/abbreviateNumber'

type Props = {
  githubDetails?: any
}

const Sidebar: React.FC<Props> = (props) => {
  const { githubDetails } = props

  return (
    <div className="flex flex-col space-y-5">
      <div className="space-y-3">
        <div className="space-y-5">
          <Avatar src={githubDetails?.avatar_url} alt="User Avatar" />
          <h1 className="text-2xl font-bold tracking-wide">
            Joshua<span className="text-blue-twitter"> Galit</span>
          </h1>
        </div>
        <div>
          <a
            href="/files/my-resume.pdf"
            download="Joshua Galit Resume.pdf"
            className={classNames(
              'flex items-center justify-center space-x-2 w-full py-1 px-1',
              'bg-gray-100 dark:bg-dark-dim outline-none border',
              'dark:border-gray-600 rounded-lg focus:outline-none focus:shadow-sm'
            )}
          >
            <BsDownload className="w-4 h-4" />
            <span className="font-medium">Download Resume</span>
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <GitHubLink githubDetails={githubDetails} />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <GoLocation className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm">Bato, Leyte</span>
        </div>
        <div className="flex items-center space-x-2">
          <FiMail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span
            onClick={() => window.open('mailto:joshuaimalay@gmail.com')}
            className={classNames(
              'cursor-pointer text-sm hover:text-blue-twitter',
              'hover:underline transition ease-in-out duration-150'
            )}
          >
            joshuaimalay@gmail.com
          </span>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700"></div>
      <div className="flex items-start flex-col space-y-2">
        <h1 className="font-semibold text-sm text-gray-600 dark:text-gray-300">Organizations</h1>
        <a href="https://github.com/acatzk" target="_blank" rel="noreferrer">
          <Image
            src="https://avatars.githubusercontent.com/u/73483861?s=60&v=4"
            width={35}
            height={35}
            layout="fixed"
            alt="Organization Logo"
            className="rounded-lg"
          />
        </a>
      </div>
    </div>
  )
}

type AvatarProps = {
  src: string
  alt?: string
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, alt } = props

  return (
    <div className="border-2 border-gray-400 dark:border-gray-600 rounded-full">
      <Image
        src={src ? src : 'https://avatars.githubusercontent.com/u/38458781?v=4'}
        alt={alt}
        width={220}
        height={220}
        quality={100}
        blurDataURL={src}
        layout="responsive"
        className="rounded-full bg-gray-200 dark:bg-gray-800"
      />
    </div>
  )
}

const GitHubLink = (props) => {
  const { githubDetails } = props

  return (
    <div className="flex items-center space-x-2">
      <a
        href="https://github.com/acatzk"
        className="group flex items-center space-x-1"
        target="_blank"
        rel="noreferrer"
      >
        <FiUsers
          className={classNames(
            'w-4 h-4 text-gray-500 dark:text-gray-400',
            'group-hover:text-blue-twitter transition ease-in-out duration-150'
          )}
        />
        <span
          className={classNames(
            'text-sm font-medium text-gray-800 dark:text-white',
            'group-hover:text-blue-twitter transition ease-in-out duration-150'
          )}
        >
          {abbreviateNumber(githubDetails?.followers)}
        </span>
        <span
          className={classNames(
            'text-xs text-gray-600 dark:text-gray-400',
            'group-hover:text-blue-twitter transition ease-in-out duration-150'
          )}
        >
          followers
        </span>
      </a>
      <span>&middot;</span>
      <a
        href="https://github.com/acatzk"
        className="group flex items-center space-x-1"
        target="_blank"
        rel="noreferrer"
      >
        <span
          className={classNames(
            'text-sm font-medium text-gray-800 dark:text-white',
            'group-hover:text-blue-twitter transition ease-in-out duration-150'
          )}
        >
          {abbreviateNumber(githubDetails?.following)}
        </span>
        <span
          className={classNames(
            'text-xs text-gray-600 dark:text-gray-400',
            'group-hover:text-blue-twitter transition ease-in-out duration-150'
          )}
        >
          following
        </span>
      </a>
    </div>
  )
}

export default Sidebar
