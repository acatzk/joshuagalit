import React from 'react'
import DialogBox from '../DialogBox'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import { Dialog } from '@headlessui/react'
import { classNames } from '~/utils/classNames'
import { fadeInUp, stagger } from '~/mock/animation'
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa'

type Props = {
  isOpen: boolean
  actions: any
}

const JournalLoginWithModal: React.FC<Props> = (props) => {
  const { isOpen, actions } = props
  const { closeModal } = actions

  return (
    <DialogBox isOpen={isOpen} closeModal={closeModal}>
      <Dialog.Panel
        className={classNames(
          'w-full max-w-md transform overflow-hidden rounded-2xl',
          'bg-white dark:bg-dark-dim p-6 text-left align-middle shadow-xl transition-all'
        )}
      >
        <motion.div variants={fadeInUp}>
          <div
            className={classNames(
              'bg-white dark:bg-dark-dim',
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
        </motion.div>
      </Dialog.Panel>
    </DialogBox>
  )
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

export default JournalLoginWithModal
