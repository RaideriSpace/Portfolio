import React, { useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import PortfolioItem from "./PortfolioItem";
import { devData } from "../../data/portfolioData";

const DevGrid = ({ tagColor, boxColor }) => {
  const sortedProjects = useMemo(() => {
    return [...devData].sort((a, b) => {
      return b.id.localeCompare(a.id);
    });
  }, []);

  return (
    <div className="portfolio-grid">
      {sortedProjects.length > 0 ? (
        sortedProjects.map((project) => (
          <div key={project.id} className="portfolio-grid__item">
            <PortfolioItem
              project={project}
              tagColor={tagColor}
              boxColor={boxColor}
            />
          </div>
        ))
      ) : (
        <div key="no-dev-projects" className="no-projects-message">
          <p> Nenhum projeto encontrado. </p>
        </div>
      )}
    </div>
  );
};

export default DevGrid;
