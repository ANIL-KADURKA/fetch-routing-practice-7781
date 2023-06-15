import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {BlogEachItem} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = BlogEachItem
  console.log(id)

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item-container">
        <img src={imageUrl} className="image-url" alt={`item${id}`} />
        <div className="profile-container">
          <p className="p-1">{topic}</p>
          <h1 className="p-2">{title}</h1>
          <div className="user-name-container">
            <img src={avatarUrl} className="avatar-url" alt={`avatar${id}`} />
            <p className="p-1">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
