# 🐱 Gatos App - Desafio Técnico Frontend

Este projeto foi desenvolvido como parte de um *desafio técnico de Frontend* para a vaga de *Desenvolvedor Júnior*.  
A aplicação é uma SPA (Single Page Application) em *React + TypeScript, utilizando **React Router DOM* para navegação entre páginas e *React Slick* para exibição de um *carrossel de imagens de gatos*.

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/) - navegação de rotas
- [React Slick](https://react-slick.neostack.com/) - carrossel de imagens
- [Slick Carousel](https://kenwheeler.github.io/slick/) - estilos base


## 📂 Estrutura do Projeto


gatos-app/
├── src/
│   ├── components/
│   │   └── CatCarousel.tsx   # Componente do carrossel
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Ponto de entrada do React
│   └── index.css             # Estilos globais
├── public/                   # Arquivos estáticos
├── package.json
└── tsconfig.json


---

## ⚙️ Como Rodar o Projeto

1. Clone este repositório:
   bash
   git clone https://github.com/  
   

2. Acesse a pasta do projeto:
   bash
   cd gatos-app
   

3. Instale as dependências:
   bash
   npm install
   

4. Rode o servidor de desenvolvimento:
   bash
   npm run dev
   

5. Abra no navegador:
   
   http://localhost:5173
   

---

## 🐾 Funcionalidades

- Exibe imagens de gatos em formato de *carrossel deslizante*
- *Navegação automática (autoplay)*
- Setas de navegação e indicadores (dots)
- Responsividade garantida

---
## 🐾 Requisitos

- Node
- *npm (já vem com o node)*
- Git
- Precisamos do git instalado para clonar o repositório na nossa máquina, o npm e o node para rodar o nosso projeto localmente.


---

## 🛠️ Possíveis Problemas

Se aparecer erro relacionado ao react-slick no TypeScript:
bash
npm install --save-dev @types/react-slick


Ou crie um arquivo de declaração em src/types/react-slick.d.ts com:
ts
declare module "react-slick";


---

## 📌 Hard Skills

- bibliotecas externas no React
- Estruturação de componentes
- Configuração de carrossel no front-end
- Integração de CSS de pacotes de terceiros

---