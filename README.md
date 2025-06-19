# 🚀 Portfólio - Lucas Alves Pinheiro

Bem-vindo(a) ao repositório do meu portfólio pessoal! Este projeto é uma vitrine interativa das minhas habilidades e projetos como Desenvolvedor Front-end e UX/UI Designer. Ele foi cuidadosamente elaborado para oferecer uma experiência de usuário intuitiva e visualmente atraente, utilizando as melhores práticas de desenvolvimento web.

Acesse o portfólio online: [https://portfolio-eight-wine-50.vercel.app/](https://portfolio-eight-wine-50.vercel.app/)

## ✨ Visão Geral do Projeto

Este portfólio foi desenvolvido com foco em:

* **Design Responsivo:** Adaptável a diversas telas (desktop, tablet, mobile) para garantir uma experiência consistente.
* **Animações Suaves:** Utiliza `framer-motion` para transições e interações fluidas e elegantes.
* **Modularidade:** Estruturado em componentes React para facilitar a manutenção e escalabilidade.
* **Acessibilidade (A11y):** Desenvolvido com foco em padrões de acessibilidade (ARIA), garantindo que a interface seja utilizável por todos, incluindo usuários de tecnologias assistivas.
* **Performance Otimizada:** Ferramentas modernas de build e boas práticas de código garantem um carregamento rápido e uma execução eficiente.
* **Experiência do Usuário (UX) Aprimorada:** Modais interativos com fechamento via overlay/tecla Escape e animações contextuais (como barras de progresso animadas ao entrar em visualização) elevam a usabilidade.

## 🎨 Design

O design completo deste portfólio, desde a concepção até o protótipo final interativo, foi **criado e elaborado por mim no Figma**. Isso garante a total fidelidade entre o design e a implementação, refletindo meu processo de trabalho como UX/UI Designer.

🔗 **Link para o Figma do Projeto:**
[https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?page-id=3009%3A714&node-id=3012-828&viewport=1748%2C-1064%2C0.76&t=d7z5dh5uwykNNOLo-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3012%3A828](https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?page-id=3009%3A714&node-id=3012-828&viewport=1748%2C-1064%2C0.76&t=d7z5dh5uwykNNOLo-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3012%3A828)

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e ferramentas:

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **React Router DOM:** Para gerenciamento de rotas e navegação na SPA (Single Page Application).
* **Vite:** Ferramenta de build de nova geração que oferece uma experiência de desenvolvimento extremamente rápida.
* **JavaScript (ES6+):** Linguagem de programação principal.
* **HTML5:** Estrutura semântica do conteúdo.
* **CSS3:** Estilização e layout, com destaque para:
    * **Variáveis CSS:** Para uma gestão de cores e temas eficiente.
    * **Media Queries:** Para garantir a responsividade.
    * **Gradientes no Texto:** Detalhes visuais avançados.
* **Framer Motion:** Biblioteca para animações declarativas e fluidas em React.
* **Font Awesome:** Biblioteca de ícones escaláveis (SVG).
* **ESLint:** Ferramenta para linting de código, garantindo padrões e identificando erros.
* **Git:** Sistema de controle de versão.

### Dependências (conforme `package.json`):

* `@fortawesome/fontawesome-svg-core`
* `@fortawesome/free-brands-svg-icons`
* `@fortawesome/free-regular-svg-icons`
* `@fortawesome/free-solid-svg-icons`
* `@fortawesome/react-fontawesome`
* `axios`
* `framer-motion`
* `path`
* `react`
* `react-dom`
* `react-router-dom`
* `react-svg`

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e executar o portfólio em sua máquina:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão 18 ou superior recomendada) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados em seu sistema.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/RaideriSpace/Portfolio.git](https://github.com/RaideriSpace/Portfolio.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Portfolio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

### Execução

1.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

2.  O projeto estará acessível em `http://localhost:5173/` (ou outra porta, se 5173 estiver em uso).

### Build para Produção

    Para criar uma versão otimizada do projeto para produção:

    ```bash
    npm run build
    # ou
    yarn build

    Os arquivos de build serão gerados na pasta dist/.

### Linting de Código

    Para verificar a conformidade do código com as regras do ESLint:

    npm run lint
    # ou
    yarn lint

## 📂 Estrutura de Pastas
    
    A estrutura do projeto segue uma organização modular para facilitar o desenvolvimento e a manutenção:

    .
    ├── public/                     # Arquivos estáticos (favicon, etc.)
    ├── src/
    │   ├── assets/                 # Imagens, fontes, outros recursos
    │   │   ├── fonts/
    │   │   ├── img/
    │   │   └── ...
    │   ├── componentes/            # Componentes reutilizáveis da UI
    │   │   ├── Header.jsx
    │   │   ├── Home.jsx            # Renomeado de Main.jsx
    │   │   ├── Footer.jsx
    │   │   ├── mainComponents/     # Componentes específicos da página Home
    │   │   │   ├── About.jsx
    │   │   │   ├── Skills.jsx
    │   │   │   ├── MyGallery.jsx
    │   │   │   ├── Carousel.jsx
    │   │   │   └── ...
    │   │   ├── portfolioComponents/# Componentes específicos da página de portfólio
    │   │   │   ├── SubNavbar.jsx
    │   │   │   ├── PortfolioBanner.jsx
    │   │   │   ├── PortfolioOpen.jsx
    │   │   │   └── ...
    │   │   └── modalComponents/    # Componentes de modal (ex: CvModal, Contato)
    │   │       ├── CvModal.jsx
    │   │       ├── ContatoModal.jsx
    │   │       └── ...
    │   ├── styles/                 # Folhas de estilos e variáveis CSS
    │   │   ├── index.css
    │   │   ├── portfolio.css
    │   │   └── variables.css
    │   ├── data/                   # Dados estáticos ou mocks de dados
    │   │   ├── cardsData.js
    │   │   └── cvData.js
    │   ├── hooks/                  # Custom Hooks React para lógica reutilizável
    │   │   ├── useIsMobile.js
    │   │   ├── useBodyScrollLock.js
    │   │   ├── useScrollToTop.js
    │   │   ├── useModalCloseOnEscape.js # Novo hook para fechar modal com Escape
    │   │   └── ...
    │   ├── App.jsx                 # Componente raiz da aplicação, orquestra rotas e estado global
    │   ├── main.jsx                # Ponto de entrada da aplicação (renderização do React)
    │   └── ...
    ├── .eslintrc.cjs               # Configuração do ESLint
    ├── .gitignore                  # Arquivos e pastas a serem ignorados pelo Git
    ├── index.html                  # Arquivo HTML principal
    ├── package.json                # Metadados do projeto e dependências
    ├── vite.config.js              # Configuração do Vite
    └── README.md                   # Este arquivo!

## 🤝 Contribuição

    Este é um projeto pessoal, mas estou aberto a sugestões e melhorias. Sinta-se à vontade para abrir uma issue ou pull request se tiver alguma ideia!

## 📧 Contato

    LinkedIn: https://www.linkedin.com/in/lucasalvespinheiro/
    Email: l.pinheiro.w@gmail.com
    Behance: https://www.behance.net/raideri
    GitHub: https://github.com/RaideriSpace
    WhatsApp: (11) 98915-7255

## 📝 Licença

Este projeto não possui uma licença de código aberto explícita no repositório no momento. Todos os direitos de design e código são reservados a Lucas Alves Pinheiro. Para uso comercial ou distribuição, por favor, entre em contato.

---

Feito com ❤️ por Lucas Alves Pinheiro. 
Deus abençoe.


Este projeto está em constante evolução. Novas funcionalidades e melhorias serão adicionadas futuramente.
