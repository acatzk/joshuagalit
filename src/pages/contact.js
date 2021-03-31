import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import { useForm } from 'react-hook-form'

export default function ContactPage() {

  const {
    errors,
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm()

  const contacts = [
    {
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
              </path>
            </svg>,
      text: '+63 9657268947'
    },
    {
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>,
      text: 'joshuaimalay@gmail.com'
    },
    {
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd">
              </path>
            </svg>,
      text: 'Bato, Leyte'
    }
  ]

  return (
    <>
      <Head>
        <title>Contact | Joshua Galit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-full max-w-5xl m-auto px-4 py-4">
          <div className="w-full h-full opacity-50">
            <img src="/svgs/buble.svg" disabled className="absolute inset-0 w-full h-full" />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-8">
            <div className="flex flex-col space-y-10 md:space-y-20">
              <div className="flex flex-col space-y-5 md:space-y-8 w-full max-w-md z-50">
                <h1 className="font-extrabold text-3xl md:text-5xl text-blue-twitter">Contact me</h1>
                <p className="text-base text-gray-900 dark:text-white">Send me a message and I will get back to you within 24 hours.</p>
              </div>
              <div className="flex flex-col space-y-3 md:space-y-5 z-50">
                {contacts.map(({ icon, text }, i) => (
                  <div key={i} className="flex items-center space-x-6 text-gray-900 dark:text-white">
                    <span className="text-blue-twitter">
                      { icon }
                    </span>
                    <p className="text-base">{ text }</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg w-full max-w-full md:max-w-lg px-8 py-10 bg-white shadow-md dark:bg-gray-900 z-50">
              <div className="relative w-full">
                <form className="space-y-6">
                  <div className="flex flex-col space-y-1">
                    <label className="text-base pl-2">Name</label>
                    <div className="flex items-center inset-y-0 right-3">
                      <span className="absolute pl-3">
                        <svg className="fill-current w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z">
                          </path>
                        </svg>
                      </span>
                      <input type="text" className="pl-11 w-full bg-gray-100 focus:bg-white rounded-full border-0 py-2.5 focus:ring-2 focus:ring-inset ring-transparent focus:ring-blue-twitter transition ease-in-out duration-150 dark:text-black" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-base pl-2">Email</label>
                    <div className="flex items-center inset-y-0 right-3">
                      <span className="absolute pl-4">
                        <svg className="fill-current w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fillRule="evenodd"
                            d="M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z">
                          </path>
                        </svg>
                      </span>
                      <input type="text" className="pl-12 w-full bg-gray-100 focus:bg-white rounded-full border-0 py-2.5 focus:ring-2 focus:ring-inset ring-transparent focus:ring-blue-twitter transition ease-in-out duration-150 dark:text-black" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-base pl-2">Message</label>
                    <div className="flex items-center inset-t-0 right-3">
                      <textarea rows="5" type="text" className="w-full max-h-md bg-gray-100 focus:bg-white rounded-xl border-0 py-2.5 focus:ring-2 focus:ring-inset ring-transparent focus:ring-blue-twitter transition ease-in-out duration-150 dark:text-black"></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <motion.button 
                      className="bg-blue-twitter text-white px-4 py-2 rounded-full text-base font-medium focus:outline-none transition ease-in-out duration-200 hover:shadow-xl"
                      whileHover={{ y: -4 }}
                      onClick={(e) => e.preventDefault() }
                    >
                      <span className="line-clamp-1">Send message</span>
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </> 
  )
}