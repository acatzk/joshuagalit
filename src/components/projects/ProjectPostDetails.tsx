import React from 'react'
import Image from 'next/image'
import Moment from 'react-moment'
import { FiEye } from 'react-icons/fi'
import { GrGithub } from 'react-icons/gr'
import { classNames } from '~/utils/classNames'
import { useAuthenticated } from '@nhost/react'
import { AiOutlineLogout } from 'react-icons/ai'
import UserProfileModal from '../UserProfileModal'
import {
  BiLinkExternal,
  BiMessageRounded,
  BiMessageRoundedDots,
  BiUserCircle
} from 'react-icons/bi'

type Props = {
  user: any
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
  actions: any
  isOpenUserModal: boolean
}

const ProjectPostDetails: React.FC<Props> = (props) => {
  const { projects, actions, user, isOpenUserModal } = props
  const { handleLogout, handleUpdateUser, openUserModal, closeUserModal } = actions

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
              className={classNames(
                'border-gray-200 dark:border-gray-700 rounded-full',
                'bg-gray-200 dark:bg-gray-800'
              )}
              src="/images/my-avatar.jpg"
              alt="My Profile Image"
              layout="intrinsic"
            />
          </div>
          <h1
            className={classNames(
              'text-sm tracking-tight text-gray-700',
              'dark:text-gray-400 line-clamp-1'
            )}
          >
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
        <div
          className={classNames(
            'flex-shrink-0 overflow-hidden rounded-lg ring-1',
            'ring-gray-300 dark:ring-gray-600 relative'
          )}
        >
          <Image
            src={project_image_url}
            width={1000}
            height={550}
            alt={title}
            blurDataURL={project_image_url}
            placeholder="blur"
            layout="responsive"
            className={classNames(
              'bg-gray-200 dark:bg-gray-800',
              'transition ease-in-out duration-700'
            )}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Tabs
          user={user}
          demo_url={demo_url}
          source_code_url={source_code_url}
          isOpenUserModal={isOpenUserModal}
          actions={{ handleLogout, handleUpdateUser, openUserModal, closeUserModal }}
        />
      </div>
    </div>
  )
}

type TabProps = {
  source_code_url: string
  demo_url: string
  actions: any
  user: any
  isOpenUserModal: boolean
}

const Tabs: React.FC<TabProps> = (props) => {
  const isAuthenticated = useAuthenticated()
  const { source_code_url, demo_url, actions, user, isOpenUserModal } = props
  const { handleLogout, handleUpdateUser, openUserModal, closeUserModal } = actions

  return (
    <div className={classNames('border-b border-gray-200 dark:border-gray-700 space-y-4 w-full')}>
      <ul className="flex flex-wrap items-center text-sm">
        <li className="border-b-2 border-transparent border-blue-twitter px-3">
          <button
            className={classNames(
              'flex items-center  space-x-2 focus:outline-none',
              'pb-2 font-semibold text-blue-twitter'
            )}
          >
            <BiMessageRoundedDots className="w-5 h-5" />
            <span>Comments</span>
          </button>
        </li>
        {source_code_url && (
          <li
            className={classNames(
              'border-b-2 border-transparent hover:border-gray-300',
              'dark:hover:border-white transition ease-in duration-150 px-3'
            )}
          >
            <a
              href={source_code_url}
              target="_blank"
              className={classNames(
                'flex items-center space-x-2 pb-2 text-gray-600',
                'dark:text-gray-400 dark:hover:text-white'
              )}
              rel="noreferrer"
            >
              <GrGithub className="w-4 h-4" />
              <span className="text-sm line-clamp-1">Source Code</span>
            </a>
          </li>
        )}
        {demo_url && (
          <li
            className={classNames(
              'border-b-2 border-transparent hover:border-gray-300',
              'dark:hover:border-white transition ease-in duration-100 px-3'
            )}
          >
            <a
              href={demo_url}
              target="_blank"
              className={classNames(
                'flex items-center space-x-2 pb-2 text-gray-600',
                'dark:text-gray-400 dark:hover:text-white'
              )}
              rel="noreferrer"
            >
              <BiLinkExternal className="w-4 h-4" />
              <span className="text-sm line-clamp-1">Demo</span>
            </a>
          </li>
        )}
        {isAuthenticated && (
          <>
            <>
              <li
                className={classNames(
                  'border-b-2 border-transparent hover:border-gray-300',
                  'dark:hover:border-white transition ease-in duration-100 px-3'
                )}
              >
                <button
                  type="button"
                  onClick={openUserModal}
                  className={classNames(
                    'flex items-center space-x-2 pb-2 text-gray-600',
                    'dark:text-gray-400 dark:hover:text-white'
                  )}
                >
                  <BiUserCircle className="w-4 h-4" />
                  <span className="text-sm line-clamp-1">Profile</span>
                </button>
              </li>
              <UserProfileModal
                user={user}
                isOpen={isOpenUserModal}
                actions={{ openUserModal, closeUserModal, handleUpdateUser }}
              />
            </>
            <li
              className={classNames(
                'border-b-2 border-transparent hover:border-gray-300',
                'dark:hover:border-white transition ease-in duration-100 px-3'
              )}
            >
              <button
                type="button"
                className={classNames(
                  'flex items-center space-x-2 pb-2 text-gray-600',
                  'dark:text-gray-400 dark:hover:text-white'
                )}
                onClick={handleLogout}
              >
                <AiOutlineLogout className="w-4 h-4" />
                <span className="text-sm line-clamp-1">Logout</span>
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default ProjectPostDetails
