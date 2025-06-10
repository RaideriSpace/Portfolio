import React from 'react';
import { motion } from 'framer-motion';

const PortfolioBanner = ({
    id,
    title,
    image,
    clipPathId,
    isActive,
    onClick,
    colorClass
}) => {
  return (
    <motion.div
        className={`portfolio-banner ${isActive ? 'active' : ''} ${colorClass}`}
        layout
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={()=> onClick(id)}
    >
        <img src={image} alt={title} className='portfolio-banner__image' />
        <div className='portfolio-banner__overlay'></div>
        <h2 className='portfolio-banner__title'>{title}</h2>
    </motion.div>
  )
}

export default PortfolioBanner