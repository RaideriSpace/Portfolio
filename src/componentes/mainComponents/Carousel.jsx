import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cardsCarousel from '../../data/cardsData' // Importa os dados do carrossel.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = cardsCarousel.length;

    // Função para avançar um item no carrossel.
    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % totalItems
        );
    };

    // Função para avançar dois itens no carrossel.
    const goTo2Next = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 2) % totalItems
        );
    };

    // Função para voltar um item no carrossel.
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? totalItems - 1 : prevIndex - 1
        ); 
    };

    // Função para voltar dois itens no carrossel.
    const goTo2Prev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalItems - 2 : prevIndex - 2
        );
    };

    // Lógica para determinar qual cartão foi clicado e ajustar o currentIndex.
    const handleCardClick = (clickedIndex) => {

        const diff = (clickedIndex - currentIndex + totalItems) % totalItems;

        if (diff === 1) { // Clicar no próximo (direita)
            goToNext();
        } else if (diff === totalItems -1) { // Clicar no anterior (esquerda) 
            goToPrev(); 
        } else if (diff === 2) { // Clicar no segundo próximo (mais fundo da direita)
            goTo2Next();
        } else if (diff === totalItems - 2) { // Clicou no segundo anterior (mais fundo da esquerda)
            goTo2Prev();
        }
    
        //Ação para Card Central ainda não faz nada

    };

    // Função para calcular as propriedades de transformação (posição, escala, opacidade) para cada cartão.
    // Baseado no índice atual e no índice do item.
    const getCardTransform = (index) => {
        const offset = (index - currentIndex + totalItems) % totalItems; // Distância do item atual.
        let x = 0; // Posição horizontal.
        let scale = 1; // Escala.
        let zIndex = 0; // Z-index para sobreposição.
        let rotateY = 0; // rotateY para rotação do efeito.
        let opacity = 1; // Opacidade.
        let textOpacity = 1; // Opacidade do texto.
        let isClickable = true; // Se o cartão é clicável.

        // Define as propriedades baseadas na posição relativa ao currentIndex.
        if (offset === 0){ // Cartão Central
            x = '0%',
            scale = 1,
            zIndex = 4,
            rotateY = 0,
            opacity = 1,
            textOpacity = 1,
            !isClickable; // O cartão ativo não deve ser clicável para navegação por enquanto.

        } else if (offset === 1) { //  Pirmeiro da Direita
            x = '60%',
            scale = 0.8,
            zIndex = 3,
            rotateY = -15,
            opacity = 1,
            textOpacity = 0.8;
            isClickable;

        } else if (offset === totalItems - 1) { // Primeiro da Esquerda
            x = '-60%',
            scale = 0.8,
            zIndex = 3,
            rotateY = 15,
            opacity = 1,
            textOpacity = 0.8,
            isClickable;

        } else if (offset === 2) { // Último da direita saindo de vista
            x = '95%',
            scale = 0.6,
            zIndex = 2,
            rotateY = -30,
            opacity = 1, 
            textOpacity = 0.6,
            isClickable;

        } else if (offset === totalItems - 2 ){ // Último da esquerda aparecendo
            x = '-95%',
            scale = 0.6,
            zIndex = 2,
            rotateY = 30,
            opacity = 1,
            textOpacity = 0.6,
            isClickable;

        } else { //Os demais fora de vista
            x = '0%',
            scale = 0,
            zIndex = 0,
            rotateY = 0,
            opacity = 0,
            textOpacity = 0.6,
            isClickable;
        };

        return { x, scale, zIndex, rotateY, opacity, textOpacity, isClickable };
    };

    return (
        <>
            <div className='carousel__container'>
                <button className='carousel__arrow left-arrow' onClick={goToPrev}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>

                <div className='carousel__cards-wrapper'>

                    <AnimatePresence initial={false}>  {/* AnimatePresence para animar entrada e saída de elementos. */}
                        {cardsCarousel.map((item, index) => {
                            const transformProps = getCardTransform(index);
                            const isClickable = transformProps.isClickable;

                            const isVisible = 
                                transformProps.opacity > 0 ||
                                Math.abs(index - currentIndex) <= 2 ||
                                (index === 0 && currentIndex === cardsCarousel.length -1) ||
                                (index === cardsCarousel.length -1 && currentIndex === 0); 

                            const cardStyleClass = index % 2 === 0 ? 'card-pink' : 'card-blue'

                            return (
                                isVisible && (
                                    <motion.div
                                        key={item.id}
                                        className={ `carousel__card ${cardStyleClass}`}
                                        initial={{ opacity: 0, scale: 0.5 }} // Animação inicial.
                                        animate={{ // Propriedades animadas.
                                            x: transformProps.x,
                                            scale: transformProps.scale,
                                            zIndex: transformProps.zIndex,
                                            rotateY: transformProps.rotateY,
                                            opacity: transformProps.opacity,
                                            transition: {
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30,
                                                mass: 1,
                                            },
                                        }}
                                        exit={{ opacity:0, scale: 0.5, transition: { duration: 0.24 } }} // Animação de saída.
                                        style={{ 
                                            backgroundImage: `url(${item.src})`, // Fundo da imagem.
                                            cursor: isClickable ? 'pointer' : 'default' // Cursor muda se for clicável.
                                        }}

                                        onClick={isClickable ? () => handleCardClick(index) : undefined}
                                    >
                                        {/* Título do cartão, animado para mostrar/esconder com a opacidade. */}
                                        <motion.p
                                            animate = {{opacity: transformProps.textOpacity }}
                                            transition={{ duration: 0.24 }}
                                        > 
                                            {item.title} 
                                            
                                        </motion.p>
                                    </motion.div>
                                )
                            );
                        })}
                    </AnimatePresence>
                </div>
                
                <button className='carousel__arrow right-arrow' onClick={goToNext}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </>
    );
};

export default Carousel