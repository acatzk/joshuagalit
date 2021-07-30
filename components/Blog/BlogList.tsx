import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from 'mock/animation'

interface BlogListProps {
  blogs: any
}

const BlogItem = dynamic(() => import('./BlogItem'), {
  ssr: false,
  loading: () => (
    <p className="flex items-center justify-center min-h-screen">Loading...</p>
  ),
})

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <motion.div variants={stagger}>
      {blogs.map((blog: any) => (
        <motion.div variants={fadeInUp} key={blog.slug} className="py-3">
          <BlogItem {...blog} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default BlogList
