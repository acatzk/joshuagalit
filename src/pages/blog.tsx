import { motion } from 'framer-motion'
import { routeAnimation } from '~/animation'
import Layout from '~/layouts/defaultLayout'
import { getAllPosts } from '~/utils/blogFiles'
import { GetStaticProps, NextPage } from 'next'
import BlogList from '~/components/Blog/BlogList'
import BlogHeader from '~/components/Blog/BlogHeader'

interface BlogPageProps {
  posts: []
}

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

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts()

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

export default Blog
