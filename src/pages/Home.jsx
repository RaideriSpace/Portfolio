import React from 'react';

// Importa os componentes filhos da pasta mainComponents.
import About from '../componentes/mainComponents/About.jsx'
import MyGallery from '../componentes/mainComponents/MyGallery.jsx'
import Skills from '../componentes/mainComponents/Skills.jsx'

const Home = ({ aboutRef, skillsRef, onCvClick }) => {

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

export default Home