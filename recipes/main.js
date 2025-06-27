import recipes from './recipes.mjs';

function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

function getRandomRecipe (recipeList) {
    const recipeListLength = recipeList.length;
    const randomNum = randomNumber(recipeListLength);
    return recipeList[randomNum];
}

function recipeTemplate(recipe) {
	return `<div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.description}">
            <div class="recipe-content">
            ${tagsTemplate(recipe.tags)}
            <h3 id="recipe-name">${recipe.name}</h3>
	        ${ratingTemplate(recipe.rating)}
            <p id="recipe-description">${recipe.description}</p>
            </div>
        </div>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = '';

    for (const tag of tags) {
        html +=`<p class="recipe-tag">${tag}</p>`
    }
	return html;
}

function ratingTemplate(rating) {
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
    for (var i = 0; i < 5; i++) {
        if (i < rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }

	html += `</span>`
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const element = document.querySelector('.recipes');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let html = '';
	// Set the HTML strings as the innerHTML of our output element.
    for (const recipe of recipeList) {
        html += recipeTemplate(recipe);
    }
    element.innerHTML = html;
}

function init() {
  const selectedRecipe = getRandomRecipe(recipes)
  renderRecipes([selectedRecipe]);
}
init();


function filterRecipes(query) {

    const filteredRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.find((item) => item.toLowerCase().includes(query)) ||
        recipe.recipeIngredient.find((item) => item.toLowerCase().includes(query))
    });

    const sortedRecipes = filteredRecipes.sort((a,b) => a.name.localeCompare(b.name));

    return sortedRecipes;

}


const searchButton = document.getElementById('search-button');

searchButton.addEventListener("click", function searchHandler (e) {
        e.preventDefault();

        const searchQuery = document.getElementById('searchbar').value.toLowerCase();

        const filteredRecipes = filterRecipes(searchQuery);

        renderRecipes(filteredRecipes);
});