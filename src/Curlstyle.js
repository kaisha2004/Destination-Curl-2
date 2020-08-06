import React, { useState, useEffect } from "react"
import axios from "axios"
import CreateStyle from "./CreateStyle"
import "./App.css"

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
  }, [])
  return (
    <>
      <section className="center">
        <h2 className='style_title'>DIY Curl Styles</h2>
        {styles.map((style) => (
          <div className='style_info'>
            <img src={style.fields.Image} className="style_images"></img>
            <h4 className="style_name">{style.fields.Name}</h4>
            <p className="style_directions"><span>Directions:</span> {style.fields.Directions}</p>
          </div>
        ))}
        <CreateStyle
          updateFetchStyles={updateFetchStyles}
          fetchStyles={fetchStyles}
        />
      </section>
    </>
  )
}

export default Curlstyle
