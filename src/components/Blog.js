import { useState } from "react"

const Blog = ({blog, updateBlog}) => {
  const [visible, setVisible] = useState(false)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const showWhenVisible = { display: visible ? '' : 'none' }
  const buttonLabel = visible ? 'hide' : 'view'

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const handleLike = async () => {
    const blogObject = {
      ...blog,
      likes: blog.likes + 1
    }
    updateBlog(blogObject)
  }

  return  (
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <button onClick={toggleVisibility}>{buttonLabel}</button>
      <div style={showWhenVisible}>
        {blog.url} <br />
        likes {blog.likes} <button onClick={handleLike}>like</button> <br />
        {blog.user.username}
      </div>
    </div>  
  )
}

export default Blog