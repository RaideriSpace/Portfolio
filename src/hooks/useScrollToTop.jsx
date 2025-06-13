import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation (); // Obtém o 'pathname' (a parte do caminho da URL) da localização atual

  // Usa o hook useEffect para executar um efeito colateral após cada renderização
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); // Posição do scroll para x 0 e y 0.
  }, [pathname]); // Será executado sempre que o pathname mudar.

  return null; 
};

export default useScrollToTop;