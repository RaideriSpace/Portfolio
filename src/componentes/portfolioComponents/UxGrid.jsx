import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import { uxData } from '../../data/portfolioData';

const UxGrid = ({ tagColor, boxColor }) => {

  const sortedProjects = useMemo(() => {
    return [...uxData].sort((a,b) => {
      return b.id.localeCompare(a.id);
    });
  }, [uxData])

  return (
    <div className='portfolio-grid'> 
      {sortedProjects.length > 0 ? (
        sortedProjects.map( project => (
          <div key={project.id} className='portfolio-grid__item'>
            <PortfolioItem project={project} tagColor={tagColor} boxColor={boxColor}/>
          </div>
        ))
      ) : (
        <div key='no-design-projects' className='no-projects-message'>
          <p> Nenhum projeto encontrado. </p>
        </div>
      )}
    </div>
  );
}

export default UxGrid