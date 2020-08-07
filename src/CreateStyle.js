import React, { useState } from "react"
import axios from "axios"
import styled from 'styled-components'

function CreateStyle(props) {
  const [Name, updateName] = useState('')
  const [Image, updateImage] = useState('')
  const [Directions, updateDirections] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("https://api.airtable.com/v0/app8FUw6Pn8QvappH/Table%201", {
      fields: {
        Name: Name,
        Image: Image,
        Directions: Directions
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    props.updateFetchStyles(!props.fetchStyles)
    updateName('')
    updateImage('')
    updateDirections('')
  }

  return <form onSubmit={handleSubmit}>
    <h2 className="form_title">Upload Your Own DIY Style</h2>
    <label htmlFor="Name">Name</label>
    <input type="text" id="Name" onChange={e => updateName(e.target.value)} value={Name} />
    <label htmlFor="Image">Image</label>
    <input type="text" id="Image" placeholder="URL" onChange={e => updateImage(e.target.value)} value={Image} />
    <br />
    <label htmlFor="Directions">Directions</label>
    <textarea name="Directions" id="Directions" cols="30" rows="10" onChange={e => updateDirections(e.target.value)} value={Directions}></textarea>
    <input type="submit" value="Upload Your Style" className="product_btn" />
  </form>

}

export default CreateStyle
