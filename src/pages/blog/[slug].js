import Head from 'next/head'
import Moment from 'react-moment'
import { motion } from 'framer-motion'
import { blogPosts } from '~/static/blogs'
import Layout from '~/layouts/default'
import BlogHeader from '~/components/BlogHeader'

export async function getStaticPaths () {
  return {
    paths: blogPosts.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const { slug } = params
  const data = blogPosts.find(v => v.slug === slug)
  
  return {
    props: {
      data
    }
  }
}

export default function BlogPost ({ data }) {
  return (
    <>
      <Head>
        <title>{ data.title }</title>
      </Head>
      <Layout>
        <div className="pt-0 md:pt-6 w-full px-0 md:px-4 text-gray-800 dark:text-white">
          <BlogHeader />
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1 }}
             className="w-full mx-auto max-w-4xl h-screen px-4 py-6"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-wide leading-normal md:leading-snug text-center">
                  { data.title }
                </h1>
                <p className="font-medium">
                  <Moment date={ data.created_at } format="DD MMMM, YYYY" />
                </p>
              </div>
              <div className="flex-shrink-0 overflow-hidden rounded-lg">
                <img className="w-full h-full" src={ data.image } />
              </div>
              <p className="text-base text-medium">{ data.description }</p>
            </div>
          </motion.div>
        </div>
      </Layout> 
    </>
  )
}