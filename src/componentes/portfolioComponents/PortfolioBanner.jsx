import React from 'react';
import { motion } from 'framer-motion';

const PortfolioBanner = ({ bannerText, bannerImage, mainColor}) => {
  if (!bannerImage) {
    return null;
  }

  return (
    <div className='portfolio-banner'>
      <div
        className='portfolio-banner__img'
        style={{ backgroundImage: `url(${bannerImage})`}}
      >
        <p className='portfolio-banner__text' style={{ color: mainColor }}>
          {bannerText}
        </p>
      </div>
    </div>
  )
}

export default PortfolioBanner