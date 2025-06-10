import React, { useState } from 'react'
import '../styles/portfolio.css'

import SubHeader from '../componentes/portfolioComponents/SubHeader'
import PortfolioBanner from '../componentes/portfolioComponents/PortfolioBanner'

import bannerUX from '../assets/img/UX/Banner.png'
import bannerUI from '../assets/img/UI/Banner.png'
import bannerDev from '../assets/img/Dev/Banner.png'
import bannerDesign from '../assets/img/Design/Banner.png'
import bannerPaper from '../assets/img/Paper/Banner.png'
import banner3D from '../assets/img/3D/Banner.png'
import { clipPath, title } from 'framer-motion/client'

const Portfolio = () => {

  const [activeBanner, setActiveBanner] = useState(null);

  // Lida com o click do banner
  const handleBannerClick = (id) => {
    setActiveBanner(activeBanner === id ? null : id); // Alerta o estado ativo
  };

  const banners = [
    {
      id: 'banner-ux',
      title: 'UX Design',
      image: bannerUX,
      clipPathId: 'clipPathUX',
      colorClass: 'color-ux',
    },
    {
      id: 'banner-ui',
      title: 'UI Design',
      image: bannerUI,
      clipPathId: 'clipPathUI',
      colorClass: 'color-ui',
    },
    {
      id: 'banner-dev',
      title: 'Web Design',
      image: bannerDev,
      clipPathId: 'clipPathDev',
      colorClass: 'color-dev',
    },
    {
      id: 'banner-artedigital',
      title: 'Arte Digital',
      image: bannerDesign,
      clipPathId: 'clickPathDesign',
      colorClass: 'color-design',
    },
    {
      id: 'banner-paper',
      title: 'Papel',
      image: bannerPaper,
      clipPathId: 'clickPathPaper',
      colorClass: 'color-paper',
    },
    {
      id: 'banner-3d',
      title: 'Modelagem 3D',
      image: banner3D,
      clipPathId: 'clickPath3D',
      colorClass: 'color-3D',
    }

  ]

  return (
    <>

      <SubHeader />

      <div className='portfolio-page'>
        <h1> Meu Porfólio </h1>
        <p> Em Breve, meus projetos incríveis</p>

        <div className='portfolio-banners-container'>
          {banners.map((banner) => (
            <PortfolioBanner 
              key={banner.id}
              id={banner.id}
              title={banner.title}
              image={banner.image}
              clipPathId={banner.clipPathId}
              isActive={activeBanner === banner.id}
              onClick={handleBannerClick}
              colorClass={banner.colorClass}
            />
          ))}
        </div>

        {/* Aqui você adicionaria o conteúdo detalhado do portfólio
            que apareceria ao expandir um banner, se for o caso.
            Pode ser um componente renderizado condicionalmente com base em `activeBanner`.
        */}
        {activeBanner && (
          <div className="portfolio-detail-section">
            {/* Renderizar detalhes com base em activeBanner. Ex: */}
            <h2>Detalhes de {banners.find(b => b.id === activeBanner)?.title}</h2>
            <p>Conteúdo específico para esta categoria...</p>
          </div>
        )}

      </div>
    </>
  )
}

export default Portfolio;