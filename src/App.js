import React, {useEffect, useState} from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Homepage from './Homepage.js';
import Curlstyle from './Curlstyle.js';
import Product from './Product.js';
import axios from 'axios';
import Blog from './Blog.js'


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
    <div className="wrap">
       <header>
         <h1>Destination Curl</h1>
          <nav>
           <Link to="/">Homepage</Link>
           <Link to="/curlstyle-ideas">Curly Styles</Link>
           <Link to="/curly-blog">Curly Blog</Link>
         </nav>
       </header>
      
       <Route path="/" exact>
        <Homepage products={products}/>
       </Route>
       <Route path="/curlstyle-ideas">
         <Curlstyle />
       </Route>
       <Route path="/curly-blog">
        <Blog />
       </Route>
       <Route path="/product/:name">
        <Product products={products} />
       </Route>
    
      <footer >
       <hr class="style-eight" />
      </footer>
    </div>
  );
}

export default App;
