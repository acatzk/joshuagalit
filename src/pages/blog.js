import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import BlogCard from '~/components/BlogCard'
import ActiveLink from '~/components/ActiveLink'

export default function BlogPage () {

  const links = [
    {
      text: 'All',
      href: '/blog'
    },
    {
      text: 'Personal',
      href: '/blog/tagged/personal'
    },
    {
      text: 'Programming',
      href: '/blog/tagged/Programming'
    }
  ]

  return (
    <>
      <Head>
        <title>Blog | Joshua Galit</title>
      </Head>
      <Layout>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="pt-0 md:pt-6 w-full px-4"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-between py-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 px-4 bg-white dark:bg-dark-dim">
            <div>
              <ul className="flex flex-wrap items-center text-gray-400 space-x-6">
                {links.map(({ text, href }, i) => (
                  <li key={i}>
                    <ActiveLink href={ href } current="text-blue-twitter">
                      <a className="font-medium hover:text-blue-twitter transition ease-in-out duration-150">{ text }</a>
                    </ActiveLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex items-center">
              <div className="absolute pl-4 pt-2.5">
                <svg className="h-7 w-7 fill-current text-gray-400" viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd"
                    d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z">
                  </path>
                </svg>
              </div>
              <input 
                type="text" 
                className="pl-11 w-full bg-gray-100 dark:bg-gray-800 focus:bg-white rounded-lg border-0 py-2 focus:ring-2 focus:ring-inset transition ease-in-out duration-150 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 ring-gray-200 focus:ring-blue-twitter" />
            </div>
          </div>
          <div className="w-full mx-auto max-w-7xl h-screen px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => <BlogCard key={i} />)}
            </div>
          </div>
        </motion.div>
     </Layout>
    </>
  )
}