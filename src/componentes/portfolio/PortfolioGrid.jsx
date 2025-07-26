import React, {useMemo} from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioGrid = ({
  projectsData,
  tagColor,
  boxColor,
  noProjectsMessage
}) => {
  const sortedProjects = useMemo(() => {
    return [...projectsData].sort((a, b) => {
      return b.id.localeCompare(a.id);
    });
  }, [projectsData]);

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
        <div className="no-projects-message">
          <p>{noProjectsMessage || "Nenhum projeto encontrado."}</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
