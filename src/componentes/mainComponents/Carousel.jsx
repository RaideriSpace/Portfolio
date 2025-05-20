import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cardsCarousel from '../../data/cardsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = cardsCarousel.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % totalItems
    );
  };

  const goTo2Next = () => {
    setCurrentIndex((prevIndex) =>
        (prevIndex + 2) % totalItems
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    ); 
  };

  const goTo2Prev = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? totalItems - 2 : prevIndex - 2
    );
  };

  const handleCardClick = (clickedIndex) => {
    //No próximo
    const isNextCard = (clickedIndex - currentIndex + totalItems) % totalItems === 1;

    const is2NextCard = (clickedIndex - currentIndex + totalItems) % totalItems === 2;

    //No anterior
    const isPrevCard = (clickedIndex - currentIndex + totalItems) % totalItems === totalItems - 1;

    const is2PrevCard = (clickedIndex - currentIndex + totalItems) % totalItems === totalItems - 2;

    if (isNextCard) {
        
        goToNext();

    } else if (is2NextCard){

        goTo2Next();

    } else if (isPrevCard){
        
        goToPrev();
    
    } else if (is2PrevCard){
        goTo2Prev();
    }
    //Ação para Card Central
  };

  const getCardTransform = (index) => {
    const offset = (index - currentIndex + totalItems) % totalItems;
  
    let textOpacity = 1;
    if (offset === 0) {
        textOpacity = 1;
    } else if (offset === 1 || offset === totalItems -1){
        textOpacity = 0.7;
    } else {
        textOpacity = 0.5;
    }

    if (offset === 0){ //Central
        return {
            x: '0%',
            scale: 1,
            zIndex: 4,
            rotateY: 0,
            opacity: 1,
            textOpacity: textOpacity,
        };
    } else if (offset === 1) { //  Pirmeiro da Direita
        return  {
            x: '60%',
            scale: 0.8,
            zIndex: 3,
            rotateY: -15,
            opacity: 1,
            textOpacity: textOpacity,
        };
    } else if (offset === totalItems - 1) { // Primeiro da Esquerda
        return {
            x: '-60%',
            scale: 0.8,
            zIndex: 3,
            rotateY: 15,
            opacity: 1,
            textOpacity: textOpacity,
        }

    } else if (offset === 2) { // Último da direita saindo de vista
        return {
            x: '95%',
            scale: 0.6,
            zIndex: 2,
            rotateY: -30,
            opacity: 1, 
            textOpacity: textOpacity,
        };
    } else if (offset === totalItems - 2 ){ // Último da esquerda aparecendo
        return {
            x: '-95%',
            scale: 0.6,
            zIndex: 2,
            rotateY: 30,
            opacity: 1,
        };
    } else { //Os demais fora de vista
        return {
            x: '140%',
            scale: 0.5,
            zIndex: 0,
            opacity: 0,
            textOpacity: textOpacity,
        };
    }
  };

  return (
    <>
        <div className='carousel__container'>
        <button className='carousel__arrow left-arrow' onClick={goToPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <div className='carousel__cards-wrapper'>
            <AnimatePresence initial={false}>
                {cardsCarousel.map((item, index) => {
                    const transformProps = getCardTransform(index);

                    const isVisible = 
                        transformProps.opacity > 0 ||
                        Math.abs(index - currentIndex) <= 2 ||
                        (index === 0 && currentIndex === cardsCarousel.length -1) ||
                        (index === cardsCarousel.length -1 && currentIndex === 0); 

                    const isClickable = transformProps.opacity > 0 && transformProps.scale < 1;

                    const cardStyleClass = index % 2 === 0 ? 'card-pink' : 'card-blue'

                    return (
                        isVisible && (
                            <motion.div
                                key={item.id}
                                className={ `carousel__card ${cardStyleClass}`}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{
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
                                exit={{ opacity:0, scale: 0.5, transition: { duration: 0.24 } }}
                                style={{ 
                                    backgroundImage: `url(${item.src})`,
                                    cursor: isClickable ? 'pointer' : 'default'
                                }}

                                onClick={isClickable ? () => handleCardClick(index) : undefined}
                            >
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