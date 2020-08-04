import React from "react";
import { useParams} from "react-router-dom";


function Products(props) {
  const { Name } = useParams();

  // const Products = Products.find((Product) => Product.Name === Name);
  // console.log(Product);



  return (
    <>
      <img src={props.Image}></img>
      <h1>{props.Name}</h1>
      <h6>{props.Price}</h6>
      <a href={props.Webpage}>
      {/* <button>Click To Purchase</button> trying to figure this out */}
      </a>
      
    </>
  );
}

export default Products;
