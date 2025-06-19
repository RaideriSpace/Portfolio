import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import { paperData } from '../../data/portfolioData';

const PaperGrid = ({ tagColor, boxColor }) => {

  return (
    <div className='portfolio-grid'> 
      <AnimatePresence mode='wait'>
        {paperData.length > 0 ? (
          paperData.map( project => (
            <motion.div
              key={project.id}
              initial='hidden'
              animate='visible'
              exit='exit'
              layout
            >
              <PortfolioItem project={project} tagColor={tagColor} boxColor={boxColor}/>
            </motion.div>
          ))
        ) : (
          <motion.div
            key='no-design-projects'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={projectItemVariants}
            className='no-projects-message'
          >
            <p> Nenhum projeto encontrado. </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PaperGrid