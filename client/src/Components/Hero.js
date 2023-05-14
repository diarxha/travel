import React from 'react'
import ReactDOM from 'react-dom';
import './Hero.css'
import mbasja from "../img/aroplani2.jpg";
import city1 from "../img/city1.jpg";

function Hero() {
    return (
      <div className='hero'>
        <img src={mbasja} alt="bg" id='mbasja'/>
        <p className='search-title'>Hello, where do you wanna explore?</p>
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

  function Offers(){
    return (
      <div className='offers'>
        <div className="offer">
          <p>Go to Istanbul!</p>
          <img src={city1}/>
        </div>
      </div>
    )
  }


export default Hero;