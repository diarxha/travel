import React from 'react'
import './Champions.css'
import champions from '../img/champions.jpg'

function Champions() {
  return (
    <div className='champions'>
        <img src={champions} className='champ-bg' />
        <div className='ucl-flight'>
            <p className='ucl-title'>Ready to be a champion?</p>
            <a className='ucl-book'>Book now</a>
            <p className='ucl-date'>June 10</p>
        </div>
    </div>
  )
}

export default Champions