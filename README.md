# YouTube Clone - Curso Front-End Santander DIO

Este projeto é uma réplica simplificada da interface do YouTube, desenvolvida como parte do curso de Front-End do Santander em parceria com a [Digital Innovation One (DIO)](https://www.dio.me/).

## 📋 Descrição

O objetivo deste projeto é praticar conceitos de desenvolvimento Front-End usando:

- React (v18)
- Vite
- Tailwind CSS
- Componentes Radix UI
- React Router
- Mock de dados para vídeos

A aplicação exibe um grid de vídeos com título, canal e previews simuladas, permitindo navegação e responsividade.

## ✨ Tecnologias Utilizadas

- React 18
- Vite
- Tailwind CSS
- Radix UI (radix-ui/react-*)
- clsx
- framer-motion
- react-router-dom
- mockVideos.js (dados estáticos de vídeos)
- date-fns
- Recharts (gráficos)

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (>= 16)
- npm ou pnpm

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/eusoumanoelnetto/YOUTUBE.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd YOUTUBE
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou pnpm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador em `http://localhost:5173`.

## 📁 Estrutura do Projeto

```plaintext
├─ public/
│  └─ index.html       # Arquivo HTML principal
├─ src/
│  ├─ App.jsx          # Componente raiz
│  ├─ main.jsx         # Ponto de entrada React
│  ├─ components/      # Componentes reutilizáveis
│  │  ├─ Header.jsx
│  │  ├─ Sidebar.jsx
│  │  ├─ VideoCard.jsx
│  │  └─ VideoGrid.jsx
│  ├─ mockVideos.js    # Dados de exemplo de vídeos
│  └─ utils.js         # Funções auxiliares
├─ vite.config.js      # Configuração do Vite
├─ package.json        # Dependências e scripts
└─ README.md           # Documentação do projeto
```

## 🎯 Funcionalidades

- Exibição de grid de vídeos
- Componentização com React e Radix UI
- Responsividade com Tailwind CSS
- Navegação (React Router)
- Animações básicas (Framer Motion)

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Feito com ❤️ por Manuel Netto
