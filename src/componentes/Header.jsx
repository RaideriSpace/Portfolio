import React, { useState, useEffect }from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import logoRaiSpace from '../assets/img/Logo.svg'
import useIsMobile from '../hooks/useIsMobile'; // Hook personalizado para detectar se é mobile.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone de menu (hamburguer) e o menu X.
import { faFigma, faGithub } from '@fortawesome/free-brands-svg-icons'


const Header = ({ onAboutClick, onSkillsClick, onContactClick }) => {

  const [open,setOpen] = useState(false); // Estado para controlar a abertura/fechamento do menu mobile.
  const isMobile = useIsMobile(); // Hook para verificar se a tela é mobile.
  const location = useLocation(); // Hook para acessar o objeto de localização atual
  const navigate = useNavigate(); // Hook para navegação programática

  // Verifica se a rota atual é a pagina inicial
  const isHomePage = location.pathname === '/';

  // Verifica se a rota atual é a página de portfólio
  const isPortfolioPage = location.pathname === '/portfolio' || location.pathname === '/portfolioselected'; 

  
   // Alterna o estado 'open'.
  const toggleMenu = () => setOpen (!open);
  // Fecha o menu.
  const closeMenu = () => setOpen (false);

  // Efeito colateral para controlar a rolagem do body quando o menu mobile está aberto.
  useEffect(() => { 
    if (isMobile) { 

    // Adiciona ou remove a classe 'body--no--scroll' para prevenir rolagem.
    document.body.classList.toggle('body--no--scroll', open)
    }
    
    // Função de limpeza: remove a classe quando o componente é desmontado ou 'open'/'isMobile' mudam.
    return () => {
      document.body.classList.remove('body--no--scroll');
    };
  }, [open, isMobile]); // Dependências do useEffect.
  
  // Variantes de animação para o menu mobile com Framer Motion.
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' }, // Estado inicial (escondido, fora da tela à direita).
    visible: { opacity: 1, x: '0%' }, // Estado visível (na tela).
    exit: { opacity: 0, x: '100%'}, // Estado de saída (voltando para fora da tela).
  }

  const handleHomeClick = () => {
    navigate('/'); // Navega para a home
    closeMenu();
  }
    
  // Funções de clique para os botões do menu.
  // Chamam as props de clique e fecham o menu se for mobile.
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

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick()
    } if (isMobile) {
      closeMenu()
    }
  }
  
  const handlePortfolioClick = () => {''
    navigate('/portfolio'); // Navega para a página de portfólio
    closeMenu()
  }
  

  return (

    // Contêiner principal do cabeçalho.
    <header className='header'>

      {/* Contêiner para o logo, alinhado à esquerda. */}
      <div className='header__left'>

        {/* Link do logo para a página inicial. */}
        <a href='/' className='header__logo-link'>

          {/* Imagem do logo. */}
          <img className='header__logo' src={logoRaiSpace} alt='Logo Raideri Space Art'  />
        </a>
      </div>

      <div className='WIP__Container'>
        <p className='WIP'>Work In Progress</p>
        <div className='WIP__Container--links'>
          <a 
            className='footer__links--a'
            href='https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?page-id=3009%3A714&node-id=3012-828&viewport=1748%2C-1064%2C0.76&t=nznWeCIX4YsBytc3-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3012%3A828'
            target='_blank' // Abrir em nova aba.
            rel='noopener noreferrer' // Boa prática de segurança.
          >
            <div className='figma'>
              <FontAwesomeIcon className='icons_temp' icon={faFigma} />
              <p >Figma do projeto</p> 
            </div>
          </a>
          
          <a
            className='footer__links--a'
            href='https://github.com/RaideriSpace/Portfolio'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='figma'>
              <FontAwesomeIcon className='icons_temp' icon={faGithub} />
              <p> Repositório no Github</p>
            </div>

          </a>
        </div>
      </div>

      {/* Botão de menu hamburguer (visível apenas em mobile). */}
      {isMobile &&(
        <button className='header__menu-icon' onClick={toggleMenu} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          <FontAwesomeIcon icon={open ? faXmark : faBars} /> {/* Ícone de fechar quando aberto, ícone de menu quando fechado. */}
        </button>
      )}

       {/* Menu desktop: visível apenas se não for mobile. */}
      {!isMobile && (
        <nav className='header__text'>

          <button className='button__common' onClick={handlePortfolioClick}> Portfólio </button> 

          {/* Renderização Condicional dos botões */}
          {isPortfolioPage ? ( // Se estiver na página do portfólio
            <button className='button__common' onClick={handleHomeClick}> Home </button>
          ) : ( // Se estiver na página inicial
            <>
              <button className='button__common' onClick={handleAboutClick}> Sobre </button>
              <button className='button__common' onClick={handleSkillsClick}> Competências </button>
            </>
          )}
          <button className='button__pink' onClick={handleContactClick}> Contato </button>
        </nav>
      )}

      {/* Animação do menu mobile com Framer Motion. */}
      <AnimatePresence>
        {isMobile && open && (
          <>

            {/* Menu animado para mobile. */}
            <motion.nav
              className='header__text'
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={mobileMenuVariants}
              transition={{duration:0.24}}
            >

              <button className='button__common' onClick={handlePortfolioClick}> Portfólio </button>
              {/* Renderização condicional dos botões no menu mobile */}
              {isPortfolioPage ? (
                <button className='button__common' onClick={handleHomeClick}> Home </button>
              ) : (
                <>
                  <button className='button__common' onClick={handleAboutClick}> Sobre </button>
                  <button className='button__common' onClick={handleSkillsClick}> Competências </button>
                </>
              )}

              <button className='button__pink' onClick={handleContactClick}> Contato </button>

            </motion.nav>

            {/* Overlay do menu para fechar ao clicar fora. */}           
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
    </header>
  );
};

export default Header