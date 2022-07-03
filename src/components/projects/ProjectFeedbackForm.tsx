import Image from 'next/image'
import { emojis } from '~/mock/data'
import Loading from '~/utils/Loading'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { classNames } from '~/utils/classNames'
import { useAuthenticated, useUserData } from '@nhost/react'

type Props = {
  actions: any
}

const FeedbackForm: React.FC<Props> = (props) => {
  const user = useUserData()
  const isAuthenticated = useAuthenticated()

  const {
    actions: { handleFeedback }
  } = props

  const [emoji, setEmoji] = useState('amaze')
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user ? user?.displayName : '',
      message: '',
      emoji: 'amaze'
    }
  })

  return (
    <form onSubmit={handleSubmit(handleFeedback)} className="space-y-3">
      <div className="px-4">
        <input
          type="text"
          autoFocus
          disabled={isAuthenticated}
          placeholder="Name"
          {...register('name', {
            required: true
          })}
          className={classNames(
            'w-full text-sm rounded-lg border border-gray-400 focus:ring-0',
            'focus:border-gray-900 bg-white dark:bg-dark-dim',
            'dark:focus:border-gray-300 disabled:opacity-50',
            'disabled:cursor-not-allowed transition ease-in-out duration-150'
          )}
        />
        <div className="space-y-0.5 ml-1.5">
          {errors.name?.type === 'required' && (
            <span className="text-xs text-red-500 font-medium">Name is required</span>
          )}
        </div>
      </div>
      <div className="px-4 flex flex-col space-y-1">
        <textarea
          rows={4}
          cols={50}
          disabled={isSubmitting}
          placeholder="Your feedback..."
          {...register('message', {
            required: true
          })}
          className={classNames(
            'w-full text-sm rounded-lg border border-gray-400 focus:ring-0',
            'focus:border-gray-900 bg-white dark:bg-dark-dim',
            'dark:focus:border-gray-300 disabled:opacity-50',
            'disabled:cursor-not-allowed transition ease-in-out duration-150'
          )}
        ></textarea>
        {errors.message && (
          <span className="pl-1 text-xs text-red-500 font-medium pt-0.5">
            {errors.message.message}
          </span>
        )}
        <div className="space-y-0.5 ml-1.5">
          {errors.message?.type === 'required' && (
            <span className="text-xs text-red-500 font-medium">Message is required</span>
          )}
        </div>
      </div>
      <div
        className={classNames(
          'flex items-center justify-between px-3 border-t border-gray-200',
          'dark:border-gray-700 py-1.5 bg-gray-50 dark:bg-gray-800'
        )}
      >
        <div className="flex items-center space-x-3">
          {emojis.map(({ icon, text }, i) => (
            <div
              key={i}
              onClick={() => setEmoji(text)}
              className={classNames(
                emoji === text ? 'ring-2 ring-offset-2 ring-yellow-300 bg-transparent' : '',
                'relative h-[25px] w-[25px] cursor-pointer rounded-full bg-transparent p-1 dark:bg-gray-700',
                'focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition ease-in-out duration-150 transform hover:scale-110'
              )}
            >
              <input
                type="text"
                {...register('emoji')}
                onChange={(e) => setEmoji(e.target.value)}
                value={emoji}
                className="hidden w-5 h-5"
              />
              <Image layout="fill" src={icon} alt="Icon" />
            </div>
          ))}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`text-sm px-2 w-14 flex justify-center py-1 rounded-md border border-transparent bg-black dark:bg-white text-white transition ease-in-out duration-200 focus:outline-none font-medium disabled:opacity-50 disabled:cursor-not-allowed ${
            !isSubmitting
              ? 'dark:text-black hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white hover:border-black dark:hover:border-gray-400'
              : 'dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-white'
          }`}
        >
          {isSubmitting ? <Loading className="w-5 h-5 text-white dark:text-black" /> : 'Send'}
        </button>
      </div>
    </form>
  )
}

export default FeedbackForm
