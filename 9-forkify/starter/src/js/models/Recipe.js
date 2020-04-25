import axios from 'axios';

export default class Recipe {
	constructor(id) {
		this.id = id;
	}

	async getRecipe() {
		try {
			const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
			this.title = res.data.recipe.title;
			this.author = res.data.recipe.publisher;
			this.img = res.data.recipe.image_url;
			this.url = res.data.recipe.source_url;
			this.ingredients = res.data.recipe.ingredients;
		} catch (error) {
			console.log(error);
			alert(`Some Thing Went Wrong 😥😞😭🙊`);
		}
	}

	calcTime() {
		// Assuming That We Need 15 Min For Each 3 Ingredients
		const numIng = this.ingredients.length;
		const periods = Math.ceil(numIng / 3);
		this.time = periods * 15;
	}

	calcServings() {
		this.servings = 4;
	}

	parseIngredients() {
		const unitLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
		const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
		this.ingredients = this.ingredients.map(el => {
			//	1) Uniform units
			let ingredient = el.toLowerCase();
			unitLong.forEach((unit, i) => {
				ingredient = ingredient.replace(unit, unitsShort[i]);
			});
			//	2) Remove Parentheses
			ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
			//	3)	Parse Ingredients Into Count, Unit And Ingredients
			const arrIng = ingredient.split(' ');
			const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));
			let objIng;
			if (unitIndex > -1) {
				//	There Is A Unit
				//	Ex. 4 1/2 Cups, arrCount Is [4, 1/2]	--> eval('4+1/2')	--> 4.5
				//	Ex. 4 Cups, arrCount Is [4]
				const arrCount = arrIng.slice(0, unitIndex);
				let count;
				if (arrCount.length === 1) {
					count = eval(arrIng[0].replace('-', '+'));
				} else {
					count = eval(arrIng.slice(0, unitIndex).join('+'));
				}
				objIng = {
					count,
					unit: arrIng[unitIndex],
					ingredient: arrIng.slice(unitIndex + 1).join(' ')
				};

			} else if (parseInt(arrIng[0], 10)) {
				//	There Is No Unit But First Element Is A Number
				objIng = {
					count: parseInt(arrIng[0], 10),
					unit: '',
					ingredient: arrIng.slice(1).join(' ')
				};
			} else if (unitIndex === -1) {
				//	There Is No Unit And No Umber In 1st Position
				objIng = {
					count: 1,
					unit: '',
					ingredient
				};
			}
			return objIng;
		});
	}
}
