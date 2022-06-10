import React from 'react'
import BlogItem from './BlogItem'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '~/mock/animation'

interface BlogListProps {
  blogs: any
}

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
