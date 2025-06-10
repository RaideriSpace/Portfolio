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
            <a className='sub-navbar__list-blue' href=''> 
                UX Design
            </a>
            <ul>•</ul>
            <a className='sub-navbar__list-pink' href=''>
                UI Design
            </a>
            <ul>•</ul>
            <a className='sub-navbar__list-blue' href=''>
                Web Design
            </a>
            <ul>•</ul>
            <a className='sub-navbar__list-pink' href=''>
                    Arte Digital
            </a>
            <ul>•</ul>
            <a className='sub-navbar__list-blue' href=''>
                    Papel
            </a>
            <ul>•</ul>
            <a className='sub-navbar__list-pink' href=''>
                    Modelagem 3D
            </a>    
        </li>
    </nav>
  )
}

export default SubHeader