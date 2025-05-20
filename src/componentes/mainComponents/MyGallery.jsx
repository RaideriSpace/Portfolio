import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import Carousel from './Carousel'

const MyGallery = () => {
  return (
    <>
       <p className='WIP'>Work In Progress</p>

        <br />
        <a className="footer__links--a" href='https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?page-id=3009%3A714&node-id=3012-828&viewport=1748%2C-1064%2C0.76&t=nznWeCIX4YsBytc3-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3012%3A828'>
          <div className='figma'>
            <FontAwesomeIcon className="icons" icon={faFigma} />
            <p >Figma do projeto</p> 
          </div>
        </a>

      <div className='gallery'>
      
        <Carousel />
        <button className='button__pink' onClick={()=>window.location.href = '/'}>Contato</button>
      </div>
      <div className='carousel__wave'> </div>
    </>
  )
}

export default MyGallery