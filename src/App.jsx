import React from 'react'
import { useRef } from 'react'

// Importa os componentes filhos estruturais
import Header from './componentes/Header'
import Main from './componentes/Main'
import Footer from './componentes/Footer'

const App = () => {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const handleAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleSkillsClick = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Header 
        onAboutClick={handleAboutClick} 
        onSkillsClick={handleSkillsClick} 
      />
      
      <Main 
        aboutRef={aboutRef}
        skillsRef={skillsRef}
      />

      <Footer />
    </>
  )
}

export default App