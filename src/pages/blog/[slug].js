import Head from 'next/head'
import Moment from 'react-moment'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import hydrate from 'next-mdx-remote/hydrate'
import { getAllPosts } from '~/utils/blogFiles'
import BlogHeader from '~/components/BlogHeader'
import renderToString from 'next-mdx-remote/render-to-string'

export async function getStaticPaths() {
  const allPosts = getAllPosts()
  return {
    paths: allPosts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const allPosts = getAllPosts()
  
  const { data, content } = allPosts.find(post => post.slug === slug)
  const mdxSource = await renderToString(content)

  return {
    props: {
      ...data,
      content: mdxSource,
    }
  }
}

export default function BlogPost ({ title, image, created_at, content }) {
  const hydratedContent = hydrate(content)

  return (
    <>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
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
                  { title }
                </h1>
                <p className="font-medium">
                  <Moment date={ created_at } format="DD MMMM, YYYY" />
                </p>
              </div>
              <div className="flex-shrink-0 overflow-hidden rounded-lg">
                <img className="w-full h-full" src={ image } />
              </div>
              <div className="prose text-black dark:text-white">{ hydratedContent }</div>
            </div>
          </motion.div>
        </div>
      </Layout> 
    </>
  )
}