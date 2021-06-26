import useSWR from 'swr';
import moment from 'moment';
import Image from 'next/image';
import { useEffect } from 'react';
import getReadTime from '~/utils/read-time';
import Layout from '~/layouts/defaultLayout';
import hydrate from 'next-mdx-remote/hydrate';
import { getAllPosts } from '~/utils/blogFiles';
import SponsorCard from '~/components/SponsorCard';
import renderToString from 'next-mdx-remote/render-to-string';
import { hasuraAdminClient } from '~/lib/hasura-admin-client';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { INSERT_BLOG_VIEWS_MUTATION } from '~/graphql/mutations';
import { GET_BLOG_VIEWS_COUNT_BY_SLUG_QUERY } from '~/graphql/queries';

interface BlogPostProps {
  title: string;
  publishedAt: string;
  content: any;
  slug: string;
  summary: string;
  readTime: string;
}

const BlogPost: NextPage<BlogPostProps> = ({
  title,
  publishedAt,
  content,
  slug,
  summary,
  readTime,
}) => {
  const hydratedContent = hydrate(content);
  const formattedData = moment(publishedAt).format('MMMM DD, YYYY');

  const { data, mutate } = useSWR(
    [GET_BLOG_VIEWS_COUNT_BY_SLUG_QUERY, slug],
    (query, slug) => hasuraAdminClient.request(query, { slug }),
    { revalidateOnMount: true }
  );
  const views = data?.blog_views_aggregate?.aggregate?.count;

  useEffect(() => {
    async function InsertViewer() {
      await hasuraAdminClient.request(INSERT_BLOG_VIEWS_MUTATION, { slug });
      mutate({ ...data });
    }

    InsertViewer();
  }, []);

  return (
    <Layout headTitle={title} metaDescription={summary}>
      <div className="w-full max-w-3xl mx-auto px-4 space-y-8">
        <div className="mt-4 md:mt-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center max-w-xl mx-auto">
            {title}
          </h1>
        </div>
        <div className="flex items-center space-x-2 pb-8 w-full">
          <div className="flex-shrink-0">
            <Image
              className="rounded-full"
              src="/images/my-avatar.jpg"
              alt="My Profile Picture"
              width={28}
              height={28}
              layout="intrinsic"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between w-full">
            <h3 className="text-sm text-gray-700 dark:text-gray-400 tracking-tight">
              Joshua Galit / {formattedData}
            </h3>
            <div className="flex items-center">
              <div className="flex items-center space-x-1.5 cursor-default text-gray-500 dark:text-gray-400  text-xs">
                <span className="font-medium line-clamp-1">
                  {readTime} min read
                </span>
                <span className="font-extralight">|</span>
                <span className="font-medium line-clamp-1" data-tip="Views">
                  {views} views
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="prose dark:prose-dark prose-pink">
          {hydratedContent}
        </div>
        <div className="pb-28">
          <SponsorCard />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const allPosts = getAllPosts();

  const { data, content }: any = allPosts.find((post) => post.slug === slug);
  const mdxSource = await renderToString(content);
  const readTime = getReadTime(content);

  return {
    props: {
      ...data,
      content: mdxSource,
      readTime,
    },
  };
};
