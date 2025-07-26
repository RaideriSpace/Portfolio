import React, { useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import "../styles/portfolio.css";

import SubNavbar from "../componentes/layout/SubNavbar";
import PortfolioBanner from "../componentes/portfolio/PortfolioBanner";
import PortfolioGrid from "../componentes/portfolio/PortfolioGrid";
import PaperGrid from "../componentes/portfolio/PaperGrid";

import { categories } from "../data/portfolioData";

const specificGridsMap = {
  paper: PaperGrid,
};

const Portfolio = () => {
  const { categoryName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const activeCategory = useMemo(() => {
    if (location.pathname === "/portfolio") {
      return "all";
    }

    const foundCategory = categories.find((cat) => cat.name === categoryName);

    if (!foundCategory) {
      navigate("/portfolio", { replace: true });
      return "all";
    }

    return categoryName;
  }, [categoryName, location.pathname, navigate]);

  const GridToRender = specificGridsMap[activeCategory] || PortfolioGrid;

  const currentCategoryInfo = useMemo(() => {
    return (
      categories.find((cat) => cat.name === activeCategory) ||
      categories.find((cat) => cat.name === "all")
    );
  }, [activeCategory]);

  const isGeneralPortfolioPage = activeCategory === "all";

  return (
    <main className="portfolio-main">
      <SubNavbar
        activeCategoryName={activeCategory}
        mainColor={currentCategoryInfo.mainColor}
      />

      <AnimatePresence mode="wait">
        {!isGeneralPortfolioPage ? (
          <motion.div
            key={currentCategoryInfo.name + "-banner"}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioBanner
              bannerImage={currentCategoryInfo.bannerImage}
              bannerText={currentCategoryInfo.bannerText}
              mainShadow={currentCategoryInfo.mainShadow}
              mainColor={currentCategoryInfo.mainColor}
            />
          </motion.div>
        ) : (
          <motion.div
            key="general-portfolio-header"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transititon={{ duration: 0.3 }}
            className="portfolio-general-header"
          >
            <h1>{currentCategoryInfo.bannerText}</h1>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + "-grid"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="portfolio-grid-wrapper"
        >
          <GridToRender
            projectsData={
              activeCategory !== "paper"
                ? currentCategoryInfo.projectDataKey
                : undefined
            }
            tagColor={currentCategoryInfo.textColor}
            boxColor={currentCategoryInfo.boxColor}
            noProjectsMessage={`Nenhum projeto encontrado para ${currentCategoryInfo.label}.`}
          />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
