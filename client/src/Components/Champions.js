import React from 'react'
import './Champions.css'
import champions from '../img/champions.jpg'

function Champions() {
  return (
    <div className='champions'>
        <img src={champions} className='champ-bg' />
    </div>
  )
}

export default Champions