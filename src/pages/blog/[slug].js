import Head from 'next/head'
import Moment from 'react-moment'
import { motion } from 'framer-motion'
import { blogPosts } from '~/lib/data'
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
  const initialData = blogPosts.find(v => v.slug === slug)
  
  return {
    props: {
      initialData
    }
  }
}

export default function BlogPost ({ initialData }) {
  return (
    <>
      <Head>
        <title>{ initialData.title }</title>
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
                  { initialData.title }
                </h1>
                <p className="font-medium"><Moment date={initialData.created_at} format="DD MMMM, YYYY" /></p>
              </div>
              <div className="flex-shrink-0 overflow-hidden rounded-lg">
                <img className="w-full h-full" src={ initialData.image } />
              </div>
            </div>
          </motion.div>
        </div>
      </Layout> 
    </>
  )
}