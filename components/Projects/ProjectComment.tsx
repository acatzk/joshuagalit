import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { GrGithub } from 'react-icons/gr'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { hasuraAdminClient } from 'lib/hasura-admin-client'
import { BiMessageRoundedDots, BiLinkExternal } from 'react-icons/bi'
import { INSERT_PROJECT_COMMENT_MUTATION } from 'graphql/mutations'

interface ProjectCommentProps {
  mutate: any
  projects: any
}

const ProjectCommentList = dynamic(() => import('./ProjectCommentList'), {
  ssr: false,
  loading: () => (
    <p className="flex items-center justify-center my-4">Loading...</p>
  ),
})

const ProjectComment: React.FC<ProjectCommentProps> = ({
  mutate,
  ...projects
}) => {
  const { addToast } = useToasts()

  const handleComment = async ({ name, comment }: any, e: any) => {
    const { id } = projects[0]
    const {
      insert_project_comments: {
        returning: { ...project },
      },
    } = await hasuraAdminClient.request(INSERT_PROJECT_COMMENT_MUTATION, {
      project_id: id,
      name,
      comment,
    })

    mutate({
      projects: [
        {
          ...project[0].project,
        },
      ],
    })

    e.target.reset()
    addToast('Successfully Commented!', {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  return (
    <div className="flex">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <ProjectCommentTabs {...projects[0]} />
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 space-y-4">
          <div className="flex space-x-3 py-4 px-2">
            <Avatar className="w-10 h-10 rounded-full" />
            <div className="rounded-b-xl rounded-r-xl px-4 py-4 bg-gray-100 dark:bg-gray-800 w-full transition ease-in-out duration-700">
              <ProjectCommentForm onSubmit={handleComment} />
            </div>
          </div>
        </div>
        <ProjectCommentList mutate={mutate} projects={projects} />
      </div>
    </div>
  )
}

const ProjectCommentForm = ({ onSubmit }: any) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({ mode: 'onChange' })

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            ref={register({ required: true })}
            disabled={isSubmitting}
            className="border-b-2 border-gray-300 dark:border-gray-700 focus:border-blue-twitter dark:focus:border-blue-twitter bg-transparent border-0 w-full py-1 focus:outline-none focus:ring-0 transition ease-in-out duration-200 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div>
          <textarea
            placeholder="Add a public comment..."
            name="comment"
            ref={register({ required: true })}
            disabled={isSubmitting}
            className="border-b-2 border-gray-300 dark:border-gray-700 focus:border-blue-twitter dark:focus:border-blue-twitter bg-transparent border-0 w-full py-1 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
      <div className="float-right">
        <button
          type="submit"
          disabled={!isDirty || !isValid}
          className="px-4 py-2 font-medium text-sm bg-blue-twitter text-white focus:outline-none rounded-full disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-400 disabled:text-gray-800"
        >
          {isSubmitting ? 'Commenting...' : 'Comment'}
        </button>
      </div>
    </form>
  )
}

interface ProjectCommentTabsProps {
  source_code_url: string
  demo_url: string
}

const ProjectCommentTabs: React.FC<ProjectCommentTabsProps> = ({
  source_code_url,
  demo_url,
}) => {
  return (
    <div>
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

const Avatar: React.FC<{ className: any }> = ({ className }) => {
  return (
    <div className="flex-shrink-0">
      <Image
        className={className}
        src="/images/default-avatar.jpg"
        alt="Default User Avatar"
        width={40}
        height={40}
        blurDataURL="/images/default-avatar.jpg"
        placeholder="blur"
        layout="responsive"
      />
    </div>
  )
}

export default ProjectComment
