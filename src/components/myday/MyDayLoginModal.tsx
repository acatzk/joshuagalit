import React from 'react'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import { Transition } from '@headlessui/react'
import { classNames } from '~/utils/classNames'
import { fadeInUp, stagger } from '~/mock/animation'
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa'

type Props = {
  isOpen: boolean
  setIsOpen: Function
}

const LoginWithModal: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen } = props

  return isOpen ? (
    <Transition show={isOpen} as="div" static className="fixed z-10 inset-0">
      <div
        className={classNames(
          'flex items-center justify-center min-h-screen',
          'text-center sm:block sm:p-0'
        )}
      >
        <ModalBackground setIsOpen={setIsOpen} />
        <motion.div variants={fadeInUp}>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className=" sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          {/* Actual Modal Content */}
          <div
            className={classNames(
              'inline-block align-top rounded-lg overflow-hidden',
              'shadow-2xl transform sm:align-middle sm:max-w-lg sm:w-full'
            )}
          >
            <div
              className={classNames(
                'bg-white dark:bg-dark-dim px-4 py-6',
                'transition ease-in-out duration-700'
              )}
            >
              <div className="flex flex-col items-center space-y-3">
                <h1 className="text-2xl font-extrabold text-black dark:text-white">Login with</h1>
                <motion.div variants={stagger} className="flex flex-col space-y-2 w-full">
                  <LoginButton Icon={FaFacebook} title="Facebook" className="bg-[#4267B2]" />
                  <LoginButton Icon={FaGoogle} title="Google" className="bg-[#db3236]" />
                  <LoginButton Icon={FaGithub} title="GitHub" className="bg-[#24292e]" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Transition>
  ) : null
}

type LoginButtonProps = {
  Icon: IconType
  title: string
  className?: string
}

const LoginButton: React.FC<LoginButtonProps> = (props) => {
  const { Icon, title, className } = props

  return (
    <motion.button
      variants={fadeInUp}
      className={classNames(
        'group flex items-center justify-center space-x-2 py-3 px-4 rounded',
        'hover:bg-opacity-80 transition ease-in-out duration-200',
        'focus:outline-none border border-transparent',
        'active:bg-transparent active:border-black dark:active:border-white',
        `${className}`
      )}
    >
      <Icon className="w-5 h-5 text-white group-active:text-black dark:group-active:text-white" />
      <span className="font-semibold text-white group-active:text-black dark:group-active:text-white">
        Continue with {title}
      </span>
    </motion.button>
  )
}

type ModalBackgroundProps = {
  setIsOpen: Function
}

const ModalBackground: React.FC<ModalBackgroundProps> = (props) => {
  const { setIsOpen } = props
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
    />
  )
}

export default LoginWithModal
