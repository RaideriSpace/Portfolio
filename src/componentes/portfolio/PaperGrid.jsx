import React from "react";
import { paperData } from "../../data/portfolioData";
import PaperItem from "./PaperItem";

const PaperGrid = () => {
  return (
    <div className="portfolio-grid-paper">
      {paperData.length > 0 ? (
        paperData.map((project) => (
          <div key={project.id} className="portfolio-grid-paper__item">
            <PaperItem project={project}/>
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
