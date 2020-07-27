import React from'react';
import './css/home.css';
import Slider from './slider';


export default function Home(){
    return(
        <div className="main-div">
        <div className="heading-div">
            <h1 style={{marginTop: "10px"}}>Welcome to my Shoe Store</h1>
            <h1 style={{marginTop: "5px"}}>Latest Collection Now Available Here</h1>
        </div>
        <Slider />
        </div>
        )
}