import React, { useState, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import cardsCarousel from "../../data/cardsData"; // Importa os dados do carrossel.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalItems = cardsCarousel.length;
  const navigate = useNavigate();

  // Função para atualizar o indice, garantindo o loop.
  const updateIndex = useCallback(
    (step) => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + step) % totalItems;
        // Garante que o índice nunca seja negativo, mesmo com stpes negativos.
        return newIndex < 0 ? totalItems + newIndex : newIndex;
      });
    },
    [totalItems] // Sói é recriada se totalItems mudar.
  );

  // Funções de navegação otimizadas com useCallback.
  const goToNext = useCallback(() => updateIndex(1), [updateIndex]);
  const goTo2Next = useCallback(() => updateIndex(2), [updateIndex]);
  const goToPrev = useCallback(() => updateIndex(-1), [updateIndex]);
  const goTo2Prev = useCallback(() => updateIndex(-2), [updateIndex]);

  // Lógica para determinar qual cartão foi clicado e ajustar o currentIndex.
  const handleCardClick = useCallback(
    (clickedIndex) => {
      // Normaliza para que a diferença seja sempre positiva dentro do totalItems.
      const diff = (clickedIndex - currentIndex + totalItems) % totalItems;

      // Clicar no cartão do meio.
      if (diff === 0) {
        const currentCard = cardsCarousel[currentIndex];
        if (currentCard && currentCard.portfolioCategoryName) {
          navigate(`/portfolio/${currentCard.portfolioCategoryName}`);
        } else {
          console.warn(
            "Cartão central não possui portfolioCategoryName para navegação."
          );
        }
      } else if (diff === 1) {
        // Clicar no próximo (direita)
        goToNext();
      } else if (diff === totalItems - 1) {
        // Clicar no anterior (esquerda)
        goToPrev();
      } else if (diff === 2) {
        // Clicar no segundo próximo (mais fundo da direita)
        goTo2Next();
      } else if (diff === totalItems - 2) {
        // Clicou no segundo anterior (mais fundo da esquerda)
        goTo2Prev();
      }
    },
    [
      currentIndex,
      totalItems,
      goToNext,
      goToPrev,
      goTo2Next,
      goTo2Prev,
      navigate,
    ]
  );

  // Função para calcular as propriedades de transformação (posição, escala, opacidade) para cada cartão.
  // Baseado no índice atual e no índice do item.
  const getCardTransform = useCallback(
    (index) => {
      const offset = (index - currentIndex + totalItems) % totalItems; // Distância do item atual.
      // Valores padrão.
      let x = 0; // Posição horizontal.
      let scale = 1; // Escala.
      let zIndex = 0; // Z-index para sobreposição.
      let rotateY = 0; // rotateY para rotação do efeito.
      let opacity = 1; // Opacidade.
      let textOpacity = 1; // Opacidade do texto.
      let isClickable = true; // Se o cartão é clicável.

      // Define as propriedades baseadas na posição relativa ao currentIndex.
      if (offset === 0) {
        // Cartão Central
        (x = "0%"),
          (scale = 1),
          (zIndex = 4),
          (rotateY = 0),
          (opacity = 1),
          (textOpacity = 1),
          isClickable;
      } else if (offset === 1) {
        // Pirmeiro da Direita
        (x = "60%"),
          (scale = 0.8),
          (zIndex = 3),
          (rotateY = -15),
          (opacity = 1),
          (textOpacity = 0.8);
        isClickable;
      } else if (offset === totalItems - 1) {
        // Primeiro da Esquerda
        (x = "-60%"),
          (scale = 0.8),
          (zIndex = 3),
          (rotateY = 15),
          (opacity = 1),
          (textOpacity = 0.8),
          isClickable;
      } else if (offset === 2) {
        // Último da direita saindo de vista
        (x = "95%"),
          (scale = 0.6),
          (zIndex = 2),
          (rotateY = -30),
          (opacity = 1),
          (textOpacity = 0.6),
          isClickable;
      } else if (offset === totalItems - 2) {
        // Último da esquerda aparecendo
        (x = "-95%"),
          (scale = 0.6),
          (zIndex = 2),
          (rotateY = 30),
          (opacity = 1),
          (textOpacity = 0.6),
          isClickable;
      } else {
        // Os demais fora de vista
        (x = "0%"),
          (scale = 0),
          (zIndex = 0),
          (rotateY = 0),
          (opacity = 0),
          (textOpacity = 0.6),
          !isClickable;
      }

      return { x, scale, zIndex, rotateY, opacity, textOpacity, isClickable };
    },
    [currentIndex, totalItems]
  );

  return (
    <>
      <div className="carousel__container">
        <button
          className="carousel__arrow left-arrow"
          onClick={goToPrev}
          aria-label="Voltar no carrossel"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <div className="carousel__cards-wrapper">
          <AnimatePresence initial={false}>
            {/* AnimatePresence para animar entrada e saída de elementos. */}
            {cardsCarousel.map((item, index) => {
              const transformProps = getCardTransform(index);
              const { isClickable, ...animationProps } = transformProps;

              // Renderizar condicionalmente com 'opacity > 0' ou outro threshold.
              if (animationProps.opacity === 0 && animationProps.scale === 0) {
                return null; // Não renderiza itens que não estão visíveis ou próximos.
              }

              const cardStyleClass =
                index % 2 === 0 ? "card-pink" : "card-blue";

              return (
                <motion.div
                  key={item.id}
                  className={`carousel__card ${cardStyleClass}`}
                  initial={{ opacity: 0, scale: 0.5 }} // Animação inicial.
                  animate={{
                    // Propriedades animadas.
                    ...animationProps, // Espalha s propriedades de animação
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 1,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.24 },
                  }} // Animação de saída.
                  style={{
                    backgroundImage: `url(${item.src})`, // Fundo da imagem.
                    cursor: isClickable ? "pointer" : "default", // Cursor muda se for clicável.
                  }}
                  onClick={
                    isClickable ? () => handleCardClick(index) : undefined
                  }
                  role="button"
                  arial-label={`Visualizar ${item.title}`}
                >
                  {/* Título do cartão, animado para mostrar/esconder com a opacidade. */}
                  <motion.p
                    animate={{ opacity: transformProps.textOpacity }}
                    transition={{ duration: 0.24 }}
                  >
                    {item.title}
                  </motion.p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <button
          className="carousel__arrow right-arrow"
          onClick={goToNext}
          aria-label="Avançar no carrossel"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </>
  );
};

export default Carousel;
