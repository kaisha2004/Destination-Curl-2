import React, {useEffect, useState} from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import styled from 'styled-components'
import Homepage from './Homepage.js';
import Curlstyle from './Curlstyle.js';
import Product from './Product.js';
import axios from 'axios';


function App() {
  const [products, updateProducts] = useState([])
  useEffect(() => {
    const makeApiCall = async () => {
      
      const data = await axios.get(
        "https://api.airtable.com/v0/appdyetqhlvfSq2Hv/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
        
      )
      updateProducts(data.data.records)
    }
    makeApiCall()
  },[])
  return (
    <div>
      <header>
        <h1>Destination Curl</h1>
      <nav>
          <Link to="/">Homepage</Link>
          <Link to="/curlstyle-ideas">Curlstyles</Link>
      </nav>
      <Route path="/" exact>
          <Homepage products={products}/>
      </Route>
      <Route path="/curlstyle-ideas">
        <Curlstyle />
      </Route>
      <Route path="/product/:name">
        <Product products={products} />
      </Route>
      
      </header>
    </div>
  );
}

export default App;
