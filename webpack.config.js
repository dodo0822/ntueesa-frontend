var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var APP = __dirname + '/app';
var BUILD = __dirname + '/build';

var entry = {};
var output = {};

var plugins = [ ];

/*switch(process.env.NODE_ENV) {
	case 'production':*/
		entry = {
			app: [ 'babel-polyfill', './index.js' ]
		};
		plugins.push(new CopyWebpackPlugin([{
			from: 'index.html',
			to: '../build/'
		}]));
		plugins.push(new webpack.ProvidePlugin({
        	$: 'jquery',
        	jQuery: 'jquery'
        }));
		output = {
			path: BUILD,
			filename: 'bundle.js'
		};
		/*break;
	case 'development':
	default:
		entry = {
			app: [ 'babel-polyfill', 'webpack/hot/dev-server', './index.js' ]
		};
		output = {
			path: APP,
			filename: 'bundle.js'
		};
		plugins.push(new webpack.HotModuleReplacementPlugin());
		break;
}*/

module.exports = {
	context: APP,
	entry: entry,
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015!jshint-loader?esversion=6',
				exclude: /node_modules|bower_components/
			},
			{
				test: /\.(woff2?|svg)$/,
				loader: 'url?limit=10000'
			},
			{
				test: /\.(ttf|eot)$/,
				loader: 'file'
			},
			{
				test: /\.html$/,
				loader: 'raw'
			}
		]
	},
	plugins: plugins,
	output: output
};
