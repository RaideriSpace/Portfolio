import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import { uiData } from '../../data/portfolioData';

const UiGrid = ({ tagColor, boxColor }) => {

  const sortedProjects = useMemo(() => {
    return [...uiData].sort((a,b) => {
      return b.id.localeCompare(a.id);
    });
  }, [uiData])

  return (
    <div className='portfolio-grid'>
      <AnimatePresence mode='wait'>
        {sortedProjects.length > 0 ? (
          sortedProjects.map( project => (
            <motion.div 
              key={project.id}
              initial='hidden' 
              animate='visible' 
              exit='exit' 
              layout
              className='portfolio-grid__item'
            >
              <PortfolioItem project={project} tagColor={tagColor} boxColor={boxColor} />
            </motion.div>
          ))
        ) : (
          <motion.div 
            key="no-ui-projects" 
            initial='hidden' 
            animate='visible' 
            exit='exit' 
            variants={projectItemVariants} 
            className='no-projects-message'
          >
            <p>Nenhum projeto de UI Design encontrado.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UiGrid;