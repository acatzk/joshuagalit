import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { FiEye } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { GrGithub } from 'react-icons/gr'
import { VerifiedIcon } from 'utils/Icons'
import TimeAgoFormat from 'lib/react-timeago'
import { BiMessageRounded } from 'react-icons/bi'

interface ProjectItemProps {
  title: string
  description: string
  demo_url: string
  source_code_url: string
  project_image_url: string
  slug: string
  created_at: string
  views_aggregate: {
    aggregate: {
      viewsCount: number
    }
  }
  comments_aggregate: {
    aggregate: {
      commentsCount: number
    }
  }
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  demo_url,
  source_code_url,
  project_image_url,
  slug,
  created_at,
  views_aggregate,
  comments_aggregate
}) => {
  const router = useRouter()
  const { theme } = useTheme()

  const {
    aggregate: { viewsCount }
  } = views_aggregate
  const {
    aggregate: { commentsCount }
  } = comments_aggregate

  return (
    <div className="flex flex-col lg:flex-row py-6 w-full space-y-4 lg:space-y-0 space-x-0 lg:space-x-6">
      <Image
        src={project_image_url}
        width={370}
        height={230}
        alt="Project Image"
        layout="intrinsic"
        blurDataURL={project_image_url}
        placeholder="blur"
        onClick={() => router.push(`/projects/${slug}`)}
        className="cursor-pointer bg-gray-200 dark:bg-gray-800"
      />
      <div className="flex flex-col items-start w-full justify-between py-2 space-y-4 lg:space-y-0">
        <div className="space-y-2 lg:space-y-4 w-full">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <Link href={`/projects/${slug}`}>
                <a className="text-xl font-bold line-clamp-1 text-gray-900 dark:text-white hover:text-blue-twitter dark:hover:text-blue-twitter border-b border-gray-50 dark:border-gray-800 dark:hover:border-blue-twitter hover:border-blue-twitter transition ease-in duration-150">
                  {title}
                </a>
              </Link>
              <span className="text-blue-twitter">
                <VerifiedIcon className="w-4 h-4 fill-current" />
              </span>
              <span className="text-xs text-gray-500 line-clamp-1">
                <TimeAgoFormat date={created_at} />
              </span>
            </div>
            <div>
              {demo_url && (
                <a
                  href={demo_url}
                  target="_blank"
                  className="py-1 px-4 text-gray-500 text-sm border rounded 
                  border-gray-300 hover:border-black hover:text-black focus:outline-none 
                  transition ease-in-out duration-150
                  dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-200 dark:hover:border-gray-400"
                  rel="noreferrer"
                >
                  Visit
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-400 font-normal line-clamp-4">{description}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          {source_code_url && (
            <a
              href={source_code_url}
              target="_blank"
              className="flex items-center font-medium space-x-2 group group-hover:underline text-gray-600
               hover:text-black dark:text-gray-400 dark:hover:text-white transition ease-in-out duration-200"
              rel="noreferrer"
            >
              <span className="block">
                <GrGithub className="w-4 h-4" />
              </span>
              <span className="text-sm group-hover:underline line-clamp-1">
                {source_code_url.split('https://github.com/')}
              </span>
            </a>
          )}
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
      </div>
    </div>
  )
}

export default ProjectItem
