var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var Sass = require('sass');

module.exports = function loaderConfig(previousWebpackConfig, buildEnvConfig) {
    return Object.assign(previousWebpackConfig, {
        module: {
            rules: [{
                test: /\.tsx?$/,
                include: buildEnvConfig.dir.src,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        // we're using ts-checker plugin for faster type checks
                        transpileOnly: true
                    }
                }]
            }, {
                enforce: 'pre',
                test: /\.js$/,
                use: ['source-map-loader'],
                exclude: [/node_modules/, /build/, /__test__/]
            }, {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: Sass
                        }
                    }
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: 'fonts/[name].[ext]'
                    }
                }]
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: 'images/[name].[ext]'
                    }
                }]
            }, {
                test: /\.(mp4)$/i,
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: 'videos/[name].[ext]'
                    }
                }]
            }, {
                test: /\.ico$/,
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]'
                    }
                }]
            }, {
                test: /\.json$/,
                type: 'javascript/auto',
                use: [{
                    loader: 'file-loader',
                    query: {
                        name: 'json/[name].[ext]'
                    }
                }]
            }]
        }
    })
};

