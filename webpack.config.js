const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './resources/assets/js/admin/index.js',
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(['public/js/admin']),
	],
	output: {
		filename: 'reactApp.js',
		path: path.resolve(__dirname, 'public/js/admin')
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				cacheDirectory: true,
				presets: ['es2015', 'react', ],
			}
		}, {
			test: /\.html$/,
			loader: "file?name=[name].[ext]"
		}]
	}
};