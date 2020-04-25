import Search from './models/Search';
import * as searchView from './views/searchView';
import {clearLoader, elements, renderLoader} from './views/base';
import Recipe from './models/Recipe';

/*	Global State Of The App
* -	Search Object
* -	Current Recipe Object
* -	Shopping List Object
* -	Liked Recipes
*/
const state = {};
//	Search Controller
const controlSearch = async () => {
	//	1)	Get The Query From The View
	const query = searchView.getInput();
	// const query = 'pizza';
	if (query) {
		//	2)	New Search Object And Add The State
		state.search = new Search(query);
		//	3)	Prepare UI For Results
		searchView.clearInput();
		searchView.clearResults();
		renderLoader(elements.searchRes);
		try {
			//	4)	Search For Recipes
			await state.search.getResults();
			//	5)	Render Results On UI
			clearLoader();
			searchView.renderResults(state.search.result);
		} catch (err) {
			alert(`Error Processing Recipe!  😥😞😭🙊`);
			clearLoader();
		}

	}
};
elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch().then();
});

elements.searchResPages.addEventListener('click', e => {
	const btn = e.target.closest('.btn-inline');
	if (btn) {
		const goToPage = parseInt(btn.dataset.goto, 10);
		searchView.clearResults();
		searchView.renderResults(state.search.result, goToPage);
	}
});

//	Recipe Controller
const controlRecipe = async () => {
	//	Get ID From URL
	const id = window.location.hash.replace('#', '');
	console.log(id);
	if (id) {
		//Prepare UI For Changes

		//	Create New Recipe
		state.recipe = new Recipe(id);
		try {
			//	Get Recipe Data And Parse Ingredients
			await state.recipe.getRecipe().then();
			console.log(state.recipe.ingredients);
			state.recipe.parseIngredients();
			//	Calculate Servings And Time
			state.recipe.calcTime();
			state.recipe.calcServings();
			//	Render Recipe
			console.log(state.recipe);
		} catch (err) {
			alert(`Error Processing Recipe!  😥😞😭🙊`);
		}
	}
};
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
