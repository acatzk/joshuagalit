import React from 'react'
import { mutate } from 'swr'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu } from '@headlessui/react'
import { BsThreeDots } from 'react-icons/bs'
import TimeAgoFormat from '~/lib/react-timeago'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'
import { DELETE_PROJECT_COMMENT_BY_ID_MUTATION } from '~/graphql/mutations'
import { toast } from 'react-toastify'
import { nhost } from '~/lib/nhost-client'

interface ProjectCommentListProps {
  projects: any
}

interface ProjectCommentItemProps {
  id: string
  name: string
  comment: string
  created_at: string
}

const ProjectCommentList: React.FC<ProjectCommentListProps> = ({ projects }) => {
  if (!projects) return <p>No comment yet</p>

  const { comments } = projects[0]
  return comments.map((comment: any, i: number) => <ProjectCommentItem key={i} {...comment} />)
}

const ProjectCommentItem: React.FC<ProjectCommentItemProps> = (props) => {
  const { id, name, comment, created_at } = props

  const handleDeleteComment = async () => {
    let isDelete = prompt('Confirm password to delete post!', '')

    if (isDelete === '' || isDelete === null) {
      return toast.warning('Please input admin password to delete this post!')
    }

    if (isDelete.toString() !== `${process.env.ADMINISTRATOR_PASS}`) {
      return toast.warning('You are unauthorized to delete the comment posted!')
    }

    const { data, error } = await nhost.graphql.request(DELETE_PROJECT_COMMENT_BY_ID_MUTATION, {
      id
    })

    if (data) {
      toast.success('Deleted Comment!')
    }
    if (error) {
      toast.error('Something went wrong!')
    }

    return mutate({ ...data })
  }

  return (
    <div key={id} className="flex space-x-3 py-3 px-2">
      <Avatar name={name} className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800" />
      <div className="flex flex-col -my-1.5 rounded-xl px-4 py-3 bg-gray-100 dark:bg-gray-800 w-full transition ease-in-out duration-700">
        {/* Comment Header section */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <h1 className="font-semibold text-gray-700 dark:text-gray-200 transition ease-in-out duration-700 line-clamp-1 capitalize">
              {name}
            </h1>
            <span>&bull;</span>
            <span className="text-xs line-clamp-1">
              <TimeAgoFormat date={created_at} />
            </span>
          </div>
          <DropdownMenu actions={{ handleDeleteComment }} />
        </div>
        {/* Actual comments */}
        <div>
          <p className="text-sm tracking-wide text-gray-600 dark:text-white">{comment}</p>
        </div>
      </div>
    </div>
  )
}

const Avatar: React.FC<{ className: any; name: string }> = ({ className, name }) => {
  return (
    <div className="flex-shrink-0">
      <Image
        className={className}
        src={name === 'Joshua Galit' ? '/images/my-avatar.jpg' : '/images/default-avatar.jpg'}
        alt="Comment User Avatar"
        width={36}
        height={36}
        layout="intrinsic"
      />
    </div>
  )
}

const DropdownMenu: React.FC<{ actions: any }> = (props) => {
  const {
    actions: { handleDeleteComment }
  } = props
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="text-gray-500 focus:outline-none">
              <BsThreeDots className="w-5 h-5" />
            </Menu.Button>
            {open && (
              <Menu.Items
                as={motion.div}
                static
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-0 flex flex-col z-50 overflow-hidden divide-y divide-gray-200 dark:divide-gray-600 bg-white dark:bg-gray-800 outline-none border dark:border-gray-700 rounded-lg shadow-lg"
              >
                <Menu.Item>
                  <button
                    onClick={handleDeleteComment}
                    className="text-sm px-4 py-1 text-gray-600 dark:text-gray-400 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900 transition ease-in-out duration-200"
                  >
                    Report
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="text-sm px-4 py-1 text-gray-600 dark:text-gray-400 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900 transition ease-in-out duration-200"
                  >
                    Cancel
                  </button>
                </Menu.Item>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  )
}

export default ProjectCommentList
