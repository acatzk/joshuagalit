import Head from 'next/head';
import Layout from '~/layouts/defaultLayout';
import BlogList from '~/components/BlogList';
import { getAllPosts } from '~/utils/blogFiles';
import { GetStaticProps, NextPage } from 'next';
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
    <Layout
      headTitle="Blog | Joshua Galit"
      metaContent="A list of My Blog Post"
    >
      <div className="w-full max-w-5xl mx-auto px-4">
        <BlogHeader count={posts?.length} />
        <div className="py-2 divide-y divide-gray-200 dark:divide-gray-700">
          <BlogList blogs={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
