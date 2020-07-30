import React from'react';
import Navbar from './components/Navbar';
import Home from  './components/pages/home';
import Products from  './components/pages/products';
import About from  './components/pages/about';
import Copyright from  './components/copyRight';
import Footer from  './components/footer';
import Cart from "./components/pages/Cart";
import LaunchShoe from "./components/pages/launchShoe";

// import Card from './components/cards';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

export default function App1(){
    return(
    <div style={{margin:0, padding:0 }}>
        <Router>
        
            <Navbar />
            <Switch>        
                  <Route  path="/products/:slug" component={LaunchShoe} />
                  <Route exact path="/products" component={Products} />
                  
                  <Route path="/about">
                        <About />
                  </Route>
                  <Route path="/cart">
                        <Cart />
                  </Route> 
                  <Route path="/">
                      <Home />
                  </Route>
                  

                </Switch> 
          </Router>
            <Footer />
            <Copyright />

        
    </div>
    )
}