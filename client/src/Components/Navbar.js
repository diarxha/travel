import React from 'react'
import ReactDOM from 'react-dom';
import './Navbar.css'
import logo from "../img/aroplani2.png";

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>
            <div className='navbar-links'>
              <a href='#' className="links">Home</a>
              <a href='#' className="links">Flights</a>
              <a href='#' className="links">Bookings</a>
            </div>

            <a href="#"><i className="fa-solid fa-user" id='user-logo'></i></a>

  </div>
  )
}

export default Navbar;