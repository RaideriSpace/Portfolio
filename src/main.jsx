import { StrictMode } from 'react' // Importa o StrictMode do React.
import { createRoot } from 'react-dom/client' // Importa createRoot para o modo de renderização concorrente do React 18+.
import '../src/styles/index.css' // Importa o arquivo CSS global.
import App from './App.jsx' // Importa o componente principal da aplicação.

// Seleciona o elemento DOM onde o aplicativo React será montado.
const rootElement = document.getElementById('root');

// Verifica se o elemento root realmente existe antes de criar a raiz.
rootElement ? (

  // Cria uma raiz React usando a API de renderização concorrente.
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
) : (
  // Adiciona um log de erro se o elemento root não for encontrado.
  console.error('Elemento com ID "root" não encontrado no DOM. O aplicativo React não pode ser montado.')
)
