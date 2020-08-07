import React from "react"
import { useParams } from "react-router-dom"
import "./App.css"

function Product(props) {
  const { name } = useParams()

  const product = props.products.find((product) => product.fields.Name === name)

  if (!product) {
    return <h6>Loading</h6>
  }
  return (
    <>
      <section className="center">
        <img src={product.fields.Image} className="product_image" alt='productos'></img>
        <div className="product_title">
          <h3>{product.fields.Name}</h3>
          <h3>{product.fields.Price} </h3>
        </div>
        <div className="product_info">
          <h4>Brand: {product.fields.Seller_Info}</h4>
          <h4>Category: {product.fields.Category}</h4>
          <h4>Size: {product.fields.Size}</h4>
        </div>
        <p className="product_description">{product.fields.Description}</p>

        <a href={product.fields.Webpage}>
          <button className="product_btn">Purchase</button>
        </a>
      </section>
    </>
  )
}

export default Product
