import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsNewList} = props
  return (
    <ul className="blog-lists">
      {blogsNewList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
