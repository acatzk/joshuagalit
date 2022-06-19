import DialogBox from '../DialogBox'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Dialog } from '@headlessui/react'
import { classNames } from '~/utils/classNames'

type Props = {
  isOpen: boolean
  closeModal: any
}

const ProjectAuthModal: React.FC<Props> = (props) => {
  const { isOpen, closeModal } = props
  let [isLoginPage, setIsLoginPage] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm()

  const handleSignAuth = () => {
    alert('Hello')
  }

  const handleAuthSwitchForm = () => setIsLoginPage((isLoginPage = !isLoginPage))

  return (
    <DialogBox isOpen={isOpen} closeModal={closeModal}>
      <Dialog.Panel
        className={classNames(
          'w-full max-w-md transform overflow-hidden rounded-2xl',
          'bg-white dark:bg-dark-dim p-6 text-left align-middle shadow-xl transition-all'
        )}
      >
        <label
          className={classNames(
            'block mt-3 text-lg text-gray-700 text-center font-semibold',
            'dark:text-white'
          )}
        >
          {isLoginPage ? 'Login' : 'Sign Up'}
        </label>
        <form className="mt-10" onSubmit={handleSubmit(handleSignAuth)}>
          {!isLoginPage && (
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
          )}

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
            <input
              type="password"
              disabled={isSubmitting}
              placeholder="Enter Password"
              className={classNames(
                'mt-1 block w-full border-none h-11 rounded-xl shadow-lg',
                'focus:ring-0 transition ease-in-out duration-150',
                'disabled:cursor-not-allowed disabled:opacity-50',
                'text-black dark:text-white dark:bg-gray-800',
                errors?.password ? 'bg-red-100' : 'bg-gray-100 hover:bg-blue-100 focus:bg-blue-100'
              )}
              {...register('password', {
                required: true,
                minLength: 4
              })}
            />
            <div className="space-y-0.5 ml-1.5">
              {errors.password?.type === 'required' && (
                <span className="text-xs text-red-500 font-medium">Password is required</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="text-xs text-red-500 font-medium">
                  Minimum password length of 4
                </span>
              )}
            </div>
          </div>

          {isLoginPage && (
            <div className="mt-7 flex">
              <label className="inline-flex items-center w-full cursor-pointer">
                <input
                  type="checkbox"
                  disabled={isSubmitting}
                  defaultChecked={true}
                  className={classNames(
                    'rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-300 focus:ring',
                    'focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50'
                  )}
                  name="remember"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
              </label>

              <div className="w-full text-right">
                <a className="underline text-sm text-gray-600 dark:text-gray-400 dark" href="#">
                  Forgot password?
                </a>
              </div>
            </div>
          )}

          <div className="mt-7">
            <button
              type="submit"
              disabled={isSubmitting}
              className={classNames(
                'bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner',
                'focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105',
                'disabled:cursor-not-allowed disabled:opacity-50'
              )}
            >
              {isLoginPage ? 'Login' : 'Sign Up'}
            </button>
          </div>

          <div className="mt-7">
            <div className="flex justify-center items-center">
              <label className="mr-2 text-sm">
                {!isLoginPage ? 'Do you have an account?' : "You don't have an account?"}
              </label>
              <button
                type="button"
                onClick={handleAuthSwitchForm}
                className={classNames(
                  'text-sm text-blue-500 transition duration-500 ease-in-out',
                  'transform hover:-translate-x hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50'
                )}
              >
                {!isLoginPage ? 'Login' : 'Sign Up'}
              </button>
            </div>
          </div>
        </form>
      </Dialog.Panel>
    </DialogBox>
  )
}

export default ProjectAuthModal
