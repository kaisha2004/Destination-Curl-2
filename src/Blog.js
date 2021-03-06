import React, { useState, useEffect } from "react"
import axios from "axios"
import CreatePost from "./CreatePost"



function Blog() {
  const [posts, updatePosts] = useState([])
  const [fetchPosts, updateFetchPosts] = useState(false)


  useEffect(() => {
    const makeApiCall = async () => {
      
      const data = await axios.get(
        "https://api.airtable.com/v0/appcXTu5Y5mQpSk0D/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
        
      )
      updatePosts(data.data.records)
    }
    makeApiCall()
  },[fetchPosts])
  return (
    <>
      <section className="center">
      <h1 className='style_title'>Curl Struggle Blog</h1>
      {posts.map((post) => (
          <div className="style_info" >
            <img src={post.fields.Image} className="blog_images" alt='blog_images'></img>
          <h3 className="post_name">{post.fields.Title} </h3>
          <div className="blog_info">
           <h4>Author: {post.fields.Author} </h4>
            <h4>Date: {post.fields.Created_At} </h4>
          </div>
            <p className="style_directions">{post.fields.Text}</p>
          </div>
        ))}
      <CreatePost updateFetchPosts={updateFetchPosts} fetchPosts={fetchPosts}/>
     </section>
    </>
  )
}

export default Blog
