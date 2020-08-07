import React, { useState } from "react"
import axios from "axios"
import styled from 'styled-components'

function CreatePost(props) {
  const [Title, updateTitle] = useState('')
  const [Author, updateAuthor] = useState('')
  const [Text, updateText] = useState('')
  const [Image, updateImage] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("https://api.airtable.com/v0/appcXTu5Y5mQpSk0D/Table%201", {
      fields: {
        Title: Title,
        Author: Author,
        Text: Text,
        Image: Image,
        
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    props.updateFetchPosts(!props.fetchPosts)
    updateTitle('')
    updateAuthor('')
    updateText('')
    updateImage('')
    
  }

  return <form onSubmit={handleSubmit}>
    <h2 className="form_title">Upload Your Curly Struggle!</h2>
    <label htmlFor="Image">Gif:</label>
    <input type="text" id="Image" placeholder="URL" onChange={e => updateImage(e.target.value)} value={Image} />
    <label htmlFor="Title">Title:</label>
    <input type="text" id="Title" onChange={e => updateTitle(e.target.value)} value={Title} />
    <label htmlFor="Author">Author:</label>
    <input type="text" id="Author" onChange={e => updateAuthor(e.target.value)} value={Author} />
    <br />
    <label htmlFor="Text">Directions:</label>
    <textarea name="Text" id="Text" cols="30" rows="10" onChange={e => updateText(e.target.value)} value={Text}></textarea>
    <input type="submit" value="Upload Your Post" className="product_btn"/>
  </form>

}

export default CreatePost
