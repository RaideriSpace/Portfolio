import React, { useRef, useState } from 'react'

// Importa os componentes filhos estruturais
import Header from './componentes/Header'
import Main from './componentes/Main'
import Footer from './componentes/Footer'
import Contato from './componentes/Contato'
import CvModal from './componentes/CvModal'

// Importar os hooks
import useBodyScrollLock from './hooks/useBodyScrollLock'
import { AnimatePresence } from 'framer-motion'

const App = () => {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false) // Estado para controlar a visibilidade do modal Contato
  const [isCvModalOpen, setIsCvModalOpen] = useState(false) // Estado para controlar a visibilidade do modal CV

  // Scroll desabilitado quando um modal abre
  useBodyScrollLock(isContactModalOpen || isCvModalOpen);

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

  // Função para abrir o modal de CV
  const handleOpenCvModal = () => {
    setIsCvModalOpen(true);
  };

  // Função para fechar o modal de CV
  const handleCloseCvModal = () => {
    setIsCvModalOpen(false);
  };
 
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
        onCvClick={handleOpenCvModal}
      />

      <Footer />

      {/* Renderiza o componente Contato condicionalmente */}
      <AnimatePresence>
        {isContactModalOpen && (
          <Contato onClose={handleCloseContactModal} /> // Passa a função de fechar
        )}
      </AnimatePresence>

      {/* Renderiza o componente CV condicionalmente */}
      <AnimatePresence>
        {isCvModalOpen && (
          <CvModal isOpen={isCvModalOpen} onClose={handleCloseCvModal} />
        )}
      </AnimatePresence>
    </>
  )
}

export default App