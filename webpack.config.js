var webpack = require("webpack");
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		admin: './resources/assets/js/admin/index.js',
		lib: './resources/assets/js/lib/index.js'
	},
	devtool: 'inline-source-map',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public/js')
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				cacheDirectory: true,
				presets: ['es2015', 'react', 'stage-2'],
				plugins: ["transform-decorators-legacy"]
			}
		}, {
			test: /\.html$/,
			loader: "file?name=[name].[ext]"
		}, {
			test: /\.css$/,
			loaders: [
				'style-loader',
				'css-loader?modules'
			]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['public/js']),
	],
};