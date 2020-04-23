import axios from 'axios';
// const res = await axios(`${PROXY}http://food2fork.com/api/search?key=${KEY}&q=${this.query}`);
//	=>	TODO const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);

/**********	Recipe.js **********/
//	const res = await axios(`${PROXY}http://food2fork.com/api/get?key=${KEY}&rId=${this.id}`);
// =>	TODO const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		try {
			const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
			this.result = res.data.recipes;
			// console.log(this.result);
		} catch (error) {
			alert(error);
		}
	}
}
