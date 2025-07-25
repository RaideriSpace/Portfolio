import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Carousel from "./Carousel"; // Importa o componente Carousel.

const MyGallery = () => {
  const navigate = useNavigate();

  const handlePortfolioClick = useCallback(() => {
    navigate("/portfolio"); // Navega para a página de portfólio
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 0);
  }, [navigate]);

  return (
    <div className="gallery">
      <Carousel />
      <button
        className="button__pink"
        onClick={handlePortfolioClick}
        aria-label="Ir para a página de portfólio"
      >
        Portfólio
      </button>
    </div>
  );
};

export default MyGallery;
