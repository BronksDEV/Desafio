  //objetos que simulam dados de posts
        const postsData = [
            {
                id: 1,
                title: "Desvendando o JavaScript Moderno",
                category: "tecnologia",
                image: "img/tecnologia.jpg",
                excerpt: "Explore as últimas novidades e recursos do JavaScript que estão moldando o desenvolvimento web atual. De ES6 a async/await, entenda como escrever código mais limpo e eficiente.",
                content: "None",
                date: "2025-07-10"
            },
            {
                id: 2,
                title: "A Arte de Viajar Sozinho: Dicas Essenciais",
                category: "viagens",
                image: "img/viagens.jpg",
                excerpt: "Viajar sozinho pode ser uma experiência transformadora. Descubra como planejar sua aventura, manter-se seguro e aproveitar ao máximo cada momento de autodescoberta.",
                content: "None",
                date: "2025-07-08"
            },
            {
                id: 3,
                title: "Receitas Saudáveis para o Dia a Dia",
                category: "culinaria",
                image: "img/comidas.jpg",
                excerpt: "Cansado de comer sempre a mesma coisa? Conheça receitas fáceis e nutritivas que vão revolucionar sua alimentação sem abrir mão do sabor.",
                content: "None",
                date: "2025-07-05"
            },
            {
                id: 4,
                title: "Produtividade no Trabalho Remoto: Estratégias Comprovadas",
                category: "estilo-de-vida",
                image: "img/homeoffice.jpg",
                excerpt: "Trabalhar de casa exige disciplina e organização. Aprenda técnicas e ferramentas para manter o foco, gerenciar seu tempo e ser mais produtivo no home office.",
                content: "None",
                date: "2025-07-03"
            },
            {
                id: 5,
                title: "Inteligência Artificial: O Futuro Chegou?",
                category: "tecnologia",
                image: "img/inteligency.jpg",
                excerpt: "A Inteligência Artificial está transformando o mundo em ritmo acelerado. Entenda o que é IA, suas aplicações e o impacto na nossa sociedade e no mercado de trabalho.",
                content: "None",
                date: "2025-07-01"
            },
            {
                id: 6,
                title: "Dicas para um Sono Reparador",
                category: "estilo-de-vida",
                image: "img/dormirbem.jpg",
                excerpt: "A qualidade do sono afeta diretamente nossa saúde e bem-estar. Descubra hábitos e rotinas que podem te ajudar a ter noites de sono mais tranquilas e revigorantes.",
                content: "None",
                date: "2025-06-28"
            }
        ];

        // Elemento onde os posts serão exibidos
        const postsContainer = document.getElementById('posts-container');
        // Input da barra de pesquisa
        const searchInput = document.getElementById('search-input');
        // Links das categorias
        const categoryLinks = document.querySelectorAll('.category-link');

        /**
         * Função para renderizar os posts na página.
         * @param {Array} posts - Array de objetos de posts a serem exibidos.
         */
        function renderPosts(posts) {
            postsContainer.innerHTML = ''; 

            if (posts.length === 0) {
                postsContainer.innerHTML = '<p class="text-center text-gray-600 text-xl col-span-full">Nenhum post encontrado para esta pesquisa/categoria.</p>';
                return;
            }

            posts.forEach(post => {
                // Cria o elemento div para o card do post
                const postCard = document.createElement('div');
                // Adiciona classes Tailwind para estilização do card
                postCard.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'hover:shadow-xl', 'transition-shadow', 'duration-300');

                // Popula o HTML interno do card com os dados do post
                postCard.innerHTML = `
                    <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <span class="inline-block bg-accent-blue text-primary-light text-xs font-semibold px-3 py-1 rounded-full mb-2">${post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ')}</span>
                        <h3 class="text-xl font-bold text-primary-dark mb-2">${post.title}</h3>
                        <p class="text-gray-700 text-base mb-4">${post.excerpt}</p>
                        <a href="#" class="text-accent-blue font-semibold hover:underline">Leia Mais &rarr;</a>
                    </div>
                `;
                // Adiciona o card ao container de posts
                postsContainer.appendChild(postCard);
            });
        }

        /**
         * Filtrar posts com base no termo de pesquisa.
         * @param {string} searchTerm - Pesquisa digitada pelo usuário.
         * @param {string} currentCategory - Categoria atualmente selecionada (para manter o filtro).
         */
        function filterPosts(searchTerm, currentCategory) {
            const filtered = postsData.filter(post => {
                const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = currentCategory === 'all' || post.category === currentCategory;
                return matchesSearch && matchesCategory;
            });
            renderPosts(filtered);
        }

        let activeCategory = 'all';

        //evento de busca do user
        searchInput.addEventListener('input', (event) => {
            filterPosts(event.target.value, activeCategory);
        });

        // Links de categoria para filtrar os posts
        categoryLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 

               
                categoryLinks.forEach(l => l.classList.remove('font-semibold', 'text-accent-blue'));
                
                link.classList.add('font-semibold', 'text-accent-blue');

                activeCategory = link.dataset.category; 
                filterPosts(searchInput.value, activeCategory);
            });
        });

        // Renderiza  os posts quando a pagina carrega pela primeira vez
        document.addEventListener('DOMContentLoaded', () => {
            renderPosts(postsData);
        });

        