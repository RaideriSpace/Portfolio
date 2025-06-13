import React from 'react';

// Importa os componentes filhos da pasta mainComponents.
import About from './mainComponents/About.jsx'
import MyGallery from './mainComponents/MyGallery.jsx'
import Skills from './mainComponents/Skills.jsx'

const Main = ({ aboutRef, skillsRef, onCvClick }) => {

  return (
    // Contêiner principal do conteúdo.
    <main className='main-content'> 
      
      <MyGallery />

       {/* Passa as refs para os componentes About e Skills. */}
      <About ref={aboutRef} onCvClick={onCvClick} />
      
      <Skills ref={skillsRef}/>
    </main>
  )
}

export default Main