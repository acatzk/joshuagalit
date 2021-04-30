import BlogItem from './BlogItem'

export default function BlogList ({ blogs }) {
  return blogs.map(blog => (
    <div className="py-3">
      <BlogItem {...blog} key={blog.slug} />
    </div>
  ))
}