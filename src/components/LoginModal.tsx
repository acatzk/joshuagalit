import React from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { Transition } from '@headlessui/react';
import { fadeInUp, stagger } from '~/animation';
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa';

interface LoginWIthModalProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const LoginWithModal: React.FC<LoginWIthModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return isOpen ? (
    <Transition show={isOpen} as="div" static className="fixed z-10 inset-0">
      <div className="flex items-center justify-center min-h-screen text-center sm:block sm:p-0">
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
        />

        <motion.div variants={fadeInUp}>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className=" sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-top rounded-lg overflow-hidden shadow-2xl transform sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white dark:bg-dark-dim px-4 py-6 transition ease-in-out duration-700">
              <div className="flex flex-col items-center space-y-3">
                <h1 className="text-2xl font-extrabold text-black dark:text-white">
                  Login with
                </h1>
                <motion.div
                  variants={stagger}
                  className="flex flex-col space-y-2 w-full"
                >
                  <LoginButton
                    color="#4267B2"
                    Icon={FaFacebook}
                    title="Facebook"
                  />
                  <LoginButton color="#db3236" Icon={FaGoogle} title="Google" />
                  <LoginButton color="#24292e" Icon={FaGithub} title="GitHub" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Transition>
  ) : null;
};

const LoginButton: React.FC<{
  color: string;
  Icon: IconType;
  title: string;
}> = ({ color, Icon, title }) => {
  return (
    <motion.button
      variants={fadeInUp}
      className={` 
        group flex items-center justify-center space-x-2 py-3 px-4 rounded 
        bg-[${color}] hover:bg-opacity-80 transition ease-in-out duration-200
        focus:outline-none border border-transparent
        active:bg-transparent active:border-black dark:active:border-white`}
    >
      <Icon className="w-5 h-5 text-white group-active:text-black dark:group-active:text-white" />
      <span className="font-semibold text-white group-active:text-black dark:group-active:text-white">
        Continue with {title}
      </span>
    </motion.button>
  );
};

export default LoginWithModal;
