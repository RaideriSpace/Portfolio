// --- Database dos Banners Gerais ---
import bannerUi from '../assets/img/UI/Banner.svg' 
import bannerDev from '../assets/img/Dev/Banner.svg' 
import bannerDesign from '../assets/img/Design/Banner.svg' 
import bannerPaper from '../assets/img/Paper/Banner.svg' 
import banner3D from '../assets/img/3D/Banner.svg' 
import bannerUx from '../assets/img/UX/Banner.svg' 

// --- Database dos projetos UI Design ---

import connectTb from '../assets/img/UI/Connect.svg'
import barberShopTb from '../assets/img/UI/BarberShop.svg'
import bikeAnjoTb from '../assets/img/UI/BikeAnjo.svg'
import moveTb from '../assets/img/UI/Move.svg'
import pixSumupTb from '../assets/img/UI/PixSumUp.svg'
import spotifyTb from '../assets/img/UI/Spotify.svg'
import todoTb from '../assets/img/UI/ToDo.svg'

export const uiData = [
  {
    id: "ui-001",
    title: "Connect - App",
    img: connectTb,
    status: "Finalizado",
    tags: [
      "Notificação", 
      "Storys",
      "Pefil",
      "Atualização Push",
      "Timeline",
      "Interativo",
      "Mobile"
    ],
    description: "Um aplicativo de rede social moderno e prático, com funções de storys, atualização por “push” e perfis.",
    link: "https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?node-id=3174-5728&viewport=-9700%2C-6119%2C0.37&t=if8NxY9W8DGCHojL-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3174%3A5728&hide-ui=1",
  },
  {
    id: "ui-002",
    title: "ToDo - App",
    img: todoTb,
    status: "Finalizado",
    tags: [
      "Push to Delete", 
      "Adicionar Tarefa",
      "Excluir Tarefa",
      "Menu Push",
      "Mobile",
    ],
    description: "Um aplicativo para teste de algumas ações como “Push” para deletar e menu lateral por push, muito usados nos aplicativos atualmente.",
    link: "https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?node-id=3174-5503&viewport=-4524%2C-2027%2C0.18&t=if8NxY9W8DGCHojL-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3174%3A5537&hide-ui=1",
  },
  {
    id: 'ui-003',
    title: "Spotify - App",
    img: spotifyTb,
    status: "Finalizado",
    tags: [
      "Style Guide", 
      "Login",
      "Galeria",
      "Play/Pause",
      "Design Interativo",
      "Mobile",
    ],
    description: "Uma réplica do aplicativo do Spotify, o design minimalista prioriza a experiência do usuário e a descoberta musical",
    link: "https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?node-id=3174-3567&viewport=-4374%2C-1317%2C0.18&t=if8NxY9W8DGCHojL-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3174%3A3565&hide-ui=1",
  },
  {
    id: "ui-004",
    title: "Move - Landing Page",
    img: moveTb,
    status: "Finalizado",
    tags: [
      "LP",
      "Figma",
      "Wireframe", 
      "Style Guide",
      "Orçamentação",
      "Mapa",
    ],
    description: "Para aprimoramento pessoal, fiz a criação dessa Landing Page com base em um briefing de um site de mudanças que quer passar a sensação de segurança, simples e confiável.",
    link: "https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?node-id=3174-4720&viewport=-2088%2C-1530%2C0.13&t=if8NxY9W8DGCHojL-0&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3174%3A4720&hide-ui=1",
  },
  {
    id: "ui-005",
    title: "Barber Shop - Landing Page",
    img: barberShopTb,
    status: "Finalizado",
    tags: [
      "LP",
      "Figma",
      "Style Guide", 
      "Design Interativo",
      "Carrossel",
      "Agenda",
    ],
    description: "Para atender um briefing com estilo visual moderno e minimalista, com um toque de elegância, visa um público alvo com interesse em moda e estilo urbano. ",
    link: "https://www.figma.com/proto/0MWjKzgncI7kq4UZDTAHPR/Portf%C3%B3lio---Lucas-Alves-Pinheiro?node-id=3174-4063&viewport=-1277%2C-400%2C0.08&t=if8NxY9W8DGCHojL-0&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3174%3A4063&hide-ui=1",
  },
  {
    id: "ui-006",
    title: "Pix + SumUp - Landing Page e E-mail",
    img: pixSumupTb,
    status: "Finalizado",
    tags: [
      "LP",
      "E-mail",
      "Figma",
      "Wireframe",
      "Style Guide",
      "Paletas",
      "Benchmark",
      "Pixel Perfect",
    ],
    description: "Projeto proposto pela EBAC, realizei a junção das marcas SumUp e Pix, a fim de promover ao usuário da SumUp a nova forma de pagamento.",
    link: "https://www.figma.com/design/331apB2Kc62c0FIP51Ztcj/EBAC?node-id=68-2&t=yAHkcnWk9Q98dOZx-1",
  },
  {
    id: "ui-007",
    title: "Bike Anjo - Redesign",
    img: bikeAnjoTb,
    status: "Em Andamento",
    tags: [
      "LP",
      "Mobile",
      "Figma",
      "Wireframe",
      "Style Guide",
      "Design Interativo",
    ],
    description: "Junto de outros voluntários, buscamos melhorar o design do site da Bike Anjo, com base em entrevistas com usuários para que seja mais agradável e funcional",
    link: "/",
  },
];

