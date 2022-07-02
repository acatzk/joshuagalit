import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu } from '@headlessui/react'
import { useUserId } from '@nhost/react'
import { GiMicrophone } from 'react-icons/gi'
import { BiChevronDown } from 'react-icons/bi'
import { classNames } from '~/utils/classNames'
import { shortDateFormat } from '~/utils/shortDateFormat'

type Props = {
  id: string
  name: string
  comment: string
  created_at: string
  user: {
    id: string
    displayName: string
    avatarUrl: string
  }
  actions: any
}

const ProjectCommentItem: React.FC<Props> = (props) => {
  const { id, name, comment, created_at, user, actions } = props
  const { handleReport, handleDelete } = actions

  return (
    <div key={id} className="flex space-x-3 py-3 px-2">
      <div className="relative -mt-1">
        <Avatar
          name={name}
          user={user}
          className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800"
        />
      </div>
      <div className="w-full">
        <div
          className={classNames(
            'flex flex-col -my-1.5 rounded-3xl px-4 py-3 bg-gray-100',
            'dark:bg-gray-800 transition ease-in-out duration-700'
          )}
        >
          {/* Comment Header section */}
          <div className="flex items-start justify-between space-x-4">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {user?.displayName === 'Joshua Galit' && (
                <div className="flex items-center space-x-1">
                  <GiMicrophone className="w-3.5 h-3.5" />
                  <span className="text-xs">Author</span>
                </div>
              )}
              <h1
                className={classNames(
                  'font-semibold text-gray-700 dark:text-gray-200',
                  'transition ease-in-out duration-700 line-clamp-1 capitalize'
                )}
              >
                {user?.displayName}
              </h1>
            </div>
            <DropdownMenu actions={{ handleReport, handleDelete }} user={user} project_id={id} />
          </div>
          {/* Actual comments */}
          <div>
            <p className="text-sm tracking-wide text-gray-600 dark:text-white">{comment}</p>
          </div>
        </div>
        <div
          className={classNames(
            'ml-3 mt-3 text-xs flex items-center space-x-3 text-gray-500 dark:text-gray-400',
            'font-medium'
          )}
        >
          <span>{shortDateFormat(created_at)}</span>
          <button className="hover:underline">Like</button>
          <button className="hover:underline">Reply</button>
        </div>
      </div>
    </div>
  )
}

type AvatarProps = {
  className: any
  name: string
  user: {
    id: string
    avatarUrl: string
  }
}

const Avatar: React.FC<AvatarProps> = ({ className, user }) => {
  return (
    <div className="flex-shrink-0">
      <Image
        className={className}
        src={user?.avatarUrl?.split('?r=g&default=blank')?.toString()}
        alt="Comment User Avatar"
        objectFit="cover"
        width={36}
        height={36}
        layout="intrinsic"
      />
    </div>
  )
}

type DropDownMenuProps = {
  actions: any
  user: {
    id: string
  }
  project_id: string
}

const DropdownMenu: React.FC<DropDownMenuProps> = (props) => {
  const userId = useUserId()

  const {
    project_id,
    actions: { handleReport, handleDelete },
    user
  } = props

  const isAuthor = user?.id === userId

  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="text-gray-500 focus:outline-none">
              <BiChevronDown className="w-5 h-5" />
            </Menu.Button>
            {open && (
              <Menu.Items
                as={motion.div}
                static
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={classNames(
                  'absolute right-0 top-0 flex flex-col z-50 overflow-hidden divide-y divide-gray-200',
                  'dark:divide-gray-600 bg-white dark:bg-gray-800 outline-none border',
                  'dark:border-gray-700 rounded-lg shadow-lg'
                )}
              >
                <Menu.Item>
                  <button
                    onClick={() => handleReport(project_id)}
                    className={classNames(
                      'text-sm px-4 py-1 text-gray-600 dark:text-gray-400',
                      'focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900',
                      ' transition ease-in-out duration-200'
                    )}
                  >
                    Report
                  </button>
                </Menu.Item>
                {isAuthor && (
                  <Menu.Item>
                    <button
                      onClick={() => handleDelete(project_id)}
                      className={classNames(
                        'text-sm px-4 py-1 text-gray-600 dark:text-gray-400',
                        'focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900',
                        ' transition ease-in-out duration-200'
                      )}
                    >
                      Delete
                    </button>
                  </Menu.Item>
                )}
                <Menu.Item>
                  <button
                    onClick={() => !open}
                    className={classNames(
                      'text-sm px-4 py-1 text-gray-600 dark:text-gray-400',
                      ' focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900',
                      'transition ease-in-out duration-200'
                    )}
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

export default ProjectCommentItem
