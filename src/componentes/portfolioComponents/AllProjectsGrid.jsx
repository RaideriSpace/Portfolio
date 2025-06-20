import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import { allProjectsData } from '../../data/portfolioData';

const AllProjectsGrid = ({ tagColor, boxColor }) => {

  const sortedProjects = useMemo(() => {
    return [...allProjectsData].sort((a,b) => {
      return b.id.localeCompare(a.id);
    });
  }, [allProjectsData]);

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
              className='portfolio-grid__item'
              layout
            >
              <PortfolioItem project={project} tagColor={tagColor} boxColor={boxColor} />
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

export default AllProjectsGrid