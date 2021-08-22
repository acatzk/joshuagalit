import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Layout from 'layouts/defaultLayout'
import { getAllPosts } from 'utils/blogFiles'
import { GetStaticProps, NextPage } from 'next'
import { routeAnimation } from 'mock/animation'
import { AnimatedLoadingIcon } from 'utils/Icons'
import BlogHeader from 'components/blog/BlogHeader'

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

const BlogList = dynamic(() => import('components/blog/BlogList'), {
  ssr: false,
  loading: () => (
    <AnimatedLoadingIcon className="w-5 h-5 text-black dark:text-white" />
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
