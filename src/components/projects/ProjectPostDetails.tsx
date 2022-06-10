import React from 'react'
import Image from 'next/image'
import Moment from 'react-moment'
import { FiEye } from 'react-icons/fi'
import { GrGithub } from 'react-icons/gr'
import { BiLinkExternal, BiMessageRounded, BiMessageRoundedDots } from 'react-icons/bi'

type Props = {
  projects: {
    id: string
    title: string
    description: string
    created_at: string
    project_image_url: string
    source_code_url: string
    demo_url: string
    views_aggregate: {
      aggregate: { viewsCount: number }
    }
    comments_aggregate: {
      aggregate: { commentsCount: number }
    }
  }
}

const ProjectPostDetails: React.FC<Props> = (props) => {
  const { projects } = props

  const {
    id,
    title,
    description,
    created_at,
    project_image_url,
    source_code_url,
    demo_url,
    views_aggregate: {
      aggregate: { viewsCount }
    },
    comments_aggregate: {
      aggregate: { commentsCount }
    }
  } = projects

  return (
    <div key={id} className="space-y-5">
      <div className="-mt-0 md:-mt-12 flex items-center justify-center">
        <h1 className="font-semibold text-2xl md:text-3xl tracking-wide">{title}</h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-0 md:mt-6 flex items-center space-x-2">
          <div className="flex-shrink-0">
            <Image
              width={28}
              height={28}
              className="border-gray-200 dark:border-gray-700 rounded-full bg-gray-200 dark:bg-gray-800"
              src="/images/my-avatar.jpg"
              alt="My Profile Image"
              layout="intrinsic"
            />
          </div>
          <h1 className="text-sm tracking-tight text-gray-700 dark:text-gray-400 line-clamp-1">
            Joshua Galit / <Moment date={created_at} format="MMM DD, YYYY" />
          </h1>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <div className="flex items-center space-x-1 cursor-default">
            <span className="text-xs font-medium mt-0.5 line-clamp-1">{commentsCount}</span>
            <BiMessageRounded className="w-4 h-4" />
          </div>
          <span>&middot;</span>
          <div className="flex items-center space-x-1 cursor-default">
            <span className="text-xs font-medium mt-0.5 line-clamp-1">{viewsCount}</span>
            <FiEye className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <h1 className="text-base text-gray-700 dark:text-gray-400">{description}</h1>
        <div className="flex-shrink-0 overflow-hidden rounded-lg ring-1 ring-gray-300 dark:ring-gray-600 relative">
          <Image
            src={project_image_url}
            width={1000}
            height={550}
            alt={title}
            blurDataURL={project_image_url}
            placeholder="blur"
            layout="responsive"
            className="bg-gray-200 dark:bg-gray-800 transition ease-in-out duration-700"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Tabs source_code_url={source_code_url} demo_url={demo_url} />
      </div>
    </div>
  )
}

type TabProps = {
  source_code_url: string
  demo_url: string
}

const Tabs: React.FC<TabProps> = (props) => {
  const { source_code_url, demo_url } = props

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 space-y-4 w-full">
      <ul className="flex items-center text-sm">
        <li className="border-b-2 border-transparent border-blue-twitter px-3">
          <button className="flex items-center  space-x-2 focus:outline-none pb-2 font-semibold text-blue-twitter">
            <BiMessageRoundedDots className="w-5 h-5" />
            <span>Comments</span>
          </button>
        </li>
        {source_code_url && (
          <li className="border-b-2 border-transparent hover:border-gray-300 dark:hover:border-white transition ease-in duration-150 px-3">
            <a
              href={source_code_url}
              target="_blank"
              className="flex items-center space-x-2 pb-2 text-gray-600 dark:text-gray-400 dark:hover:text-white"
              rel="noreferrer"
            >
              <GrGithub className="w-4 h-4" />
              <span className="text-sm line-clamp-1">Source Code</span>
            </a>
          </li>
        )}
        {demo_url && (
          <li className="border-b-2 border-transparent hover:border-gray-300 dark:hover:border-white transition ease-in duration-100 px-3">
            <a
              href={demo_url}
              target="_blank"
              className="flex items-center space-x-2 pb-2 text-gray-600 dark:text-gray-400 dark:hover:text-white"
              rel="noreferrer"
            >
              <BiLinkExternal className="w-4 h-4" />
              <span className="text-sm line-clamp-1">Demo</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ProjectPostDetails
