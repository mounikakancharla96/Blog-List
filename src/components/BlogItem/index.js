import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="item">
      <div className="title-date">
        <h1 className="title-heading">{title}</h1>
        <p className="blog">{publishedDate}</p>
      </div>
      <p className="blog">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem
