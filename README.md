**Como este projeto foi feito:**

1. **HTML Semântico**  
   - Estruturas básicas:  
     - `<header>`: logo e menus  
     - `<main>`: seções de “Últimos Posts” e banners  
     - `<footer>`: contato e redes sociais  

2. **Estilo com Tailwind CSS**  
   - Usando o CDN oficial  
   - Classes utilitárias aplicadas diretamente no HTML  

3. **JavaScript Puro**  
   - **Mock data**  
     - Array `postsData` com objetos que simulam os posts  
   - **Seletores do DOM**  
     - `getElementById` e `querySelectorAll` para capturar:  
       - Container de posts  
       - Barra de busca  
       - Links de categoria  
   - **Renderização dinâmica**  
     - Função `renderPosts()` que:  
       1. Limpa o container  
       2. Cria elementos `<div>` e `<img>` para cada post (usando `createElement`, `innerHTML` e `appendChild`)  
   - **Filtragem em tempo real**  
     - Função `filterPosts(searchTerm, currentCategory)` usando `Array.filter()` para buscar por texto e categoria  
     - Acionada por:  
       - Evento `input` na barra de pesquisa  
       - Evento `click` nos links de categoria da navbar  
   - **Eventos**  
     - `addEventListener('input', …)` e `addEventListener('click', …)`  
     - Reagem às interações do usuário e atualizam a interface sem recarregar a página  
