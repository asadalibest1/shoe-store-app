import React from'react';
import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/home';
import Products from './pages/products';
import About from './pages/about';
import  './css/route.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles({
    Li:{
        textDecoration: "none",
        color: "white",
        '&:hover':{
            color: "red",
        },
    }
  });
  export default function _Route(){
    const classes = useStyles();

    return(
        <>
          <ul>
            <li>
            <Link to="/" className={ classes.Li }>Home</Link>
            </li>
            <li>
              <Link exact to="/products" className={ classes.Li }>Products</Link>
            </li>
            <li>
              <Link exact to="/about" className={ classes.Li }>About</Link>
            </li>
          </ul>
        </>
        )
}