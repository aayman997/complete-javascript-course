import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/*	Global State Of The App
* -	Search Object
* -	Current Recipe Object
* -	Shopping List Object
* -	Liked Recipes
*/
const state = {};
const controlSearch = async () => {
	//	1)	Get The Query From The View
	const query = searchView.getInput();	//TODO
	if (query) {
		//	2)	New Search Object And Add The State
		state.search = new Search(query);
		//	3)	Prepare UI For Results
		searchView.clearInput();
		searchView.clearResults();
		//	4)	Search For Recipes
		await state.search.getResults();
		//	5)	Render Results On UI
		searchView.renderResults(state.search.result);
	}
};
elements.searchForm.addEventListener('submit', e => {
	e.preventDefault();
	controlSearch().then();
});
