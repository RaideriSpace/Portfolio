import React, { useRef } from 'react'
import MyGallery from './mainComponents/MyGallery.jsx'
import About from './mainComponents/About.jsx'
import Skills from './mainComponents/Skills.jsx'
import Carousel from './mainComponents/Carousel.jsx'


const Main = ({ aboutRef, skillsRef}) => {

  return (
    <> 
      <MyGallery />
      <About ref={aboutRef} />
      <Skills ref={skillsRef}/>
    </>
  )
}

export default Main