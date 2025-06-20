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
      {sortedProjects.length > 0 ? (
        sortedProjects.map( project => (
          <div key={project.id} className='portfolio-grid__item'>
            <PortfolioItem project={project} tagColor={tagColor} boxColor={boxColor} />
          </div>
        ))
      ) : (
        <div key="no-threed-projects" className='no-projects-message'>
          <p> Nenhum projeto de Modelagem 3D encontrado. </p>
        </div>
      )}
    </div>
  );
}

export default ThreedGrid;