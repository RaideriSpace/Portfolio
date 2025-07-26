import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente FontAwesomeIcon.
// Importa os ícones de marcas (brands) e ícones regulares (regular) do Font Awesome.
import {
  faWhatsapp,
  faLinkedin,
  faBehance,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import logoRaiSpace from "../../assets/img/Logo.svg"; // Importa o logo.

const Footer = () => {
  return (
    // Contêiner principal do rodapé.
    <footer className="footer">
      {/* Contêiner para os links do rodapé. */}
      <div className="footer__links-container">
        {/* Link para o WhatsApp. */}
        <a
          className="footer__links--a"
          href="https://wa.me/11989157255"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para o WhatsApp de Lucas Alves Pinheiro"
        >
          <FontAwesomeIcon className="icons" icon={faWhatsapp} />
          <p>(11) 98915-7255</p>
        </a>

        {/* Link para o LinkedIn. */}
        <a
          className="footer__links--a"
          href="https://www.linkedin.com/in/lucasalvespinheiro/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para o perfil do LinkedIn de Lucas Alves Pinheiro"
        >
          <FontAwesomeIcon className="icons" icon={faLinkedin} />
          <p>/lucasalvespinheiro</p>
        </a>

        {/* Link para o E-mail. */}
        <a
          className="footer__links--a"
          href="mailto:l.pinheiro.w@gmail.com"
          aria-label="Enviar e-mail para Lucas Alves Pinheiro"
        >
          <FontAwesomeIcon className="icons" icon={faEnvelope} />
          <p>l.pinheiro.w@gmail.com</p>
        </a>

        {/* Link para o Behance. */}
        <a
          className="footer__links--a"
          href="https://www.behance.net/raideri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para o perfil do Behance de Lucas Alves Pinheiro"
        >
          <FontAwesomeIcon className="icons" icon={faBehance} />
          <p>/raideri</p>
        </a>

        {/* Link para o GitHub. */}
        <a
          className="footer__links--a"
          href="https://github.com/RaideriSpace"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para o repositório do GitHub de Lucas Alves Pinheiro"
        >
          <FontAwesomeIcon className="icons" icon={faGithub} />
          <p>/RaideriSpace</p>
        </a>
      </div>

      {/* Imagem do logo no rodapé. */}
      <img
        className="footer__logo"
        src={logoRaiSpace}
        alt="Logo Raideri Space Art"
      />
    </footer>
  );
};

export default Footer;
