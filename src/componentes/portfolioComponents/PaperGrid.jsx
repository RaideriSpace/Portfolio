import React from "react";
import { AnimatePresence } from "framer-motion";
import PortfolioItem from "./PortfolioItem";
import { paperData } from "../../data/portfolioData";

const PaperGrid = ({ tagColor, boxColor }) => {
  return (
    <div className="portfolio-grid">
      {paperData.length > 0 ? (
        paperData.map((project) => (
          <div key={project.id} className="portfolio-grid__item">
            <PortfolioItem
              project={project}
              tagColor={tagColor}
              boxColor={boxColor}
            />
          </div>
        ))
      ) : (
        <div key="no-design-projects" className="no-projects-message">
          <p> Nenhum projeto encontrado. </p>
        </div>
      )}
    </div>
  );
};

export default PaperGrid;