// --- Database dos projetos Dev ---

import gamesTb from '../assets/img/Dev/Games.svg'
import portfolioTb from '../assets/img/Dev/Portfolio.svg'
import registerappTb from '../assets/img/Dev/RegisterApp.svg'
import spotifywebTb from '../assets/img/Dev/Spotify.svg'
import techtastyTb from '../assets/img/Dev/TechTasty.svg'
import trsTb from '../assets/img/Dev/TRSquad.svg'
import ecommerceTb from '../assets/img/Dev/e-commerce.svg'
import contabancariaTb from '../assets/img/Dev/contabancaria.svg'
import pythonTb from '../assets/img/Dev/python.svg'

export const devData = [
  {
    id: "dev-001",
    title: "WebGames",
    img: gamesTb,
    status: "Ajustando",
    tags: ["JavaScript", "HTML", "CSS", "Jogos"],
    description:
      "Focado em JavaScript para criar jogos interativos no navegador, explorei desde a lógica de tomada de decisão com alert/prompt até a manipulação do DOM para quizzes visuais.",
    link: "https://github.com/RaideriSpace/Alura_ImersaoDev",
  },
  {
    id: "dev-002",
    title: "Tech Tasty",
    img: techtastyTb,
    status: "Ajustando",
    tags: [
      "Flutter",
      "JavaScript",
      "CSS",
      "Mobile",
      "React Native",
      "Firebase Studio",
    ],
    description:
      "Realizado em uma imersão Mobile da Alura, o propósito foi criar um aplicativo mobile de fastfood, com a tela de login, a tela de restaurantes e cardápio.",
    link: "https://studio.firebase.google.com/fluttertechtaste2-51801203",
  },
  {
    id: "dev-003",
    title: "Spotify Web",
    img: spotifywebTb,
    status: "Finalizado",
    tags: ["JavaScript", "React", "Vite", "MongoDb", "CSS", "Git", "Express"],
    description:
      "Recriei a página inicial do Spotify, com músicas selecionáveis, play e pause, atualização da barra de progresso e próxima música.",
    link: "https://github.com/RaideriSpace/Deploy_Spotify_Site",
  },
  {
    id: "dev-004",
    title: "Portfólio",
    img: portfolioTb,
    status: "Em andamento",
    tags: [
      "JavaScript",
      "React",
      "Vite",
      "CSS",
      "HTML",
      "Git",
      "Framer Motion",
      "ESLint",
    ],
    description:
      "Uma vitrine interativa e responsiva de minhas habilidades em Desenvolvimento Front-end e UX/UI Design, acessível online. Apresenta design otimizado (criado no Figma), animações fluidas com Framer Motion, modularidade e foco em acessibilidade e performance.",
    link: "https://github.com/RaideriSpace/Portfolio",
  },
  {
    id: "dev-005",
    title: "TRSquad",
    img: trsTb,
    status: "Finalizado",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "jQuery",
      "PHP",
      "EcmaScript",
    ],
    description:
      "Projeto pessoal de re-design focado em otimizar a experiência do usuário para uma empresa de TI. Desenvolvido com HTML5, CSS3, JavaScript (incluindo jQuery e Bootstrap), e PHP para formulários, ele oferece suporte técnico, consultoria e segurança cibernética com um design responsivo e interativo.",
    link: "https://github.com/RaideriSpace/TRSquad_LP",
  },
  {
    id: "dev-006",
    title: "Python Projects Hub",
    img: pythonTb,
    status: "Finalizado",
    tags: [
      "Python",
      "IA",
      "DataScience",
      "Jupyter",
      "Machine Learning",
      "Chatbot",
    ],
    description:
      "Este projeto é um hub de aplicações Python com foco em automação, inteligência artificial e interfaces. Inclui automação de tarefas com PyAutoGUI, IA com Streamlit e Gemini, e um modelo preditivo de score de crédito.",
    link: "https://github.com/RaideriSpace/Python_Projects_Hub",
  },
  {
    id: "dev-007",
    title: "Conta Bancaria - Terminal",
    img: contabancariaTb,
    status: "Finalizado",
    tags: ["TypeScript", "JavaScript", "Lógica de Programação", "CRUD"],
    description:
      "Projeto de Lógica de programação realizado durante o bootcamp da Generation Brasil, utilizando Typescript para criar o gerenciamento de um banco que roda pelo terminal, com cadastro de clientes, exclusão, pesquisa, listagem e atualização de dados.",
    link: "https://github.com/RaideriSpace/conta_bancaria",
  },
  {
    id: "dev-008",
    title: "E-Commerce - Terminal",
    img: ecommerceTb,
    status: "Finalizado",
    tags: ["TypeScript", "JavaScript", "Lógica de Programação", "CRUD"],
    description:
      "Projeto de Lógica de programação realizado durante o bootcamp da Generation Brasil, utilizando TypeScript para criar um e-commerce que roda pelo terminal, com cadastro de produtos, carrinho, atualização, listagem e exclusão de itens.",
    link: "https://github.com/RaideriSpace/projeto_final_bloco_01",
  },
  {
    id: "dev-009",
    title: "Register App",
    img: registerappTb,
    status: "Em andamento",
    tags: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Autenticação",
      "Full-Stack",
      "MUI",
    ],
    description:
      "Aplicação full-stack de autenticação de usuários. Ele implementa registro, login seguro com JWT, proteção de rotas e persistência de sessão, sendo uma solução completa para gestão de usuários.",
    link: "https://github.com/RaideriSpace/register-app",
  },
];

