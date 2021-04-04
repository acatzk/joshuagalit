import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import { blogPosts } from '~/lib/data'
import BlogItem from '~/components/BlogItem'
import BlogList from '~/components/BlogList'
import BlogHeader from '~/components/BlogHeader'

export default function BlogPage () {
  return (
    <>
      <Head>
        <title>Blog | Joshua Galit</title>
      </Head>
      <Layout>
        <div className="pt-0 md:pt-6 w-full px-4">
          <BlogHeader />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full mx-auto max-w-7xl h-screen px-4 py-6"
          >
            <BlogList>
              {blogPosts.map(blog => <BlogItem {...blog} key={blog.slug} />)}
            </BlogList>
          </motion.div>
        </div>
     </Layout>
    </>
  )
}