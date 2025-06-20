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
      {sortedProjects.length > 0 ? (
        sortedProjects.map( project => (
          <div key={project.id} className='portfolio-grid__item'>
            <PortfolioItem project={project} tagColor={tagColor} boxColor={boxColor} />
          </div>
        ))
      ) : (
        <div key="no-ui-projects" className='no-projects-message'>
          <p>Nenhum projeto de UI Design encontrado.</p>
        </div>
      )}
    </div>
  );
}

export default UiGrid;