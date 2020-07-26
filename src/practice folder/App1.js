import React from'react';
import Navbar from './components/Navbar';
import Home from  './components/pages/home';
import Products from  './components/pages/products';
import About from  './components/pages/about';

// import Card from './components/cards';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App1(){
    return(
    <>
        <Router>
        
            <Navbar />
            <Switch>        
                  <Route exact path="/products">
                        <Products />
                  </Route>  
                  
                  <Route exact path="/about">
                        <About />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
                </Switch> 
          </Router>

        
    </>
    )
}