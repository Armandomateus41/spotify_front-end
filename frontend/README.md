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