import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import {clearLoader, elements, renderLoader} from './views/base';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';

/*	Global State Of The App
* -	Search Object
* -	Current Recipe Object
* -	Shopping List Object
* -	Liked Recipes
*/
const state = {};
window.state = state;

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
		recipeView.clearRecipe();
		renderLoader(elements.recipe);
		//	HighLight Selected Search Item
		if (state.search) searchView.highLightSelected(id);
		//	Create New Recipe
		state.recipe = new Recipe(id);
		try {
			//	Get Recipe Data And Parse Ingredients
			await state.recipe.getRecipe().then();
			state.recipe.parseIngredients();
			//	Calculate Servings And Time
			state.recipe.calcTime();
			state.recipe.calcServings();
			//	Render Recipe
			clearLoader();
			recipeView.renderRecipe(state.recipe);
		} catch (err) {
			alert(`Error Processing Recipe!  😥😞😭🙊`);
		}
	}
};
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

//	List Controller
const controlList = () => {
	//	Create A New List if There In None yet
	if (!state.list) state.list = new List();
	//	Add Each Ingredient To The List
	state.recipe.ingredients.forEach(el => {
		const item = state.list.addItem(el.count, el.unit, el.ingredient);
		listView.renderItem(item);
	});
};

//	Handle Delete And Update List Item Event
elements.shopping.addEventListener('click', e => {
	const id = e.target.closest('.shopping__item').dataset.itemid;
	//	Handle Delete Button
	if (e.target.matches('.shopping__delete,.shopping__delete *')) {
		//	Delete From State
		state.list.deleteItem(id);
		//	Delete From UI
		listView.deleteItem(id);
		//	Handle The Count Update
	} else if (e.target.matches('.shopping__count-value')) {
		const val = parseFloat(e.target.value, 10);
		state.list.updateCount(id, val);
	}
});

//	Like Controller
const controlLike = () => {
	if (!state.likes) state.likes = new Likes();
	const currentID = state.recipe.id;

	//	User Isn't Yet Like This Recipe
	if (!state.likes.isLiked(currentID)) {
		//	Add Like To The State
		const newLike = state.likes.addLike(
			currentID,
			state.recipe.title,
			state.recipe.author,
			state.recipe.img
		);
		//	Toggle The Like Button

		//	Add Like To The UI List
		console.log(state.likes);

		//	User Has Liked The Current Recipe
	} else {
		//	Remove Like To The State
		state.likes.deleteLike(currentID);
		//	Toggle The Like Button

		//	Remove Like From The UI List
		console.log(state.likes);
	}
};

//	Handling Recipe Button Clicks
elements.recipe.addEventListener('click', e => {
	if (e.target.matches('.btn-decrease, .btn-decrease *')) {
		//	Decrease Button Is Clicked
		if (state.recipe.servings > 1) {
			state.recipe.updateServings('dec');
			recipeView.updateServingsIngredients(state.recipe);
		}
	} else if (e.target.matches('.btn-increase, .btn-increase *')) {
		//	Increase Button Is Clicked
		state.recipe.updateServings('inc');
		recipeView.updateServingsIngredients(state.recipe);
	} else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
		//	Add Ingredients To Shopping List
		controlList();
	} else if (e.target.matches('.recipe__love,.recipe__love *')) {
		//	Like Controller
		controlLike();
	}
});
window.l = new List();
