import React from 'react'
import ReactDOM from 'react-dom';
import './Hero.css'
import mbasja from "../img/mbasja.png";

function Hero() {
    return (
      <div className='navbar'>
        <img src={mbasja} alt="bg" id='mbasja'/>
        <div className="flight-search">
            
        </div>
    </div>
    )
  }


export default Hero;
