import React from 'react';
import { motion } from 'framer-motion';
import { Transition } from '@headlessui/react';
import { fadeInUp, stagger } from '~/animation';
import { FaGithub, FaGoogle, FaFacebook, FaGit } from 'react-icons/fa';

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

        {/* This element is to trick the browser into centering the modal contents. */}
        <motion.div variants={fadeInUp}>
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
                  <motion.button
                    variants={fadeInUp}
                    className={`group flex items-center justify-center space-x-2 py-3 px-4 rounded 
                        bg-[#4267B2] hover:bg-opacity-80 transition ease-in-out duration-200
                        focus:outline-none border border-transparent
                        active:bg-transparent active:border-black dark:active:border-white`}
                  >
                    <FaFacebook className="w-5 h-5 text-white group-active:text-black dark:group-active:text-white" />
                    <span className="font-semibold text-white group-active:text-black dark:group-active:text-white">
                      Continue with Facebook
                    </span>
                  </motion.button>
                  <motion.button
                    variants={fadeInUp}
                    className={`group flex items-center justify-center space-x-2 py-3 px-4 rounded 
                        bg-[#db3236] hover:bg-opacity-80 transition ease-in-out duration-200
                        focus:outline-none border border-transparent
                        active:bg-transparent active:border-black dark:active:border-white`}
                  >
                    <FaGoogle className="w-5 h-5 text-white group-active:text-black dark:group-active:text-white" />
                    <span className="font-semibold text-white group-active:text-black dark:group-active:text-white">
                      Continue with Google
                    </span>
                  </motion.button>
                  <motion.button
                    variants={fadeInUp}
                    className={`group flex items-center justify-center space-x-2 py-3 px-4 rounded 
                        bg-[#24292e] hover:bg-opacity-80 transition ease-in-out duration-200
                        focus:outline-none border border-transparent
                        active:bg-transparent active:border-black dark:active:border-white`}
                  >
                    <FaGithub className="w-5 h-5 text-white group-active:text-black dark:group-active:text-white" />
                    <span className="font-semibold text-white group-active:text-black dark:group-active:text-white">
                      Continue with GitHub
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Transition>
  ) : null;
};

export default LoginWithModal;
