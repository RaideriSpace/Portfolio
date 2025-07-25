import React from "react";

const PortfolioBanner = ({
  bannerText,
  bannerImage,
  mainColor,
  mainShadow,
}) => {
  if (!bannerImage) {
    return null;
  }

  return (
    <div className="portfolio-banner">
      <div
        className="portfolio-banner__img"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <p
          style={{ color: mainColor, textShadow: `0px 0px 3px ${mainShadow}` }}
        >
          {bannerText}
        </p>
      </div>
    </div>
  );
};

export default PortfolioBanner;
