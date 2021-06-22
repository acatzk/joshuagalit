import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { motion } from 'framer-motion';
import Layout from '~/layouts/default';
import BlogList from '~/components/BlogList';
import { getAllPosts } from '~/utils/blogFiles';
import BlogHeader from '~/components/BlogHeader';

interface BlogPageProps {
  posts: [];
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  };
};

const Blog: NextPage<BlogPageProps> = ({ posts }) => {
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
            <BlogList blogs={posts} />
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Blog;
