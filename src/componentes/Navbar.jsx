import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ isPortfolioPage, handleHomeClick, handleNavigationClick, onAboutClick, onSkillsClick, handlePortfolioClick, onContactClick }) => (
  <nav className='navbar'>
    <Link to="/portfolio" className='button__common' onClick={handlePortfolioClick}> 
      Portfólio 
    </Link> 
    {isPortfolioPage ? (
      <Link to="/" className='button__common' onClick={handleHomeClick}> 
        Home 
      </Link>
    ) : (
      <>
        <button className='button__common' onClick={() => handleNavigationClick(onAboutClick)}> 
          Sobre 
        </button>
        <button className='button__common' onClick={() => handleNavigationClick(onSkillsClick)}> 
          Competências 
        </button>
      </>
    )}
    <button className='button__pink' onClick={() => handleNavigationClick(onContactClick)}> 
      Contato 
    </button>
  </nav>
);
export default Navbar