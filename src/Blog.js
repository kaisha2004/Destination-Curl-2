import React, { useState, useEffect } from "react"
import axios from "axios"
import CreatePost from "./CreatePost"
import styled from 'styled-components'


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
  },[])
  return (
    <>
      <h1>Curl Blog</h1>
      {posts.map((post) => {
        return (
          <div>
            
            <img src={post.fields.Image}></img>
            <h3>{post.fields.Title} by {post.fields.Author}</h3>
            <h4>{post.fields.Created_At}</h4>
            <p>{post.fields.Text}</p>
          </div>
        )
      })}
      <CreatePost updateFetchPosts={updateFetchPosts} fetchPosts={fetchPosts}/>
    </>
  )
}

export default Blog
