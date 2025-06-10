import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion'; // Animar a barra apenas quando visível
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';

import { 
  educationData,
  experienceData,
  complementaryCoursesData,
  languagesData,
} from '../data/cvData';

const CvModal = ({ isOpen, onClose }) => {

  // Controla qual aba está ativa 
  const [activeTab, setActiveTab] = useState ('experience');

  // Controla qual experiência está expandida
  const [expandedExperienceId, setExpandedExperienceId] = useState(
    experienceData.find(exp => exp.isHighlighted)?.id || null
  );



  // Ref para a seção de idiomas para usar o useInView
  const languagesSectionRef = useRef(null);

  const isInView = true

  // Adicionar/remover no body o "no scroll" quando estiver aberto
  useEffect(() => {
    isOpen ? (
      document.body.classList.add('body--no--scroll')
    ) : (
      document.body.classList.remove('body--no--scroll')
    );

    return () => {
      document.body.classList.remove('body--no--scroll');
    };
  }, [isOpen]);

  // Variantes para as animações do Framer Motion do modal principal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: '-50%', x: '-50%'},
    visible: { opacity: 1, scale: 1, y: '-50%', x: '-50%', transition: {duration: 0.3, ease: 'easeOut'} },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: 'easeIn' }},
  };

  // Variantes para as animações das seções de conteúdo
  const sectionContentVariants = {
    hidden: { opacity: 0, y: 20 }, // Começa transparente e ligeiramente abaixo
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }, // Entra suavemente para a posição final
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } }, // Sai suavemente para cima e desaparece
  };

  // Função para alternar a expansão de uma experiência
  const toggleExperience = (id) => {
    setExpandedExperienceId(prevId => (prevId === id ? null : id));
  };

  return (
        <>
          {/* Overlay */}
          <motion.div // Overlay para o shadow e para fechar ao clicar fora
            className='modal-overlay' 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Fecha ao clicar no overlay
            key='modal-overlay' // Key única
          >

            {/* Modal */}
            <motion.div
              className='cv-modal'
              initial='hidden'
              animate='visible'
              exit='exit'
              onClick={(e) => e.stopPropagation()} // Impede que clicar no modal feche
              key='cv-modal'
              variants={modalVariants}
            >

              <button className='cv-modal__close-button' onClick={onClose}>
                <FontAwesomeIcon icon={faXmark} />
              </button>

              {/* Abas de Navegação */}
              <div className='cv-modal__tabs'>

                {/* Experiência */}
                <button
                  className={`cv-modal__tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Experiência
                </button>

                {/* Formação */}
                <button
                  className={`cv-modal__tab-button ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  Formação
                </button>

                {/* Cursos Complementares */}
                <button
                  className={`cv-modal__tab-button ${activeTab === 'courses' ? 'active' : ''}`}
                  onClick={() => setActiveTab('courses')}
                >
                  Cursos Complementares
                </button>
                
                {/* Idiomas */}
                <button
                  className={`cv-modal__tab-button ${activeTab === 'languages' ? 'active' : ''}`}
                  onClick={() => setActiveTab('languages')}
                >
                  Idiomas
                </button>
              </div>

              {/* Conteúdo das Seçõs */}
              <div className='cv-modal__content'>

                <AnimatePresence mode='wait'>
                  {/* Experiência */}
                  {activeTab === 'experience' && (
                    <motion.div 
                      key='experience-section'
                      className='cv-modal__section'
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      variants={sectionContentVariants}
                    >
                      {experienceData.map((item) => 
                        <div key={item.id} className='cv-modal__experience-item'>
                          <div
                            className='cv-modal__experience-header'
                            onClick={() => toggleExperience(item.id)}
                          >
                            <p className='cv-modal__experience-title'> {item.title} </p>
                            <p className='cv-modal__experience-company'> 
                              {item.company} <span className='cv-modal__experience-period'> {item.period} </span>
                            </p>
                            <FontAwesomeIcon
                              icon={expandedExperienceId === item.id ? faChevronUp : faChevronDown}
                              className={`cv-modal__experience-arrow ${expandedExperienceId === item.id? 'expanded' : ''}`}
                            />
                          </div>
                          <AnimatePresence>
                            {expandedExperienceId === item.id && (
                              <motion.div
                                initial = {{ opacity:0, height: 0 }}
                                animate = {{ opacity: 1, height: 'auto' }}
                                exit={{ opacity:0, height: 0 }}
                                transition={{ duration: 0.24, ease: 'easeOut' }}
                                className='cv-modal__experience-details'
                              >
                                <h3> Atividades:  </h3>
                                {Array.isArray(item.description) ? ( // Para verificar caso description não seja um array
                                  item.description.map((desc, idx) => (
                                    <p key={idx} className='cv-modal__experience-description'> {desc} </p>
                                  ))
                                ) : (
                                  <p className='cv-modal__experience-description'>{item.description}</p>
                                )}
                                
                                <h3> Algumas Habilidades: </h3>
                               {Array.isArray(item.abilities) ? ( // Para verificar caso description não seja um array
                                  item.abilities.map((abili, ida) => (
                                    <p key={ida} className='cv-modal__experience-description'>• {abili}</p>
                                  ))
                                ) : (
                                  <p className='cv-modal__experience-description'>{item.abilities}</p>
                                )}

                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Formação */}
                  {activeTab === 'education' && (
                    <motion.div 
                      className='cv-modal__section'
                      key='education-section'
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      variants={sectionContentVariants}
                    >
                      {educationData.map((item, index) => (
                        <div key={index} className='cv-modal__item'>
                          <p className='cv-modal__item-title'>{item.course}</p>
                          <p className='cv-modal__item-type'>{item.type}</p>
                          <p className='cv-modal__item-subtitle'>{item.institution}</p>
                          <p className='cv-modal__item-period'>{item.period}</p>
                          <p className='cv-modal__item-description'>{item.description}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Cursos */}
                  {activeTab === 'courses' && (
                    <motion.div 
                      key='courses-section'
                      className='cv-modal__section'
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      variants={sectionContentVariants}
                    >
                      <ul className='cv-modal__list'>
                        {complementaryCoursesData.map((item, index) => (
                          <li key={index} className='cv-modal__list-item'> • {item} </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Idiomas */}
                  {activeTab === 'languages' && (
                    <motion.div 
                      key='languages-section'
                      className='cv-modal__section'
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      variants={sectionContentVariants} 
                    >
                      <div ref={languagesSectionRef}>
                        <div className='cv-modal__languages-grid'>
                          {languagesData.map((item, index) => (
                            <div key={index} className='cv-modal__language-item'>
                              <p className='cv-modal__language-name'> {item.language} </p>
                              <p className='cv-modal__language-level'> {item.level} </p>
                              <div className='cv-modal__progress-bar-container'>
                                <motion.div
                                  className='cv-modal__progress-bar-fill'
                                  initial={{ width: 0}} // Começa com 0 de largura
                                  //Anima a porcentagem do idioma quando a aba está ativa e a seleção visível
                                  animate= {activeTab === 'languages' && isInView ? { width: `${item.percentage}%`} : { width: 0 }}
                                  transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }} // Animação com delay para cada barra
                                />
                                <span className='cv-modal__progress-percentage'> {item.percentage}% </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>       
          </motion.div>
        </>
  )
}

export default CvModal