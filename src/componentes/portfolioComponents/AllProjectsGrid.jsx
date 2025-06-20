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
      {sortedProjects.length > 0 ? (
        sortedProjects.map( project => (
          <div key={project.id} className='portfolio-grid__item'>
            <PortfolioItem project={project} tagColor={tagColor} boxColor={boxColor} />
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

export default AllProjectsGrid