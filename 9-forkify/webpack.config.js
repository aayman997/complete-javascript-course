const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const primaryPath = `./starter/`;
module.exports = {
	entry: [`${primaryPath}src/js/index.js`],
	output: {
		path: path.resolve(__dirname, `${primaryPath}dist`),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: `${primaryPath}dist/`
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: `index.html`,
			template: `${primaryPath}src/index.html`
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
