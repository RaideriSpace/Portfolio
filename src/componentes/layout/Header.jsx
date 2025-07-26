import React, { useState, useEffect, useCallback, useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoRaiSpace from "../../assets/img/Logo.svg";
import useIsMobile from "../../hooks/useIsMobile"; // Hook personalizado para detectar se é mobile.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; // Importa o ícone de menu (hamburguer) e o menu X.
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./Navbar";

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: "0%" },
  exit: { opacity: 0, x: "100%" },
};

const Header = ({ onAboutClick, onSkillsClick, onContactClick }) => {
  const [open, setOpen] = useState(false); // Estado para controlar a abertura/fechamento do menu mobile.
  const isMobile = useIsMobile(); // Hook para verificar se a tela é mobile.
  const location = useLocation(); // Hook para acessar o objeto de localização atual
  const navigate = useNavigate(); // Hook para navegação programática

  // Verifica se a rota atual é a página de portfólio
  const isPortfolioPage = useMemo(
    () => location.pathname != "/",
    [location.pathname]
  );

  // Alterna o estado 'open'.
  const toggleMenu = useCallback(() => setOpen((prevOpen) => !prevOpen), []);
  // Fecha o menu.
  const closeMenu = useCallback(() => setOpen(false), []);

  // Efeito colateral para controlar a rolagem do body quando o menu mobile está aberto.
  useEffect(() => {
    if (isMobile) {
      // Adiciona ou remove a classe 'body--no--scroll' para prevenir rolagem.
      document.body.classList.toggle("body--no--scroll", open);
    }

    // Função de limpeza: remove a classe quando o componente é desmontado ou 'open'/'isMobile' mudam.
    return () => {
      document.body.classList.remove("body--no--scroll");
    };
  }, [open, isMobile]); // Dependências do useEffect.

  const handleHomeClick = useCallback(() => {
    navigate("/"); // Navega para a home
    closeMenu();
  }, [navigate, closeMenu]);

  // Funções de clique para os botões do menu.
  const handleNavigationClick = useCallback(
    (action) => {
      // Chama a função de ação se ela existir.
      action?.();
      if (isMobile) {
        closeMenu();
      }
    },
    [isMobile, closeMenu] // Dependências para useCallback
  );

  const handlePortfolioClick = useCallback(() => {
    "";
    navigate("/portfolio"); // Navega para a página de portfólio
    closeMenu();
  }, [navigate, closeMenu]);

  return (
    // Contêiner principal do cabeçalho.
    <header className="header">
      {/* Contêiner para o logo, alinhado à esquerda. */}
      <div className="header__left">
        {/* Link do logo para a página inicial. */}
        <Link to="/" className="header__logo-link">
          {/* Imagem do logo. */}
          <img
            className="header__logo"
            src={logoRaiSpace}
            alt="Logo Raideri Space Art"
          />
        </Link>
      </div>

      {/* Seção "Work In Progress" */}
      <div className="WIP__Container">
        <p className="WIP">Work In Progress</p>
        <div className="WIP__Container--links">
          <a
            className="footer__links--a"
            href="https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?page-id=3009%3A714&node-id=3012-828&viewport=1748%2C-1064%2C0.76&t=nznWeCIX4YsBytc3-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3012%3A828"
            target="_blank" // Abrir em nova aba.
            rel="noopener noreferrer" // Boa prática de segurança.
            aria-label="Ver design do projeto no Figma"
          >
            <div className="figma">
              <FontAwesomeIcon
                className="icons_temp"
                icon={faFigma}
                aria-hidden="true"
              />
              <p>Figma do projeto</p>
            </div>
          </a>

          <a
            className="footer__links--a"
            href="https://github.com/RaideriSpace/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver repositório do projeto no Github"
          >
            <div className="figma">
              <FontAwesomeIcon className="icons_temp" icon={faGithub} />
              <p> Repositório no Github</p>
            </div>
          </a>
        </div>
      </div>

      {/* Botão de menu hamburguer (visível apenas em mobile). */}
      {isMobile && (
        <button
          className="header__menu-icon"
          onClick={toggleMenu}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {/* Ícone de fechar quando aberto, ícone de menu quando fechado. */}
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      )}

      {/* Menu desktop: visível apenas se não for mobile. */}
      {!isMobile && (
        <Navbar
          isPortfolioPage={isPortfolioPage}
          handleHomeClick={handleHomeClick}
          handleNavigationClick={handleNavigationClick}
          onAboutClick={onAboutClick}
          onSkillsClick={onSkillsClick}
          handlePortfolioClick={handlePortfolioClick}
          onContactClick={onContactClick}
        />
      )}

      {/* Animação do menu mobile com Framer Motion. */}
      <AnimatePresence>
        {isMobile && open && (
          <>
            {/* Menu animado para mobile. */}
            <motion.nav
              className="header__text"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              transition={{ duration: 0.24 }}
            >
              <Navbar
                isPortfolioPage={isPortfolioPage}
                handleHomeClick={handleHomeClick}
                handleNavigationClick={handleNavigationClick}
                onAboutClick={onAboutClick}
                onSkillsClick={onSkillsClick}
                handlePortfolioClick={handlePortfolioClick}
                onContactClick={onContactClick}
              />
            </motion.nav>

            {/* Overlay do menu para fechar ao clicar fora. */}
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              onClick={closeMenu}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
