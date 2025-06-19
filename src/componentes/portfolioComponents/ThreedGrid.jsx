import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import { threedData } from '../../data/portfolioData';

const ThreedGrid = ({ tagColor, boxColor }) => {

  const sortedProjects = useMemo(() => {
    return [...threedData].sort((a,b) => {
      return b.id.localeCompare(a.id);
    });
  }, [threedData])

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
            >
              <PortfolioItem project={project} tagColor={tagColor} boxColor={boxColor} />
            </motion.div>
          ))
        ) : (
          <motion.div 
            key="no-threed-projects" 
            initial='hidden' 
            animate='visible' 
            exit='exit' 
            variants={projectItemVariants} 
            className='no-projects-message'
          >
            <p> Nenhum projeto de Modelagem 3D encontrado. </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThreedGrid;