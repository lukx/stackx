var webpack = require('webpack');
/**
 * Expose the configuration vars as globals.
 * @param previousWebpackConfig
 * @param buildEnvConfig
 */
module.exports = function getDefinedGlobals(previousWebpackConfig, buildEnvConfig) {
    if (!previousWebpackConfig.plugins) {
        previousWebpackConfig.plugins = [];
    }

    // if we absolutely have to, we can define global variables here that will be injected into the modules.
    const globals = {};


    previousWebpackConfig.plugins.push(new webpack.DefinePlugin(globals));

    return previousWebpackConfig;
};