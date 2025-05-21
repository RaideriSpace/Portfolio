import { useEffect, useState } from 'react'; // Importa os hooks necessários do React.

// Hook customizado para detectar se a tela é mobile com base em um breakpoint.
// O breakpoint padrão é 480px, mas pode ser configurado.
export default function useIsMobile(breakpoint = 768) {

  // Estado para armazenar se a tela é mobile.
  // Inicializa o estado com base na largura atual da janela, verificando se 'window' está disponível (para SSR).
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false
  );

  // Efeito colateral para adicionar e remover o event listener de 'resize'.
  useEffect(() => {

    // Função que atualiza o estado 'isMobile' quando a janela é redimensionada.
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Adiciona o event listener ao objeto 'window'
    window.addEventListener('resize', handleResize);

    // Função de limpeza: remove o event listener quando o componente é desmontado
    // ou quando as dependências do useEffect mudam.
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]); // A dependência 'breakpoint' garante que o listener seja reconfigurado se o breakpoint mudar.

  return isMobile; // Retorna o valor booleano indicando se a tela é mobile.
}