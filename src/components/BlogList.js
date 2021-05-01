import BlogItem from './BlogItem'

export default function BlogList ({ blogs }) {
  return blogs.map(blog => (
    <div key={blog.slug} className="py-3">
      <BlogItem {...blog} />
    </div>
  ))
}