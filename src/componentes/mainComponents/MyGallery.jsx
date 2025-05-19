import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons'


const MyGallery = () => {
  return (
    <>
      <div className='gallery'>Work In Progress</div>

      <br />

      <a className="footer__links--a" href='https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?page-id=3009%3A714&node-id=3012-828&viewport=1748%2C-1064%2C0.76&t=nznWeCIX4YsBytc3-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3012%3A828'>
        <div className='figma'>
          <FontAwesomeIcon className="icons" icon={faFigma} />
          <p >Figma do projeto</p> 
        </div>
      </a>
    </>
  )
}

export default MyGallery