import useSWR from 'swr'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Layout from '~/layouts/default'
import BlogList from '~/components/BlogList'
import { getAllPosts } from '~/utils/blogFiles'
import BlogHeader from '~/components/BlogHeader'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'
import { GET_BLOG_VIEWS_COUNT_QUERY } from '~/graphql/queries'

export default function BlogPage ({ posts, initialCount }) {
  const { data } = useSWR(GET_BLOG_VIEWS_COUNT_QUERY, (query) => hasuraAdminClient.request(query), { 
    initialCount,
    revalidateOnMount: true
  })

  return (
    <>
      <Head>
        <title>Blog | Joshua Galit</title>
        <meta name="description" content="A list of My Blog Post" />
      </Head>
      <Layout>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-5xl mx-auto px-4"
        >
          <BlogHeader count={posts?.length} />
          <div className="py-2 divide-y divide-gray-200 dark:divide-gray-700">
            <BlogList blogs={posts} views={data?.blog_views_aggregate?.aggregate?.count} />
          </div>
        </motion.div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
  const initialCount = await hasuraAdminClient.request(GET_BLOG_VIEWS_COUNT_QUERY)

  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug
      })),
      initialCount
    }
  }
}