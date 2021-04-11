import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import BlogList from '~/components/BlogList'
import { getAllPosts } from '~/utils/blogFiles'
import BlogHeader from '~/components/BlogHeader'

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug
      }))
    }
  }
}

export default function BlogPage ({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Joshua Galit</title>
      </Head>
      <Layout>
        <div className="pt-0 md:pt-6 w-full px-0 md:px-4">
          <BlogHeader />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full mx-auto max-w-7xl h-screen px-4 py-6"
          >
            <BlogList blogs={posts} />
          </motion.div>
        </div>
     </Layout>
    </>
  )
}