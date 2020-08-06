import React from "react"
import { Link } from "react-router-dom"
import two_curls from "./two_curls.jpg"
import three_curls from "./3C_curls.jpg"
import four_curls from "./4c_curls.jpg"
import './App.css';

function Homepage(props) {
  const { products } = props
  return (
    <>
      <h2 className='twotitle'>Products for 2C Curls</h2>
      <div className="twocee">
      <img src={two_curls} className="curls" alt="2C" />
      {products.filter(product => product.fields.CurlType.includes('2C')).map(product => (
          <div>
            <img src={product.fields.Image}></img>
            <Link key={product.fields.Name} to={`/product/${product.fields.Name}`}>
              <p>{product.fields.Seller_Info}{product.fields.Name}</p>
            <p>{product.fields.Price}</p>
            </Link>
          </div>
      ))}
      </div>
      <h2 className='threetitle'>Products for 3C Curls</h2>
      <div className="threecee">
      <img src={three_curls} className="curls" alt="3C" />
      {products.filter(product => product.fields.CurlType.includes('3C')).map(product => (
          <div>
            <img src={product.fields.Image}></img>
            <Link key={product.fields.Name} to={`/product/${product.fields.Name}`}>
              <p>{product.fields.Seller_Info}{product.fields.Name}</p>
            <p>{product.fields.Price}</p>
            </Link>
          </div>
      ))}
      </div>
      <h2 className='fourtitle'>Products for 4C Curls</h2>
      <div className='fourcee'>
      <img src={four_curls} className="curls"alt="4C" />
      
      {products.filter(product => product.fields.CurlType.includes('4C')).map(product => (
          <div>
            <img src={product.fields.Image}></img>
            <Link key={product.fields.Name} to={`/product/${product.fields.Name}`}>
              <p>{product.fields.Seller_Info}{product.fields.Name}</p>
            <p>{product.fields.Price}</p>
            </Link>
        </div>
      ))}
      </div>
    </>
  )
}

export default Homepage
