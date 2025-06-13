import React, { useRef, useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importa os componentes filhos estruturais
import Contato from './componentes/modalComponents/Contato'
import CvModal from './componentes/modalComponents/CvModal'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Main from './componentes/Main'
import Portfolio from './pages/Portfolio'

// Importar os hooks
import useBodyScrollLock from './hooks/useBodyScrollLock'
import { AnimatePresence } from 'framer-motion'

const App = () => {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  // Estado para controlar a visibilidade dos modais.
  const [isContactModalOpen, setIsContactModalOpen] = useState(false) 
  const [isCvModalOpen, setIsCvModalOpen] = useState(false) 

  // Scroll desabilitado quando um modal abre.
  useBodyScrollLock(isContactModalOpen || isCvModalOpen);

  // Funções para fazer o scroll a seção.
  const handleAboutClick = useCallback(() => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSkillsClick = useCallback(() => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Função para abrir e fechar os modais.
  const handleOpenContactModal = useCallback(() => {
    setIsContactModalOpen(true);
  }, []);
  const handleCloseContactModal = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  const handleOpenCvModal = useCallback(() => {
    setIsCvModalOpen(true);
  }, []);
  const handleCloseCvModal = useCallback(() => {
    setIsCvModalOpen(false);
  }, []);
 
  return (
    <Router>

      <Header 
        onAboutClick={handleAboutClick} 
        onSkillsClick={handleSkillsClick} 
        onContactClick={handleOpenContactModal} 
      />
      <Routes>
        {/* Rota para a página Home */}
        <Route
          path='/'
          element={
            <Main
              aboutRef={aboutRef}
              skillsRef={skillsRef}
              onContactClick={handleOpenContactModal}
              onCvClick={handleOpenCvModal}
            />
          }
        />

        {/* Rota para a página de Portfólio */}
        <Route path='/portfolio' element={<Portfolio />} />

        {/* Futuras rotas aqui */}
      </Routes>

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
          <CvModal onClose={handleCloseCvModal} />
        )}
      </AnimatePresence>
    </Router>
  )
}

export default App