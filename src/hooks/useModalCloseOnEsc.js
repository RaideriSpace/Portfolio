import { useEffect, useCallback } from 'react';

const useModalCloseOnEsc = (isOpen, onClose) => {
  const handleEscapeKey = useCallback (
    (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(()=> {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);
};

export default useModalCloseOnEsc;