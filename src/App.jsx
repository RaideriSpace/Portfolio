import React from 'react'
import { useRef, useState } from 'react'

// Importa os componentes filhos estruturais
import Header from './componentes/Header'
import Main from './componentes/Main'
import Footer from './componentes/Footer'
import Contato from './componentes/Contato'

// Importar os hooks
import useBodyScrollLock from './hooks/useBodyScrollLock'
import { AnimatePresence } from 'framer-motion'

const App = () => {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false) // Estado para controlar a visibilidade do modal

  useBodyScrollLock(isContactModalOpen);

  // Função para fazer o scroll até o "Sobre"
  const handleAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  // Função para fazer o scroll até o "Competências"
  const handleSkillsClick = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  // Função para abrir o modal de contato
  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  }

  // Função para fechar o modal de contato
  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  }
 
  return (
    <>
      <Header 
        onAboutClick={handleAboutClick} 
        onSkillsClick={handleSkillsClick} 
        onContactClick={handleOpenContactModal} 
      />
      
      <Main 
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        onContactClick={handleOpenContactModal} 
      />

      <Footer />

      {/* Renderiza o componente Contato condicionalmente */}
      <AnimatePresence>
        {isContactModalOpen && (
          <Contato onClose={handleCloseContactModal} /> // Passa a função de fechar
        )}
      </AnimatePresence>

    </>
  )
}

export default App