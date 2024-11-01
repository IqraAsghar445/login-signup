let currentPage = 1;
const cardsPerPage = 8; // Total number of cards displayed per page
let recipes = [];

function displayRecipes() {
    fetch('https://dummyjson.com/recipes') 
        .then(response => response.json())
        .then(data => {
            recipes = data.recipes || [];
            renderPage(currentPage);
            setupPagination();
        })
        .catch(error => console.error('Error fetching recipes:', error));
}

function renderPage(page) {
    const containerRecipes = document.getElementById('Recipies-products');
    containerRecipes.innerHTML = ''; // Clear previous cards

    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const paginatedItems = recipes.slice(start, end);

    paginatedItems.forEach(item => {
        const card = `
            <div class="col-lg-3 col-md-4 col-sm-6 mt-3 recipe-card" data-name="${item.name}">
                <div class="card text-center" style="width: 18rem;">
                    <img src="${item.image}" class="card-img card-img-top img-fluid" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <a href="#" class="btn btn-warning">Watch Recipe</a>
                    </div>
                </div>
            </div>`;
        containerRecipes.innerHTML += card;
    });

    updatePagination();
}

function setupPagination() {
    const totalPages = Math.ceil(recipes.length / cardsPerPage);
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');

    prevButton.onclick = function() {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    };

    nextButton.onclick = function() {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    };

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(recipes.length / cardsPerPage);
    document.getElementById('prevPage').style.display = currentPage === 1 ? 'none' : 'block';
    document.getElementById('nextPage').style.display = currentPage === totalPages ? 'none' : 'block';
}

displayRecipes();
