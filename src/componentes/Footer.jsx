import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import logoRaiSpace from '../assets/img/Logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__links-container' >

        <a className="footer__links--a" href='https://wa.me/11989157255'>
          <FontAwesomeIcon className="icons" icon={faWhatsapp} />
          <p>(11) 98915-7255</p>
        </a>

        <a className="footer__links--a" href='https://www.linkedin.com/in/lucasalvespinheiro/'>
          <FontAwesomeIcon className="icons" icon={faLinkedin} />
          <p>/lucasalvespinheiro</p>
        </a>
        
        <a className="footer__links--a">
          <FontAwesomeIcon className="icons" icon={faEnvelope} />
          <p>l.pinheiro.w@gmail.com</p>
        </a>

        <a className="footer__links--a" href='https://www.behance.net/raideri'>
          <FontAwesomeIcon className="icons" icon={faBehance} />
          <p>/raideri</p>
        </a>
        
        <a className="footer__links--a" href='https://github.com/RaideriSpace'>
          <FontAwesomeIcon className="icons" icon={faGithub} />
          <p>/RaideriSpace</p>
        </a>
      </div>
      
      <img className='footer__logo' src={logoRaiSpace} alt='Logo Raideri Space Art'  />
      
    </div>
  )
}

export default Footer