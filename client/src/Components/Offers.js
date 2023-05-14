import React from 'react'
import ReactDOM from 'react-dom';
import './Offers.css'
import city1 from "../img/city1.jpg";
import city2 from "../img/city2.jpg";


function Offers(){
    return (
      <div className='offers'>
        <div className="offer1">
          <h3>Go to Istanbul!</h3>
          <img src={city1} className='foto' />
          <p>Stopover in Istanbul, which we have prepared for our transit passengers 
            traveling via Istanbul Airport, offers free accommodation at our contracted 
            hotels and the opportunity to discover the city.
            </p>
            <a href="#" className='discover'>Discover</a>
        </div>
        <div className="offer2">
          <h3>Go to Peja!</h3>
          <img src={city2} className='foto' />
          <p>Stopover in Peja, which we have prepared for our transit passengers 
            traveling via Peja Airport, offers free accommodation at our contracted 
            hotels and the opportunity to discover the city.
            </p>
            <a href="#" className='discover'>Discover</a>
        </div>
      </div>
    )
  }


export default Offers;