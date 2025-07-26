import React, { useMemo } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
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
            key="general-portfolio-header-or-overview"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transititon={{ duration: 0.3 }}
            className="portfolio-general-overview-container"
          >
            <div className="portfolio-banner-collage">
              <motion.div
                className="collage-item ui-design-banner"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/portfolio/ui-design">
                  <div>
                    <p>UI Design</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                className="collage-item web-dev-banner"
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/portfolio/web-dev">
                  <div>
                    <p>Web Dev</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                className="collage-item digital-art-banner"
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/portfolio/digital-art">
                  <div>
                    <p>Arte Digital</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                className="collage-item paper-banner"
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/portfolio/paper">
                  <div>
                    <p>Papel</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                className="collage-item threed-modeling-banner"
                initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/portfolio/3d-modeling">
                  <div>
                    <p>Modelagem 3D</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                className="collage-item ux-design-banner"
                initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/portfolio/ux-design">
                  <div>
                    <p>UX Design</p>
                  </div>
                </Link>
              </motion.div>
            </div>
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
          {isGeneralPortfolioPage ? null : (
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
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
