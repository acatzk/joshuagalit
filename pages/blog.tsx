import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Layout from 'layouts/defaultLayout'
import { getAllPosts } from 'utils/blogFiles'
import { GetStaticProps, NextPage } from 'next'
import { routeAnimation } from 'mock/animation'
import BlogHeader from 'components/Blog/BlogHeader'

interface BlogPageProps {
  posts: []
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  }
}

const BlogList = dynamic(() => import('components/Blog/BlogList'), {
  ssr: false,
  loading: () => (
    <p className="flex items-center justify-center min-h-screen">Loading...</p>
  ),
})

const Blog: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <Layout
      headTitle="Blog | Joshua Galit"
      metaDescription="A list of My Blog Post"
    >
      <motion.div
        variants={routeAnimation}
        initial="initial"
        animate="animate"
        className="w-full max-w-5xl mx-auto px-4"
      >
        <BlogHeader count={posts?.length} />
        <div className="py-2 divide-y divide-gray-200 dark:divide-gray-700">
          <BlogList blogs={posts} />
        </div>
      </motion.div>
    </Layout>
  )
}

export default Blog
