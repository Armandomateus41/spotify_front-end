# React + Vite

 Projeto Réplica do Spotify - Front-End

 Visão Geral

Este projeto é a interface front-end da Réplica do Spotify, desenvolvida em React com Vite. Ele permite a navegação entre páginas de artistas, músicas e detalhes de cada item.

Tecnologias Utilizadas

React - Biblioteca para construção da interface.

Vite - Ferramenta para desenvolvimento rápido.

React Router - Gerenciamento de rotas da aplicação.

Tailwind CSS (opcional) - Para estilização moderna e responsiva.
Estrutura de Pastas

A estrutura do projeto está organizada da seguinte maneira:

frontend/
│── node_modules/          # Dependências do projeto
│── public/                # Arquivos estáticos
│── src/
│   ├── assets/            # Imagens e ícones
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.jsx     # Cabeçalho do site
│   │   ├── Main.jsx       # Componente principal
│   ├── pages/             # Páginas principais
│   │   ├── Home/          # Página inicial
│   │   │   ├── Home.jsx
│   │   ├── Songs/         # Página de músicas
│   │   │   ├── Songs.jsx
│   │   │   ├── Song.jsx
│   │   ├── Artists/       # Página de artistas
│   │   │   ├── Artists.jsx
│   │   ├── SongItem.jsx   # Detalhe de cada música
│   ├── utils/             # Funções utilitárias
│   │   ├── api.js         # Configuração da API
│   │   ├── shuffle.js     # Função para embaralhar playlists
│   ├── App.jsx            # Arquivo principal do React
│   ├── main.jsx           # Ponto de entrada da aplicação
│── .gitignore             # Arquivos ignorados pelo Git
│── package.json           # Configurações do projeto
│── vite.config.js         # Configuração do Vite
│── README.md              # Documentação do projeto

Configuração do Projeto
git clone https://github.com/Armandomateus41/spotify_frontend.git
cd spotify_frontend
 Instalar dependências

 Navegação e Rotas

O projeto utiliza React Router para gerenciar as rotas:

/ → Página inicial (Home)

/artists → Lista de artistas (Artists)

/artist/:id → Detalhes de um artista específico

/songs → Lista de músicas (Songs)

/song/:id → Detalhes de uma música específica

Comunicação com o Back-End

A comunicação com o back-end é feita através do arquivo src/utils/api.js, onde o axios é utilizado para chamadas à API.

 Próximos Passos

Autenticação de Usuário - Login e cadastro

 Player de Música - Criar um player funcional

Gerenciamento de Playlists - Criar, editar e excluir playlists

Contribuição

Para contribuir, siga estas etapas:

Crie um Fork do repositório

Crie uma nova branch (git checkout -b minha-feature)

Faça as alterações e commit (git commit -m 'Minha feature')

Envie um PR para análise