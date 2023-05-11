import React from 'react'
import ReactDOM from 'react-dom';
import './Hero.css'
import mbasja from "../img/mbasja.png";

function Hero() {
    return (
      <div className='navbar'>
        <img src={mbasja} alt="bg" id='mbasja'/>
        <p className='search-title'>Search Flights</p>
        <div className="flight-search">
            <div className="search-cities">
                <p className='cities'>Prishtina</p>
                <p className='to'><i class="fa-solid fa-arrow-right"></i></p>
                <p className='cities'>Peja</p>
            </div>
            <a href='#' className='search'>Search</a>
        </div>
    </div>
    )
  }


export default Hero;
