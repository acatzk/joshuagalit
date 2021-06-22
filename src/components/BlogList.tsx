import React from 'react';
import BlogItem from './BlogItem';

interface BlogListProps {
  blogs: any;
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return blogs.map((blog: any) => (
    <div key={blog.slug} className="py-3">
      <BlogItem {...blog} />
    </div>
  ));
};

export default BlogList;
