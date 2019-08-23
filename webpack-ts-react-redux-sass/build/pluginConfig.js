var path = require('path');
var webpack = require('webpack');

// plugin imports
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var TsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function addBasePlugins(plugins, buildEnvConfig) {

    plugins.push(new CopyWebpackPlugin([
        {
            from: path.resolve(buildEnvConfig.dir.src, 'web.config'),
            to: path.resolve(buildEnvConfig.dir.dist, 'web.config')
        }
    ]));

    plugins.push(new TsCheckerWebpackPlugin({
        tsconfig: path.resolve(buildEnvConfig.dir.root, 'tsconfig.json'),
        eslint: true
    }));

    plugins.push(new HtmlWebpackPlugin({
        template: path.resolve(buildEnvConfig.dir.src, 'index.ejs'),
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            keepClosingSlash: true
        },
        inject: true
    }));
    plugins.push(new MiniCssExtractPlugin({
        filename: buildEnvConfig.dev ? '[name].css' : '[name].[chunkhash].css',
        chunkFilename: '[id].[hash].css',
    }));
}


function addProdPlugins(plugins, buildEnvConfig) {
    plugins.push(new CleanWebpackPlugin(['dist'], {
        root: buildEnvConfig.dir.root
    }));
}

module.exports = function pluginConfig(previousWebpackConfig, buildEnvConfig) {
    if (!previousWebpackConfig.plugins) {
        previousWebpackConfig.plugins = [];
    }

    addBasePlugins(previousWebpackConfig.plugins, buildEnvConfig);

    if (!buildEnvConfig.dev) {
        addProdPlugins(previousWebpackConfig.plugins, buildEnvConfig);
    }

    return previousWebpackConfig;
};
