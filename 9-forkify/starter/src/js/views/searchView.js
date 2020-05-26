import {elements} from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
	elements.searchInput.value = '';
};
export const clearResults = () => {
	elements.searchResList.innerHTML = '';
	elements.searchResPages.innerHTML = '';
};

export const highLightSelected = id => {
	const resultsArr = Array.from(document.querySelectorAll('.results__link'));
	resultsArr.forEach(el => {
		el.classList.remove('results__link--active');
	});
	document.querySelector(`a[href*="#${id}"]`).classList.add('results__link--active');
};
/*
//	'Pasta With Tomato And Spinach'
*	Acc:	0 / acc + cur.length = 5 / newTitle = ['Pasta']
*	Acc:	5 / acc + cur.length = 9 / newTitle = ['Pasta', 'With']
*	Acc:	9 / acc + cur.length = 15 / newTitle = ['Pasta', 'With', 'Tomato']
*	Acc:	15 / acc + cur.length = 18 / newTitle = ['Pasta', 'With', 'Tomato']
*	Acc:	18 / acc + cur.length = 24 / newTitle = ['Pasta', 'With', 'Tomato']
*/
const limitRecipeTitle = (title, limit = 20) => {
	const newTitle = [];
	if (title.length > limit) {
		title.split(' ').reduce((acc, cur) => {
			if (acc + cur.length <= limit) {
				newTitle.push(cur);
			}
			return acc + cur.length;
		}, 0);
		//	Return The Result
		return `${newTitle.join(' ')}...`;
	}
	return title;
};
const renderRecipe = recipe => {
	const markup = `
	<li>
		<a class='results__link' href='#${recipe.recipe_id}'>
			<figure class='results__fig'>
				<img src='${recipe.image_url}' alt='${recipe.title}'>
			</figure>
			<div class='results__data'>
				<h4 class='results__name' title='${recipe.title}'>${limitRecipeTitle(recipe.title)}</h4>
				<p class='results__author'>${recipe.publisher}</p>
			</div>
		</a>
	</li>
	`;
	elements.searchResList.insertAdjacentHTML(`beforeend`, `${markup}`);

};
//	Type: 'Prev' Or 'Next'
const createButton = (page, type) => `
		<button class='btn-inline results__btn--${type}' data-goto='${type === 'prev' ? page - 1 : page + 1}'>
			<span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
			<svg class='search__icon'>
                <use href='img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}'></use>
			</svg>
		</button>
`;
const renderButtons = (page, numResults, resPerPage) => {
	const pages = Math.ceil(numResults / resPerPage);
	let button;
	if (page === 1 && pages > 1) {
		//	Button To Go To Next Page
		button = createButton(page, 'next');
	} else if (page < pages) {
		//	Both Button
		button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
	} else if (page === pages && pages > 1) {
		//	Button To Go Previous Page
		button = createButton(page, 'prev');
	}
	elements.searchResPages.insertAdjacentHTML('afterbegin', `${button}`);
};
export const renderResults = (recipes, page = 1, resPerPage = 10) => {
	//	Render Results Of Current Page
	const start = (page - 1) * resPerPage;
	const end = page * resPerPage;
	recipes.slice(start, end).forEach(renderRecipe);
	//	Render Pagination
	renderButtons(page, recipes.length, resPerPage);
};