// --- Database dos projetos Design ---

import bfashionTb from '../assets/img/Design/BFashion.svg'
import bysarahTb from '../assets/img/Design/BySarah.svg'
import emotesTb from '../assets/img/Design/Emotes.svg'
import florefioTb from '../assets/img/Design/FloreFio.svg'
import joohTb from '../assets/img/Design/Jooh.svg'
import miumiwuTb from '../assets/img/Design/MiuMiwu.svg'
import mysticmistTb from '../assets/img/Design/MysticMist.svg'
import projectTb from '../assets/img/Design/Project.svg'
import raispaceTb from '../assets/img/Design/RaiSpace.svg'
import roomTb from '../assets/img/Design/Room.svg'

export const designData = [
  {
    id: "art-001",
    title: "Quarto",
    img: roomTb,
    status: "Finalizado",
    tags: [
      "Photoshop", 
      "Digital Color",
      "Ambiente"
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "art-002",
    title: "Emotes",
    img: emotesTb,
    status: "Finalizado",
    tags: [
      "Photoshop", 
      "Digital Color",
      "Emotes",
      "Redes Sociais",
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "art-003",
    title: "Project",
    img: projectTb,
    status: "Finalizado",
    tags: [
      "Photoshop", 
      "Digital Color",
      "Medalhas",
      "Tier",
      "Comercial",
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "art-004",
    title: "MiuMiwu Emotes",
    img: miumiwuTb,
    status: "Em andamento",
    tags: [
      "Photoshop",
      "Rede Social",
      "Emotes",
      "Streamer",
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "art-005",
    title: "Jooh",
    img: joohTb,
    status: "Em andamento",
    tags: [
      "Logo",
      "Photoshop",
      "Estética",
      "Moodboard",
      "Paleta de Cores",
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "art-006",
    title: "BySarah",
    img: bysarahTb,
    status: "Em andamento",
    tags: [
      "Logo",
      "Photoshop",
      "Costura",
      "Moodboard",
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "art-007",
    title: "Flor & Fio",
    img: florefioTb,
    status: "Em andamento",
    tags: [
      "Photoshop",
      "Logo",
      "Moodboard",
      "Costura",
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "art-008",
    title: "B-Fashion",
    img: bfashionTb,
    status: "Em andamento",
    tags: [
      "Photoshop",
      "Revista",
      "Premier Studio",
      "Estilização",
      "Moda"
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "art-009",
    title: "Mystic Mist",
    img: mysticmistTb,
    status: "Em andamento",
    tags: [
      "Photoshop",
      "Logo",
      "Paleta de Cores",
      "Moodboard",
      "Artesanato"
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "art-010",
    title: "Raideri Space Art",
    img: raispaceTb,
    status: "Em andamento",
    tags: [
      "Photoshop",
      "Logo",
      "Paleta de Cores",
      "Moodboard",
      "Tech & Design"
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
]

// --- Database dos projetos Paper ---

import arthasTb from '../assets/img/Paper/Tb/ArthasTb.svg'
import thrallTb from "../assets/img/Paper/Tb/ThrallTb.svg";
import sylvanasTb from "../assets/img/Paper/Tb/SylvanasTb.svg";
import opgraveTb from "../assets/img/Paper/Tb/OPGraveTb.svg";
import usoppTb from "../assets/img/Paper/Tb/UsoppTb.svg";
import totoroTb from "../assets/img/Paper/Tb/TotoroTb.svg";
import angelbeatsTb from "../assets/img/Paper/Tb/AngelBeatsTb.svg";
import dragonTb from '../assets/img/Paper/Tb/DragonTb.svg'
import gnarTb from "../assets/img/Paper/Tb/GnarTb.svg";
import hearthTb from "../assets/img/Paper/Tb/HearthTb.svg";
import jinxTb from "../assets/img/Paper/Tb/JinxTb.svg";
import kaminaTb from "../assets/img/Paper/Tb/KaminaTb.svg";
import luluTb from "../assets/img/Paper/Tb/LuluTb.svg";
import mikuTb from "../assets/img/Paper/Tb/MikuTb.svg";
import mushuTb from "../assets/img/Paper/Tb/MushuTb.svg";
import ninaTb from "../assets/img/Paper/Tb/NinaTb.svg";
import petterTb from "../assets/img/Paper/Tb/PetterTb.svg";
import philosophTb from "../assets/img/Paper/Tb/PhilosophTb.svg";
import porinxTb from "../assets/img/Paper/Tb/PorinxTb.svg";
import porivenTb from "../assets/img/Paper/Tb/PorivenTb.svg";
import truthTb from "../assets/img/Paper/Tb/TruthTb.svg";
import wolfsTb from "../assets/img/Paper/Tb/WolfsTb.svg";
import yournameTb from "../assets/img/Paper/Tb/YourNameTb.svg";

export const paperData = [
  {
    id: "paper-001",
    title: "Arthas, The Lich King - WoW",
    img: arthasTb,
  },
  {
    id: "paper-002",
    title: "Thrall - WoW",
    img: thrallTb,
  },
  {
    id: "paper-003",
    title: "Sylvanas Wildrunner - WoW",
    img: sylvanasTb,
  },
  {
    id: "paper-004",
    title: "Ace & Newgate Grave - One Piece",
    img: opgraveTb,
  },
  {
    id: "paper-005",
    title: "Klabautermann - One Piece",
    img: usoppTb,
  },
  {
    id: "paper-006",
    title: "Tonari no Totoro",
    img: totoroTb,
  },
  {
    id: "paper-007",
    title: "The Truth - FMA",
    img: truthTb,
  },
  {
    id: "paper-008",
    title: "Nina - FMA",
    img: ninaTb,
  },
  {
    id: "paper-009",
    title: "Pedra Filosofal - FMA",
    img: philosophTb,
  },
  {
    id: "paper-010",
    title: "Peter Pan",
    img: petterTb,
  },
  {
    id: "paper-011",
    title: "Kimi no na wa",
    img: yournameTb,
  },
  {
    id: "paper-012",
    title: "Draw With Me",
    img: hearthTb,
  },
  {
    id: "paper-013",
    title: "Hatsune Miku - Romeo & Cinderella",
    img: mikuTb,
  },
  {
    id: "paper-014",
    title: "Mushu - Mulan",
    img: mushuTb,
  },
  {
    id: "paper-015",
    title: "Chinese Dragon",
    img: dragonTb,
  },
  {
    id: "paper-016",
    title: "Jinx - LoL",
    img: jinxTb,
  },
  {
    id: "paper-017",
    title: "Lulu - LoL",
    img: luluTb,
  },
  {
    id: "paper-018",
    title: "Gnar - LoL",
    img: gnarTb,
  },
  {
    id: "paper-019",
    title: "Poro Jinx - LoL",
    img: porinxTb,
  },
  {
    id: "paper-020",
    title: "Poro Riven - LoL",
    img: porivenTb,
  },
  {
    id: "paper-021",
    title: "Wolfs",
    img: wolfsTb,
  },
  {
    id: "paper-022",
    title: "My Soul, Your Beats! - Angel Beats",
    img: angelbeatsTb,
  },
  {
    id: "paper-023",
    title: "Kamina e Simon - TTGL",
    img: kaminaTb,
  },
];

// --- Database dos projetos 3D ---

import chocodonutTb from '../assets/img/3D/ChocoDonut.svg'
import sugardonutTb from '../assets/img/3D/SugarDonut.svg'
import ecopontoTb from '../assets/img/3D/Ecoponto.svg'
import marioTb from '../assets/img/3D/Mario.svg'
import needleTb from '../assets/img/3D/Needle.svg'

export const threedData = [
  {
    id: "td-001",
    title: "Mario",
    img: marioTb,
    status: "Ajustando",
    tags: [
      "Blender",
      "Textura",
      "Sombra",
      "ColorMap",
      "Animação",
      "Jogos"
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "td-002",
    title: "Needle",
    img: needleTb,
    status: "Ajustando",
    tags: [
      "Blender",
      "Textura",
      "Sombra",
      "ColorMap",
      "Costura"
    ],
    description: "Descrição do Projeto",
    link: "#",
  },
  {
    id: "td-003",
    title: "EcoPonto",
    img: ecopontoTb,
    status: "Finalizado",
    tags: [
      "SketchUp",
      "Sombra",
      "Comercial",
      "Ecológico",
    ],
    description: "Descrição do Projeto",
    link: "/",
  },
  {
    id: "td-004",
    title: "Sugar Donut",
    img: sugardonutTb,
    status: "Em andamento",
    tags: [
      "Blender",
      "Textura",
      "Sombra",
      "ColorMap",
      "Comida",
      "Jogo"
    ],
    description: "Descrição do Projeto",
    link: "/",
  },
  {
    id: "td-005",
    title: "Choco Donut",
    img: chocodonutTb,
    status: "Em andamento",
    tags: [
      "Blender",
      "Textura",
      "Sombra",
      "ColorMap",
      "Comida",
      "Jogo"
    ],
    description: "Descrição do Projeto",
    link: "/",
  },
]

// --- Database dos projetos Ux ---

import effettivoTb from '../assets/img/UX/Effettivo.svg'
import gestaoTb from '../assets/img/UX/Gestao.svg'
import railinkTb from '../assets/img/UX/RaiLink.svg'
import itauTb from '../assets/img/UX/Itau.svg'

export const uxData = [
  {
    id: "ux-001",
    title: "RaiLink",
    img: railinkTb,
    status: "Ajustando",
    tags: [
      "Benchmark",
      "User Research",
      "Persona",
      "Mapa de Empatia",
      "Design Thinking"
    ],
    description: "Proposta: Diminuir o tempo de uso do celular pela metade ao remover o tempo de troca entre aplicativos e diminuindo a redundância de postagens iguais em diferentes redes.",
    link: "/",
  },
  {
    id: "ux-002",
    title: "Sempre Design - PowerBI",
    img: effettivoTb,
    status: "Ajustando",
    tags: [
      "User Research",
      "Entrevista de Usuário",
      "Persona",
      "Design Thinking",
      "Ciclo de UX",
    ],
    description: "Proposta: Buscamos melhorar a adesão dos dashboards pelos usuários para aumentar os usuários de 5 para 150",
    link: "/",
  },
  {
    id: "ux-003",
    title: "Sempre Design - Solução para Gestão",
    img: gestaoTb,
    status: "Finalizado",
    tags: [
      "Formulação da hipótese", 
      "User Research",
      "Validação da hipótese",
      "Design Thinkg",
      "Entrevista com usuário",
      "IA"
    ],
    description: "Proposta: Buscamos ajudar a gestão do negócio de micro e pequenos empreendedores, com um produto que facilite a organização e ajude a identificar riscos e oportunidades.",
    link: "/",
  },
  {
    id: "ux-004",
    title: "Itau",
    img: itauTb,
    status: "Em andamento",
    tags: [
      "Benchmark",
      "User Research",
      "Persona",
      "Mapa de Empatia",
      "Design Thinking"
    ],
    description: "Descrição do Projeto",
    link: "/",
  },
]

// --- Database geral de projetos ---

export const projectDataMap = {
  uiData,
  devData,
  designData,
  paperData,
  threedData,
  uxData,
};

export const allProjectsData = [
  ...uiData,
  ...devData,
  ...designData,
  ...paperData,
  ...threedData,
  ...uxData,
];

// --- Array Categories ---

export const categories = [
  {
    name: "all",
    label: "Todos",
    bannerText: "Meu Portfolio",
    bannerImage: null,
    mainColor: "var(--primary)",
    mainShadow: "var(--primary-ex-dark)",
    textColor: "var(--primary-ex-dark)",
    projectDataKey: allProjectsData,
    boxColor: "var(--primary-ex-light)",
  },
  {
    name: "ui-design",
    label: "UI Design",
    bannerText: "UI Design",
    bannerImage: bannerUi,
    mainColor: "var(--secondary)",
    mainShadow: "var(--secondary-ex-dark)",
    textColor: "var(--secondary-ex-dark)",
    projectDataKey: uiData,
    boxColor: "var(--secondary-ex-light)", 
  },
  {
    name: "web-dev",
    label: "Web Dev",
    bannerText: "Web Dev",
    bannerImage: bannerDev,
    mainColor: "var(--tertiary-light)",
    mainShadow: "var(--tertiary-dark)",
    textColor: "var(--tertiary-ex-dark)",
    projectDataKey: devData,
    boxColor: "var(--tertiary-ex-light)",
  },
  {
    name: "digital-art",
    label: "Arte Digital",
    bannerText: "Arte Digital",
    bannerImage: bannerDesign,
    mainColor: "var(--secondary)",
    mainShadow: "var(--secondary-ex-dark)",
    textColor: "var(--secondary-ex-dark)",
    projectDataKey: designData,
    boxColor: "var(--secondary-ex-light)", 
  },
  {
    name: "paper",
    label: "Papel",
    bannerText: "Papel",
    bannerImage: bannerPaper,
    mainColor: "var(--tertiary-light)",
    mainShadow: "var(--tertiary-ex-dark)",
    textColor: "var(--tertiary-ex-dark)",
    projectDataKey: paperData,
    boxColor: "var(--tertiary-ex-light)",
  },
  {
    name: "3d-modeling",
    label: "Modelagem 3D",
    bannerText: "Modelagem 3D",
    bannerImage: banner3D,
    mainColor: "var(--secondary)",
    mainShadow: "var(--secondary-ex-dark)",
    textColor: "var(--secondary-ex-dark)",
    projectDataKey: threedData,
    boxColor: "var(--secondary-ex-light)", 
  },
  {
    name: "ux-design",
    label: "Ux Design",
    bannerText: "Ux Design",
    bannerImage: bannerUx,
    mainColor: "var(--tertiary-light)",
    mainShadow: "var(--tertiary-ex-dark)",
    textColor: "var(--tertiary-ex-dark)",
    projectDataKey: uxData,
    boxColor: "var(--tertiary-ex-light)",
  },
];

