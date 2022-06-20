import React from 'react'
import Image from 'next/image'
import DialogBox from '../DialogBox'
import { useForm } from 'react-hook-form'
import { Dialog } from '@headlessui/react'
import { classNames } from '~/utils/classNames'

type Props = {
  isOpen: boolean
  actions: any
  user: any
}

const ProjectUserProfileModal: React.FC<Props> = (props) => {
  const { isOpen, actions, user } = props
  const { handleUpdateUser, closeUserModal } = actions

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      display_name: '',
      email: ''
    }
  })

  return (
    <DialogBox isOpen={isOpen} closeModal={closeUserModal}>
      <Dialog.Panel
        className={classNames(
          'w-full max-w-md transform overflow-hidden rounded-2xl',
          'bg-white dark:bg-dark-dim p-6 text-left align-middle shadow-xl transition-all'
        )}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-[128px] h-[128px] z-10">
            <Image
              src={user?.avatarUrl?.split('?r=g&default=blank')?.toString()}
              layout="fill"
              className="rounded-full shadown-lg"
              quality={100}
              alt="avatar"
            />
          </div>
          <button
            type="button"
            className={classNames(
              'inline-block px-2 py-1.5 font-medium',
              'text-xs leading-tight rounded',
              'border dark:border-gray-500 hover:bg-gray-50',
              'transition duration-150 ease-in-out',
              'active:bg-gray-100 dark:hover:bg-blue-500',
              'dark:hover:border-transparent'
            )}
          >
            Change Avatar
          </button>
        </div>
        <form className="mt-4" onSubmit={handleSubmit(handleUpdateUser)}>
          <div>
            <input
              type="text"
              disabled={isSubmitting}
              placeholder="Enter Name"
              className={classNames(
                'mt-1 block w-full border-none h-11 rounded-xl shadow-lg',
                'focus:ring-0 transition ease-in-out duration-150',
                'disabled:cursor-not-allowed disabled:opacity-50',
                'text-black dark:text-white dark:bg-gray-800',
                errors?.display_name
                  ? 'bg-red-100'
                  : 'bg-gray-100 hover:bg-blue-100 focus:bg-blue-100'
              )}
              {...register('display_name', {
                required: true,
                maxLength: 20,
                minLength: 4
              })}
              defaultValue={user?.displayName}
              defaultChecked={user?.displayName}
            />
            <div className="space-y-0.5 ml-1.5">
              {errors.display_name?.type === 'required' && (
                <span className="text-xs text-red-500 font-medium">Name is required</span>
              )}
              {errors.display_name?.type === 'maxLength' && (
                <span className="text-xs text-red-500 font-medium">
                  Should have max length of 20
                </span>
              )}
              {errors.display_name?.type === 'minLength' && (
                <span className="text-xs text-red-500 font-medium">
                  Name should not less then 4 length
                </span>
              )}
            </div>
          </div>

          <div className="mt-4">
            <input
              type="email"
              disabled={isSubmitting}
              placeholder="Enter Email"
              className={classNames(
                'mt-1 block w-full border-none h-11 rounded-xl shadow-lg',
                'focus:ring-0 transition ease-in-out duration-150',
                'disabled:cursor-not-allowed disabled:opacity-50',
                'text-black dark:text-white dark:bg-gray-800',
                errors?.email ? 'bg-red-100' : 'bg-gray-100 hover:bg-blue-100 focus:bg-blue-100'
              )}
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              defaultValue={user?.email}
              defaultChecked={user?.email}
            />
            <div className="space-y-0.5 ml-1.5">
              {errors.email?.type === 'required' && (
                <span className="text-xs text-red-500 font-medium">Email is required</span>
              )}
              {errors.email?.message && (
                <span className="text-xs text-red-500 font-medium">{errors.email?.message}</span>
              )}
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={classNames(
                'bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner',
                'focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105',
                'disabled:cursor-not-allowed disabled:opacity-50'
              )}
            >
              Save
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </DialogBox>
  )
}

export default ProjectUserProfileModal
