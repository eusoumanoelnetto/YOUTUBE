# 🎥 YouTube Clone - Curso Front-End Santander DIO

![YouTube Clone Banner](https://img.shields.io/badge/YouTube-Clone-red?style=for-the-badge&logo=youtube&logoColor=white)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📋 Sobre o Projeto

Este projeto é um clone funcional do YouTube desenvolvido como parte do **Curso Front-End Santander** oferecido pela **Digital Innovation One (DIO)**. A aplicação replica a interface e funcionalidades principais do YouTube, demonstrando conhecimentos avançados em desenvolvimento front-end moderno.

O projeto foi construído com foco em **responsividade**, **interatividade** e **boas práticas de desenvolvimento**, utilizando as mais modernas tecnologias do ecossistema React.

## ✨ Funcionalidades

### 🎯 Funcionalidades Principais
- **Interface Idêntica ao YouTube**: Layout fiel ao design original do YouTube
- **Sistema de Busca**: Pesquisa em tempo real por vídeos e canais
- **Filtros por Categoria**: Navegação por diferentes categorias (JavaScript, React, CSS, etc.)
- **Sidebar Responsiva**: Menu lateral colapsável com navegação
- **Grid de Vídeos**: Exibição responsiva de vídeos em grade
- **Informações Detalhadas**: Thumbnails, títulos, canais, visualizações e tempo de publicação

### 🔧 Funcionalidades Técnicas
- **Responsividade Completa**: Adaptação perfeita para desktop, tablet e mobile
- **Componentes Reutilizáveis**: Arquitetura modular com componentes React
- **Estado Gerenciado**: Uso de React Hooks para gerenciamento de estado
- **Performance Otimizada**: Lazy loading de imagens e otimizações de renderização
- **Transições Suaves**: Animações e efeitos hover profissionais
- **Acessibilidade**: Implementação de boas práticas de acessibilidade web

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **Vite 6.3.5** - Build tool e bundler de nova geração
- **Tailwind CSS 3.4.1** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones SVG para React

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para identificação de problemas no código
- **PostCSS** - Ferramenta para transformação de CSS
- **Autoprefixer** - Plugin para adicionar prefixes CSS automaticamente

### Dependências Principais
```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "lucide-react": "^0.510.0",
  "tailwindcss": "^3.4.1",
  "vite": "^6.3.5"
}
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou **pnpm** (gerenciador de pacotes)
- **Git** (para clonagem do repositório)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/youtube-clone-santander.git
cd youtube-clone-santander
```

2. **Instale as dependências**
```bash
npm install
# ou
pnpm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
pnpm run dev
```

4. **Acesse a aplicação**
Abra seu navegador e acesse: `http://localhost:5173`

### Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
# ou
pnpm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

Para visualizar a versão de produção localmente:

```bash
npm run preview
# ou
pnpm run preview
```

## 📱 Responsividade

A aplicação foi desenvolvida seguindo a metodologia **Mobile First** e é totalmente responsiva:

- **Mobile** (320px - 768px): Layout otimizado para smartphones
- **Tablet** (768px - 1024px): Adaptação para tablets e dispositivos médios
- **Desktop** (1024px+): Experiência completa para desktops e laptops

### Breakpoints Utilizados
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎨 Design e Interface

### Paleta de Cores
- **Vermelho YouTube**: #FF0000 (Logo e elementos principais)
- **Preto**: #000000 (Texto principal e filtros ativos)
- **Cinza Escuro**: #0F0F0F (Backgrounds escuros)
- **Cinza Médio**: #606060 (Texto secundário)
- **Cinza Claro**: #F9F9F9 (Background principal)
- **Branco**: #FFFFFF (Cards e elementos de destaque)

### Tipografia
- **Fonte Principal**: Inter, system-ui, sans-serif
- **Tamanhos**: Escala tipográfica responsiva
- **Pesos**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

## 📂 Estrutura do Projeto

```
youtube-clone-santander/
├── public/
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── ui/         # Componentes de interface (shadcn/ui)
│   │   ├── Header.jsx  # Cabeçalho da aplicação
│   │   ├── Sidebar.jsx # Menu lateral
│   │   ├── VideoCard.jsx # Card individual de vídeo
│   │   └── VideoGrid.jsx # Grade de vídeos
│   ├── data/           # Dados mockados
│   │   └── mockVideos.js # Dados dos vídeos de exemplo
│   ├── hooks/          # Custom hooks React
│   ├── lib/            # Utilitários e configurações
│   │   └── utils.js    # Funções utilitárias
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos globais
│   ├── index.css       # Estilos base do Tailwind
│   └── main.jsx        # Ponto de entrada da aplicação
├── .gitignore          # Arquivos ignorados pelo Git
├── components.json     # Configuração do shadcn/ui
├── eslint.config.js    # Configuração do ESLint
├── index.html          # Template HTML principal
├── package.json        # Dependências e scripts
├── postcss.config.js   # Configuração do PostCSS
├── README.md           # Documentação do projeto
├── tailwind.config.js  # Configuração do Tailwind CSS
└── vite.config.js      # Configuração do Vite
```

## 🔍 Funcionalidades Detalhadas

### Sistema de Busca
O sistema de busca permite encontrar vídeos em tempo real:
- Busca por título do vídeo
- Busca por nome do canal
- Resultados filtrados instantaneamente
- Interface de "nenhum resultado encontrado"

### Filtros por Categoria
Navegação intuitiva por categorias:
- **Tudo**: Exibe todos os vídeos
- **JavaScript**: Vídeos relacionados a JavaScript
- **React**: Tutoriais e conteúdo sobre React
- **CSS**: Styling e design web
- **HTML**: Estruturação web
- **Node.js**: Backend JavaScript
- **Python**: Programação Python
- **Tutorial**: Conteúdo educacional
- **Programação**: Conteúdo geral de programação
- **Front-end**: Desenvolvimento front-end
- **Back-end**: Desenvolvimento back-end
- **Web Development**: Desenvolvimento web geral
- **Mobile**: Desenvolvimento mobile
- **Design**: Design e UX/UI

### Components Principais

#### Header Component
- Logo do YouTube clicável
- Barra de busca centralizada com ícone de pesquisa
- Botão de microfone para busca por voz (visual)
- Ícones de usuário (criar, notificações, perfil)
- Menu hambúrguer para controle da sidebar

#### Sidebar Component
- Estado colapsável/expansível
- Navegação principal (Início, Em alta, Inscrições)
- Seção de biblioteca pessoal
- Links para diferentes categorias
- Botão de login (visual)
- Footer com informações legais

#### VideoCard Component
- Thumbnail do vídeo com duração
- Título do vídeo (máximo 2 linhas)
- Avatar e nome do canal
- Número de visualizações formatado
- Data de publicação relativa
- Efeitos hover interativos

#### VideoGrid Component
- Layout responsivo em grid
- Adaptação automática do número de colunas
- Suporte a diferentes tamanhos de tela
- Loading lazy das imagens

## 🎓 Sobre o Curso

Este projeto foi desenvolvido como parte do **Curso Front-End Santander** em parceria com a **Digital Innovation One (DIO)**. O curso aborda:

### Conteúdo Programático
- **Fundamentos do React**: Componentes, Props, State, Hooks
- **Desenvolvimento Responsivo**: Mobile First, Flexbox, Grid
- **Estilização Moderna**: Tailwind CSS, CSS-in-JS
- **Ferramentas de Build**: Vite, Webpack, Babel
- **Boas Práticas**: Clean Code, Componentização, Performance
- **Deploy e Produção**: Build optimization, Hosting

### Objetivos de Aprendizado
- Dominar o ecossistema React moderno
- Implementar interfaces complexas e responsivas
- Aplicar boas práticas de desenvolvimento front-end
- Utilizar ferramentas modernas de build e desenvolvimento
- Criar aplicações performáticas e acessíveis

## 🚀 Deploy

A aplicação está disponível online em: [Link do Deploy]

### Opções de Deploy
- **Vercel**: Deploy automático via Git
- **Netlify**: Hosting estático com CI/CD
- **GitHub Pages**: Hosting gratuito do GitHub
- **Firebase Hosting**: Plataforma do Google

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Diretrizes de Contribuição
- Siga os padrões de código estabelecidos
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Use commits semânticos (Conventional Commits)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

## 🙏 Agradecimentos

- **Digital Innovation One (DIO)** pela excelente plataforma de ensino
- **Banco Santander** pelo patrocínio do curso
- **Comunidade React** pelas ferramentas e bibliotecas incríveis
- **YouTube** pela inspiração do design

## 📊 Status do Projeto

![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge)
![Licença](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)

---

<div align="center">
  <p>Desenvolvido com ❤️ durante o Curso Front-End Santander DIO</p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>

