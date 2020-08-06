import React, { useState, useEffect } from "react"
import axios from "axios"
import CreateStyle from "./CreateStyle"
import styled from 'styled-components'


function Curlstyle() {
  const [styles, updateStyles] = useState([])
  const [fetchStyles, updateFetchStyles] = useState(false)
  useEffect(() => {
    const makeApiCall = async () => {
      
      const data = await axios.get(
        "https://api.airtable.com/v0/app8FUw6Pn8QvappH/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
        
      )
      updateStyles(data.data.records)
    }
    makeApiCall()
  },[])
  return (
    <>
      <h1>DIY Curl Styles</h1>
      {styles.map((style) => {
        return (
          <div>
            
            <img src={style.fields.Image}></img>
              <p>{style.fields.Name}</p>
            <p>{style.fields.Directions}</p>
          </div>
        )
      })}
      <CreateStyle updateFetchStyles={updateFetchStyles} fetchStyles={fetchStyles}/>
    </>
  )
}

export default Curlstyle
