import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contato = ({ onClose }) => { // Adiciona as props
  
  // Animação de descida/subida
  const modalVariants = {
    hidden: { opacity: 0, y: '-100vh' }, // Vem de cima da tela
    visible: {
      opacity: 1,
      y: '0', // Desce para o centro
      transition: {
        type: 'spring', // Efeito mola
        damping: 25, // Ajuste da mola
        stiffness: 250, // Ajusta a rigidez
      },
    },
    exit: { 
      opacity: 0, 
      y: '-100vh', // Volta pra cima ao sair
      transition: { 
        duration: 0.3,
        ease: 'easeOut'
      } }, 
  }

  return (

    <motion.div // Overlay para o shadow e para fechar ao clicar fora
      className='modal-overlay' 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Fecha ao clicar no overlay
      key='modal-overlay' // Key única
    >
      <motion.div // O modal
        className='contact-modal' 
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        onClick={(e) => e.stopPropagation()} // Impede que clicar no modal feche o overlay
        key='contact-modal' // Key única
      >
        <div className='contact-modal__top'>
          <h2 className='contact-modal__title subtitle'> <span className='gradient-text'>Lucas Alves Pinheiro</span> </h2>
        </div>

        <div className='contact-modal__bottom'>
          <div className='contact-modal__links-box'>

            {/* Link para o WhatsApp. */}
            <a className="contact-modal__links" href='https://wa.me/11989157255' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className="icons" icon={faWhatsapp} />
                        <p>(11) 98915-7255</p>
            </a>
              
            {/* Link para o LinkedIn. */}
            <a className="contact-modal__links" href='https://www.linkedin.com/in/lucasalvespinheiro/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className="icons" icon={faLinkedin} />
                        <p>/lucasalvespinheiro</p>
            </a>
              
            {/* Link para o Behance. */}
            <a className="contact-modal__links" href='https://www.behance.net/raideri' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className="icons" icon={faBehance} />
                        <p>/raideri</p>
            </a>
                     
            {/* Link para o GitHub. */}
            <a className="contact-modal__links" href='https://github.com/RaideriSpace' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon className="icons" icon={faGithub} />
                        <p>/RaideriSpace</p>
            </a>
          </div>

          {/* Link para o E-mail. */}
          <a className="contact-modal__links" href='mailto:l.pinheiro.w@gmail.com'>
                      <FontAwesomeIcon className="icons" icon={faEnvelope} />
                      <p>l.pinheiro.w@gmail.com</p>
          </a>
  
        </div>

      </motion.div>

    </motion.div>

  )
}

export default Contato