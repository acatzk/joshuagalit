import BlogItem from './BlogItem'

export default function BlogList ({ blogs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
      {blogs.map(blog => <BlogItem {...blog} key={blog.slug} />)}
    </div>  
  )
}