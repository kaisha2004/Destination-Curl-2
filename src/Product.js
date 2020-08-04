import React from "react";
import { useParams} from "react-router-dom";


function Product(props) {
  const { name } = useParams();

  const product = props.products.find((product) => product.fields.Name === name)
  
  if (!product) {
    return <h6>Loading</h6>
  }
  return (
    <>
      <img src={product.fields.Image}></img>
      <h3>{product.fields.Name}  {product.fields.Price} </h3>
      <h4>Brand: {product.fields.Seller_Info}</h4>
      <h4>Category: {product.fields.Category}</h4>
      <h4>Size: {product.fields.Size}</h4>
      <p>{product.fields.Description}</p>
      <a href={product.fields.Webpage}><button>Purchase</button></a>
      
    </>
  );
}

export default Product;
