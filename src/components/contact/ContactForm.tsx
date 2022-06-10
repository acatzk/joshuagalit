import React from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { classNames } from '~/utils/classNames'
import { AnimatedLoadingIcon } from '~/utils/Icons'
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai'

interface ContactFormProps {
  onSubmit: any
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col space-y-1">
        <label className="text-sm pl-2">Name</label>
        <div className="flex items-center inset-y-0 inset-x-3">
          <span className="absolute pl-3">
            <AiOutlineUser className="fill-current w-6 h-6 text-gray-500" />
          </span>
          <input
            type="text"
            disabled={isSubmitting}
            className={classNames(
              'pl-11 w-full bg-gray-100 dark:bg-gray-800 focus:bg-white',
              'rounded-full border-0 py-2.5 focus:ring-2 focus:ring-inset',
              'transition ease-in-out duration-150 dark:text-white',
              'disabled:cursor-not-allowed disabled:opacity-50',
              errors?.name
                ? 'ring-red-200 focus:ring-red-500'
                : 'ring-gray-200 focus:ring-blue-twitter'
            )}
            {...register('name', {
              required: true,
              minLength: 4
            })}
          />
        </div>
        <div className="space-y-0.5 ml-1.5">
          {errors.name?.type === 'required' && (
            <span className="text-xs text-red-500 font-medium">Name is required</span>
          )}
          {errors.name?.type === 'minLength' && (
            <span className="text-xs text-red-500 font-medium">Minimum name length of 4</span>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-sm pl-2">Email</label>
        <div className="flex items-center inset-y-0 inset-x-3">
          <span className="absolute pl-4">
            <AiOutlineMail className="fill-current w-6 h-6 text-gray-500" />
          </span>
          <input
            type="text"
            disabled={isSubmitting}
            className={`
            pl-12 w-full bg-gray-100 dark:bg-gray-800 focus:bg-white rounded-full border-0
            py-2.5 focus:ring-2 focus:ring-inset transition ease-in-out duration-150 dark:text-white 
            disabled:cursor-not-allowed disabled:opacity-50 ${
              errors.email
                ? 'ring-red-200 focus:ring-red-500'
                : 'ring-gray-200 focus:ring-blue-twitter'
            }`}
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
        </div>
        <div className="space-y-0.5 ml-1.5">
          {errors.email?.type === 'required' && (
            <span className="text-xs text-red-500 font-medium">Email is required</span>
          )}
          {errors.email?.message && (
            <span className="text-xs text-red-500 font-medium">{errors.email?.message}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <label className="text-sm pl-2">Message</label>
        <div className="flex items-center inset-t-0 right-3">
          <textarea
            rows={5}
            disabled={isSubmitting}
            className={`
              w-full max-h-md bg-gray-100 dark:bg-gray-800 focus:bg-white rounded-xl
              border-0 py-2.5 focus:ring-2 focus:ring-inset transition ease-in-out duration-150 
            dark:text-white disabled:cursor-not-allowed disabled:opacity-50 ${
              errors.message
                ? 'ring-red-200 focus:ring-red-500'
                : 'ring-gray-200 focus:ring-blue-twitter'
            }`}
            {...register('message', {
              required: true
            })}
          ></textarea>
        </div>
        <div className="space-y-0.5 ml-1.5">
          {errors.message?.type === 'required' && (
            <span className="text-xs text-red-500 font-medium">Message is required</span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end">
        <motion.button
          className="bg-blue-twitter text-white px-4 py-2 rounded-full focus:outline-none transition ease-in-out duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ y: -4 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadingButton /> : <ButtonText />}
        </motion.button>
      </div>
    </form>
  )
}

const LoadingButton: React.FC<{}> = () => {
  return (
    <div className="flex items-center space-x-2">
      <AnimatedLoadingIcon className="w-5 h-5 text-white" />
      <p className="text-xs font-medium">Sending...</p>
    </div>
  )
}

const ButtonText: React.FC<{}> = () => {
  return (
    <div className="flex items-center space-x-1 text-sm font-medium">
      <span className="line-clamp-1">Send</span>
      <FiSend className="w-4 h-4 transform rotate-45" />
    </div>
  )
}

export default ContactForm
