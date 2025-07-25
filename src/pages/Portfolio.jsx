import React, { useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import "../styles/portfolio.css";

import SubNavbar from "../componentes/portfolioComponents/SubNavbar";
import PortfolioBanner from "../componentes/portfolioComponents/PortfolioBanner";

import UiGrid from "../componentes/portfolioComponents/UiGrid";
import DevGrid from "../componentes/portfolioComponents/DevGrid";
import DesignGrid from "../componentes/portfolioComponents/DesignGrid";
import PaperGrid from "../componentes/portfolioComponents/PaperGrid";
import ThreedGrid from "../componentes/portfolioComponents/ThreedGrid";
import UxGrid from "../componentes/portfolioComponents/UxGrid";
import AllProjectsGrid from "../componentes/portfolioComponents/AllProjectsGrid";

import {
  categories,
  allProjectsData
} from "../data/portfolioData";

const gridComponentsMap = {
  "ui-design": UiGrid,
  "web-dev": DevGrid,
  "digital-art": DesignGrid,
  "3d-modeling": ThreedGrid,
  "ux-design": UxGrid,
};

// const gridPaperMap = {
//   paper: PaperGrid,
// };

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

  const currentCategoryInfo = useMemo(() => {
    return categories.find((cat) => cat.name === activeCategory);
  }, [activeCategory]);

  const SelectedGridComponent = gridComponentsMap[activeCategory];

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

      {SelectedGridComponent && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + "-grid"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transititon={{ duration: 0.3 }}
            className="portfolio-grid-wrapper"
          >
            <SelectedGridComponent
              projects={isGeneralPortfolioPage ? allProjectsData : undefined}
              tagColor={currentCategoryInfo.textColor}
              boxColor={currentCategoryInfo.boxColor}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
};

export default Portfolio;
