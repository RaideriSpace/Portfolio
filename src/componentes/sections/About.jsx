import React, { useCallback, forwardRef } from "react";
import photo from "../../assets/img/photo.svg";

const About = forwardRef(({ onCvClick }, ref) => {
  //Props recebidos

  // Botão para lidar com o clique no botão "Currículo".
  const handleCvButtonClick = useCallback(() => {
    onCvClick?.();
  }, [onCvClick]); // Só é recriada se onCvClick mudar.

  return (
    <>
      {/* Contêiner principal da seção "Sobre Mim". A ref é atribuída a esta div. */}
      <section className="about" ref={ref}>
        <div className="about__container">
          <div className="about__container-info">
            <h2 className="subtitle"> Sobre </h2>
            <p className="about__text">
              Comecei minha jornada profissional na Engenharia Civil, onde
              aprendi a ser analítico, pensar em soluções práticas e coordenar
              pessoas e processos. Mas foi quando mergulhei no universo do
              design e da tecnologia que realmente me encontrei.
              <br />
              Hoje, sou um Desenvolvedor Full Stack em formação, com maior
              paixão pelo Front-end e com um pouco de experiência em UX/UI
              Design, em constante evolução. Me apaixonei por
              transformar ideias em experiências — da pesquisa com usuários até
              o protótipo final no Figma, do HTML e CSS ao comportamento de cada
              botão. Busco criar soluções que não só funcionem, mas que façam
              sentido para quem usa.
            </p>
            <button
              className="button__blue"
              onClick={handleCvButtonClick}
              aria-label="Abrir currículo">
              Currículo
            </button>
          </div>

          <div className="about__container-photo">
            <img
              className="about__photo"
              src={photo}
              alt="Lucas Alves Pinheiro, UX/UI Designer e Desenvolvedor Front-end"
            />
          </div>
        </div>
      </section>
    </>
  );
});

export default About;
