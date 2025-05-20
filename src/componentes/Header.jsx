import React, { useState, useEffect, useRef }from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import logoRaiSpace from '../assets/img/Logo.svg'
import useIsMobile from '../hooks/useIsMobile';

const Header = ({ onAboutClick, onSkillsClick }) => {
  const [open,setOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setOpen (!open);
  const closeMenu = () => setOpen (false);

  useEffect(() => { 
    if (isMobile) { 
    document.body.classList.toggle('body--no--scroll', open)
    }
    
    return () => {
      document.body.classList.remove('body--no--scroll');
    };
  }, [open, isMobile]);
  
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: '0%' },
    exit: { opacity: 0, x: '100%'},
   }

   const handleAboutClick = () => {
    if (onAboutClick){
      onAboutClick();
    }
    if (isMobile){
      closeMenu();
    }
   }

   const handleSkillsClick = () => {
    if (onSkillsClick){
      onSkillsClick();
    }
    if (isMobile) {
      closeMenu();
    }
   }

  return (
    <div className='header'>
        <img className='logo' src={logoRaiSpace} alt='Logo Raideri Space Art'  />

        {isMobile &&(
        <div className="hamburger" onClick={toggleMenu}>
         ☰
        </div>
        )}

        {!isMobile && (
          <div className='header__text'>
            <button className='button__common' onClick={()=>window.location.href = '/'}>Portfólio</button> 
            <button className='button__common' onClick={handleAboutClick}>Sobre</button>
            <button className='button__common' onClick={handleSkillsClick}>Competências</button>
            <button className='button__pink' onClick={()=>window.location.href = '/'}>Contato</button>
          </div>
        )}

        <AnimatePresence>
          {isMobile && open && (
            <>
              <motion.div
                className='header__text'
                initial='hidden'
                animate='visible'
                exit='exit'
                variants={mobileMenuVariants}
                transition={{duration:0.24}}
              >
                
                <button className='button__common' onClick={()=>window.location.href = '/'}>Portfólio</button> 
                <button className='button__common' onClick={handleAboutClick}>Sobre</button>
                <button className='button__common' onClick={handleSkillsClick}>Competências</button>
                <button className='button__pink' onClick={()=>window.location.href = '/'}>Contato</button>

              </motion.div>

              <motion.div
                className='menu-overlay'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0}}
                transition={{ duration: 0.24 }}
                onClick={closeMenu}
              />
            </>
          )}
        </AnimatePresence>
    </div>
  );
};

export default Header