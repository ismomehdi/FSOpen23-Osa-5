import { useState } from "react"

const Blog = ({blog, updateBlog, deleteBlog}) => {
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

  const handleRemove = async () => {
    if (window.confirm(`Remove blog ${blog.title}?`)) {
      deleteBlog(blog.id)
    }
  }

  const showWhenBlogOwner = () => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    const user = JSON.parse(loggedUserJSON)

    if (blog.user.username === user.username) {
      return { display: '' }
    } else {
      return { display: 'none' }
    }
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
      <div style={ showWhenBlogOwner() }>
        <button onClick={handleRemove}>remove</button>
      </div>
    </div>  
  )
}

export default Blog