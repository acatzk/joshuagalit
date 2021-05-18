import useSWR from 'swr'
import moment from 'moment'
import Head from 'next/head'
import { useEffect } from 'react'
import Layout from '~/layouts/default'
import ReactTooltip from 'react-tooltip'
import { ViewsIcon } from '~/utils/Icons'
import getReadTime from '~/utils/read-time'
import hydrate from 'next-mdx-remote/hydrate'
import { getAllPosts } from '~/utils/blogFiles'
import SponsorCard from '~/components/SponsorCard'
import renderToString from 'next-mdx-remote/render-to-string'
import { hasuraAdminClient } from '~/lib/hasura-admin-client'
import { INSERT_BLOG_VIEWS_MUTATION } from '~/graphql/mutations'
import { GET_BLOG_VIEWS_COUNT_BY_SLUG_QUERY } from '~/graphql/queries'

export default function BlogPost ({ title, publishedAt, content, slug, initialCount, readTime }) {
  const hydratedContent = hydrate(content)
  const formattedData = moment(publishedAt).format('MMMM DD, YYYY')

  const { data, mutate } = useSWR(
    [GET_BLOG_VIEWS_COUNT_BY_SLUG_QUERY, slug], 
    (query, slug) => hasuraAdminClient.request(query, { slug }), 
    { initialCount, revalidateOnMount: true }
  )
  const views = data?.blog_views_aggregate?.aggregate?.count

  useEffect(() => {
    async function InsertViewer () {
      await hasuraAdminClient.request(INSERT_BLOG_VIEWS_MUTATION, { slug })
      mutate({ ...data })
    }

    InsertViewer()
  }, [])

  return (
    <>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-full max-w-3xl mx-auto px-4 space-y-8">
          <div className="mt-4 md:mt-16">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center max-w-xl mx-auto">{ title }</h1>
          </div>
          <div className="flex items-center space-x-2 pb-8 w-full">
            <div className="flex-shrink-0">
              <img 
                className="w-7 h-7 rounded-full"
                src="/images/my-avatar.jpg" 
              />
            </div>
            <div className="flex flex-wrap items-center justify-between w-full">
              <h3 className="text-sm text-gray-700 dark:text-gray-400 tracking-tight">Joshua Galit / { formattedData }</h3>
              <div className="flex items-center">
                <div className="flex items-center space-x-1.5 cursor-default text-gray-500 dark:text-gray-400  text-xs">
                  <span className="font-medium line-clamp-1">{ readTime } min read</span>
                  <span className="font-extralight">|</span>
                  <span className="font-medium line-clamp-1" data-tip="Views">{ views }</span>
                  <ViewsIcon className="w-4 h-4" />
                </div>
                <ReactTooltip 
                  place="bottom" 
                  type="dark"
                  effect="solid" 
                />
              </div>
            </div>
          </div>
          <div className="prose dark:prose-dark prose-pink">{ hydratedContent }</div>
          <div className="pb-28">
            <SponsorCard />
          </div>
        </div>
      </Layout> 
    </>
  )
}

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
  const readTime = getReadTime(content)

  const initialCount = await hasuraAdminClient.request(GET_BLOG_VIEWS_COUNT_BY_SLUG_QUERY, { slug })

  return {
    props: {
      ...data,
      content: mdxSource,
      initialCount,
      readTime
    }
  }
}