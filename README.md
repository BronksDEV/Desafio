Como este projeto foi feito: 

1 - HTML semântico usando as estruturas básicas: <header> com logo e menus, <main> com seções de “Últimos Posts” e banners, e <footer> com contato e redes sociais.

2 - Estilo com Tailwind CSS usando  o CDN, aplicando as classes do Tailwind diretamente no HTML. 

3 - JavaScript puro
  . Mock data: um array postsData com objetos que simulam os posts.

  
  . Seletores do DOM: getElementById e querySelectorAll para capturar o container de posts, barra de busca e links de categoria.

  
  . Renderização dinâmica: função renderPosts que limpa o container e cria elementos div e img para cada post usando createElement, innerHTML e appendChild.

  
  . Filtra posts em tempo real: função filterPosts(searchTerm, currentCategory) que usa Array.filter() para aplicar busca por texto e categoria, acionadas por input na barra de pesquisa e click nos links de categoria no navbar.

  
  . Os events addEventListener('input', …) e addEventListener('click', …) reagem as  interações do usuário e e atualizam a interface sem recarregar a página.
