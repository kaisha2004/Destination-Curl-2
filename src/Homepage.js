import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import two_curls from "./two_curls.jpg"
import threeC_curls from "./3C_curls.jpg"

function Homepage(props) {
  const { products } = props
  return (
    <>
      <img src={two_curls} alt="2C"/>
      <img src={threeC_curls} alt="3C"/>
      {products.map((product) => {
        return (
          <div>
            <img src={product.fields.Image}></img>
            <Link key={product.fields.Name} to={`/product/${product.fields.Name}`}>
              <p>{product.fields.Seller_Info}{product.fields.Name}</p>
            <p>{product.fields.Price}</p>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Homepage
