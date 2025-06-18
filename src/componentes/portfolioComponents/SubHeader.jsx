import React, { useEffect } from 'react'
import $ from 'jquery'

const SubHeader = () => {

  // jQuery
  useEffect(() => {
    $("nav li ul:contains('•')").css("color", "var(--auxiliary2-light)");
  }, []);
    
  return (
    <nav className='sub-navbar'>
      <li className='sub-navbar__list'>
        <button className='sub-navbar__list-blue' onClick='/'> 
          UX Design
        </button>
        <ul>•</ul>
        <button className='sub-navbar__list-pink' onClick='/'>
          UI Design
        </button>
        <ul>•</ul>
        <button className='sub-navbar__list-blue' onClick='/'>
          Web Design
        </button>
        <ul>•</ul>
        <button className='sub-navbar__list-pink' onClick='/'>
          Arte Digital
        </button>
        <ul>•</ul>
        <button className='sub-navbar__list-blue' onClick='/'>
          Papel
        </button>
        <ul>•</ul>
        <button className='sub-navbar__list-pink' onClick='/'>
          Modelagem 3D
        </button>    
      </li>
    </nav>
  )
}

export default SubHeader