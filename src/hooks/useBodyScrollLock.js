import { useEffect } from 'react'

const useBodyScrollLock = (isLocked) => {
  useEffect(() =>{
    // Verifica se o ambiente é de navegador antes de manipular o DOM
    if (typeof window !== 'undefined') {
      isLocked ? (document.body.classList.add('body--no--scroll')
      ) : (
        document.body.classList.remove('body--no--scroll')
      );
    }

    // Garante que a classe seja removida quando o hook for desemontado ou quando isLocked for false.
    return () => {
      if (typeof window !== 'undefined') {
        document.body.classList.remove('body--no--scroll');
      }
    };
  }, [isLocked]); // É re-executado sempre que isLocked muda
};

export default useBodyScrollLock;
