import React from 'react'
import logoRaiSpace from '../assets/img/Logo.svg'

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={logoRaiSpace} alt='Logo Raideri Space Art'  />

        <div className='header__text'> 
            <a href=''><h3>Portfólio</h3></a> 
            <a href=''><h3>Sobre</h3></a>
            <a href=''><h3>Competências</h3></a>
            <button className='button__pink' onClick='/'>Contato</button>
        </div>
    </div>
  )
}

export default Header