'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var FaviconPlugin = require('favicons-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: path.join(__dirname, 'src/app.js')
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlPlugin({
            template: path.join(__dirname, 'src/index.html.ejs'),
            title: "This title is set in webpack.config.js and should be changed."
        }),
        new FaviconPlugin(path.join(__dirname, 'src/img/favicon.png'))
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file'}
        ]
    }
};
