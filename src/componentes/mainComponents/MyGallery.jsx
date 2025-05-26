import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Carousel from './Carousel' // Importa o componente Carousel.

const MyGallery = () => {
  return (
    <>
      <div className='gallery'>
      
        <Carousel />
        <button className='button__pink' onClick={()=>window.location.href = '/'}> Portfólio </button>
      </div>
      
    </>
  )
}

export default MyGallery