import React, { useRef, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importa os componentes filhos estruturais
import ContatoModal from './componentes/modalComponents/ContatoModal'
import CvModal from './componentes/modalComponents/CvModal'
import Footer from './componentes/Footer'
import Header from './componentes/Header'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

// Importar os hooks
import useBodyScrollLock from './hooks/useBodyScrollLock'
import useModal from './hooks/useModal'

const App = () => {

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  // Funções para lidar com os modais.
  const { isOpen: isContactModalOpen, openModal: handleOpenContactModal, closeModal: handleCloseContactModal } = useModal();
  const { isOpen: isCvModalOpen, openModal: handleOpenCvModal, closeModal: handleCloseCvModal } = useModal();

  // Scroll desabilitado quando um modal abre.
  useBodyScrollLock(isContactModalOpen || isCvModalOpen);

  // Funções para fazer o scroll a seção.
  const handleAboutClick = useCallback(() => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSkillsClick = useCallback(() => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            <Home
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

      {/* Renderiza o componente ContatoModal condicionalmente */}
      <AnimatePresence>
        {isContactModalOpen && (
          <ContatoModal onClose={handleCloseContactModal} /> // Passa a função de fechar
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