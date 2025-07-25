// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import useModalCloseOnEsc from "../../hooks/useModalCloseOnEsc";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  educationData,
  experienceData,
  complementaryCoursesData,
  languagesData,
} from "../../data/cvData";

// --- Variantes de Animação ---

// Variantes para as animações do Framer Motion do modal principal.
const modalVariants = {
  // Estado inicial invisível e menor centralizado.
  hidden: { opacity: 0, scale: 0.8, y: "-50%", x: "-50%" },
  // Transição de entrada suave.
  visible: {
    opacity: 1,
    scale: 1,
    y: "-50%",
    x: "-50%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  // Transição de Saída.
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// Variantes para as animações das seções de conteúdo.
const sectionContentVariants = {
  // Começa transparente e ligeiramente abaixo.
  hidden: { opacity: 0, y: 20 },
  // Entra suavemente para a posição final.
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  // Sai suavemente para cima e desaparece.
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
};

const CvModal = ({ isOpen, onClose }) => {
  // --- Estados do Componente ---
  // Controla qual aba está ativa.
  const [activeTab, setActiveTab] = useState("experience");

  // Controla qual experiência está expandida
  const [expandedExperienceId, setExpandedExperienceId] = useState(
    // Uso de função para inicialização lazy
    () => experienceData.find((exp) => exp.isHighlighted)?.id || null
  );

  // Ref para a seção de idiomas para usar o useInView e anima a barra de progresso.
  const [languagesSectionRef, isInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // --- Efeitos Colaterais ---

  // Fechar o modal com o Esc.
  useModalCloseOnEsc(true, onClose);

  // Adicionar/remover no body o "no scroll" quando estiver aberto.
  useEffect(() => {
    document.body.classList.toggle("body--no--scroll", isOpen);

    // Garante que a classe é removida quando o componente é desmontado.
    return () => {
      document.body.classList.remove("body--no--scroll");
    };
  }, [isOpen]); // Só executa quando isOpen muda.

  // --- Funções de Manipulação ---

  // Função para fechar o modal com o "Esc"

  // Função para alternar a aba ativa.
  const handleTabClick = useCallback((tabName) => {
    setActiveTab(tabName);
    setExpandedExperienceId(null);
  }, []);

  // Alternar a expansão de uma experiência.
  const toggleExperience = useCallback((id) => {
    setExpandedExperienceId((prevId) => (prevId === id ? null : id));
  }, []);

  // --- Renderização do Componente ---
  return (
    <>
      {/* Overlay */}
      <motion.div // Overlay para o shadow e para fechar ao clicar fora
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Fecha ao clicar no overlay
        role="dialog"
        aria-modal="true"
        arial-label="Modal do Currículo"
      >
        {/* Modal */}
        <motion.div
          className="cv-modal"
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()} // Impede que clicar no modal feche
          variants={modalVariants}
        >
          {/* Botão de fechar o modal. */}
          <button className="cv-modal__close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>

          {/* Abas de Navegação */}
          <div
            className="cv-modal__tabs"
            role="tablist"
            aria-label="Abas do Currículo"
          >
            {/* Experiência */}
            <button
              className={`cv-modal__tab-button ${
                activeTab === "experience" ? "active" : ""
              }`}
              onClick={() => handleTabClick("experience")}
              role="tab"
              arial-selected={activeTab === "experience"}
              id="tab-experience"
              arial-controls="panel-experience"
            >
              Experiência
            </button>

            {/* Formação */}
            <button
              className={`cv-modal__tab-button ${
                activeTab === "education" ? "active" : ""
              }`}
              onClick={() => handleTabClick("education")}
              role="tab"
              arial-selected={activeTab === "education"}
              id="tab-education"
              arial-controls="panel-education"
            >
              Formação
            </button>

            {/* Cursos Complementares */}
            <button
              className={`cv-modal__tab-button ${
                activeTab === "courses" ? "active" : ""
              }`}
              onClick={() => handleTabClick("courses")}
              role="tab"
              arial-selected={activeTab === "courses"}
              id="tab-courses"
              arial-controls="panel-courses"
            >
              Cursos Complementares
            </button>

            {/* Idiomas */}
            <button
              className={`cv-modal__tab-button ${
                activeTab === "languages" ? "active" : ""
              }`}
              onClick={() => handleTabClick("languages")}
              role="tab"
              arial-selected={activeTab === "languages"}
              id="tab-languages"
              arial-controls="panel-languages"
            >
              Idiomas
            </button>
          </div>

          {/* Conteúdo das Seçõs */}
          <div className="cv-modal__content">
            <AnimatePresence mode="wait">
              {/* Experiência */}
              {activeTab === "experience" && (
                <motion.div
                  key="experience-section"
                  className="cv-modal__section"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={sectionContentVariants}
                  role="tabpanel"
                  arial-labelledby="tab-experience"
                  id="panel-experience"
                >
                  {experienceData.map((item) => (
                    <div key={item.id} className="cv-modal__experience-item">
                      <div
                        className="cv-modal__experience-header"
                        onClick={() => toggleExperience(item.id)}
                        arial-expanded={expandedExperienceId === item.id}
                        arial-controls={`experience-details-${item.id}`}
                      >
                        <p className="cv-modal__experience-title">
                          {" "}
                          {item.title}{" "}
                        </p>
                        <p className="cv-modal__experience-company">
                          {item.company}{" "}
                          <span className="cv-modal__experience-period">
                            {" "}
                            {item.period}{" "}
                          </span>
                        </p>
                        <FontAwesomeIcon
                          icon={
                            expandedExperienceId === item.id
                              ? faChevronUp
                              : faChevronDown
                          }
                          className={`cv-modal__experience-arrow ${
                            expandedExperienceId === item.id ? "expanded" : ""
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {expandedExperienceId === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.24, ease: "easeOut" }}
                            className="cv-modal__experience-details"
                            id={`experience-details-${item.id}`}
                            arial-hidden={expandedExperienceId !== item.id}
                          >
                            <h3> Atividades: </h3>
                            {Array.isArray(item.description) ? ( // Para verificar caso description não seja um array
                              item.description.map((desc, idx) => (
                                <p
                                  key={idx}
                                  className="cv-modal__experience-description"
                                >
                                  {desc}
                                </p>
                              ))
                            ) : (
                              <p className="cv-modal__experience-description">
                                {item.description}
                              </p>
                            )}

                            <h3> Algumas Habilidades: </h3>
                            {Array.isArray(item.abilities) ? ( // Para verificar caso description não seja um array
                              item.abilities.map((abili, ida) => (
                                <p
                                  key={ida}
                                  className="cv-modal__experience-description"
                                >
                                  • {abili}
                                </p>
                              ))
                            ) : (
                              <p className="cv-modal__experience-description">
                                {item.abilities}
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Formação */}
              {activeTab === "education" && (
                <motion.div
                  className="cv-modal__section"
                  key="education-section"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={sectionContentVariants}
                  role="tabpanel"
                  aria-labelledby="tab-education"
                  id="panel-education"
                >
                  {educationData.map((item, index) => (
                    <div key={item.id || index} className="cv-modal__item">
                      <p className="cv-modal__item-title">{item.course}</p>
                      <p className="cv-modal__item-type">{item.type}</p>
                      <p className="cv-modal__item-subtitle">
                        {item.institution}
                      </p>
                      <p className="cv-modal__item-period">{item.period}</p>
                      <p className="cv-modal__item-description">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Cursos Complementares */}
              {activeTab === "courses" && (
                <motion.div
                  key="courses-section"
                  className="cv-modal__section"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={sectionContentVariants}
                  role="tabpanel"
                  aria-labelledby="tab-courses"
                  id="panel-courses"
                >
                  <ul className="cv-modal__list">
                    {complementaryCoursesData.map((item, index) => (
                      <li key={index} className="cv-modal__list-item">
                        {" "}
                        • {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Idiomas */}
              {activeTab === "languages" && (
                <motion.div
                  key="languages-section"
                  className="cv-modal__section"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={sectionContentVariants}
                  role="tabpanel"
                  aria-labelledby="tab-languages"
                  id="panel-languages"
                >
                  {/* Ref para o useInView */}
                  <div ref={languagesSectionRef}>
                    <div className="cv-modal__languages-grid">
                      {languagesData.map((item, index) => (
                        <div key={index} className="cv-modal__language-item">
                          <p className="cv-modal__language-name">
                            {" "}
                            {item.language}{" "}
                          </p>
                          <p className="cv-modal__language-level">
                            {" "}
                            {item.level}{" "}
                          </p>
                          <div className="cv-modal__progress-bar-container">
                            <motion.div
                              className="cv-modal__progress-bar-fill"
                              initial={{ width: 0 }} // Começa com 0 de largura
                              //Anima a porcentagem do idioma quando a aba está ativa e a seleção visível
                              animate={
                                activeTab === "languages" && isInView
                                  ? { width: `${item.percentage}%` }
                                  : { width: 0 }
                              }
                              transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: index * 0.1,
                              }} // Animação com delay para cada barra
                            />
                            <span className="cv-modal__progress-percentage">
                              {" "}
                              {item.percentage}%{" "}
                            </span>
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
  );
};

export default CvModal;
