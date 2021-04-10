import Head from 'next/head'
import { useState } from 'react'
import Layout from '~/layouts/default'
import { motion, AnimatePresence } from 'framer-motion'

export default function EmailsPage () {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Head>
        <title>Person's Email</title>
      </Head>
      <Layout>
        <div className="mx-auto pt-12">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 dark:bg-gray-800 transition ease-in-out duration-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Message
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700 transition ease-in-out duration-700">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition ease-in-out duration-200 w-full">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full" src="https://st3.depositphotos.com/1767687/16607/v/380/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg" alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                Jane Cooper
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                jane.cooper@example.com
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 max-w-lg">
                          <div className="text-sm text-gray-900 line-clamp-2 dark:text-gray-400">Regional Paradigm Technician Regional Paradigm TechnicianRegional Paradigm TechnicianRegional Paradigm TechnicianRegional Paradigm TechnicianRegional Paradigm Technician</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 flex flex-col dark:text-gray-400">
                          March 29, 2020 <span>20 days ago</span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium space-x-2">
                          <motion.button 
                            whileHover={{ y: -3 }}
                            className="focus:outline-none w-5 h-5"
                          >
                            <svg className="h-full w-full text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </motion.button>
                          <motion.button 
                            whileHover={{ y: -3 }}
                            initial={{ x: -700 }}
                            animate={{
                              x: 0,
                              transition: { duration: 0.1 }
                            }}
                            className="focus:outline-none w-5 h-5"
                            onClick={() => setShowModal(true)}
                          >
                            <svg className="h-full w-full text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000000">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                          </motion.button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {showModal && <Modal setShowModal={setShowModal} />}
      </Layout>
    </>
  )
}

function Modal ({ setShowModal }) {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ 
          opacity: 0, 
          y: 60, 
          scale: 0.5 
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          // making use of framer-motion spring animation
          // with stiffness = 300
          transition: { 
            type: "spring", 
            stiffness: 300 
          }
        }}
        exit={{ opacity: 0, scale: 0.5, 
              transition: { duration: 0.6 } }}
        className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:text-dark-dim outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img 
                      className="h-10 w-10 rounded-full" 
                      src="https://st3.depositphotos.com/1767687/16607/v/380/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg" 
                      alt="" 
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-800">
                      Jane Cooper
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 hover:opacity-80 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <motion.p 
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1, 
                           transition: { delay: 0.5 } }}
                className="my-4 text-blueGray-500 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main
                thing people are controlled by! Thoughts- their perception
                of themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you
                won’t do anything. I was taught I could do everything.
              </motion.p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <motion.button
                className="text-white bg-black rounded-lg hover:bg-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                initial={{ x: -700 }}
                animate={{
                  x: 0,
                  transition: { duration: 0.1 }
                }}
                onClick={() => setShowModal(false)}
              >
                Okay
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </AnimatePresence>
  )
}