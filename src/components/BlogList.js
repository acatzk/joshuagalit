import BlogItem from './BlogItem'

export default function BlogList ({ blogs, views }) {
  return blogs.map(blog => (
    <div key={blog.slug} className="py-3">
      <BlogItem {...blog} views={views} />
    </div>
  ))
}