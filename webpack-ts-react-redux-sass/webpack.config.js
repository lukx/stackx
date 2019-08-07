const path = require('path');

// config imports
const entryOutputConfig = require('./build/entryOutputConfig');
const devToolsConfig = require('./build/devToolsConfig');
const pluginConfig = require('./build/pluginConfig');
const moduleConfig = require('./build/loaderConfig');
const resolveConfig = require('./build/resolveConfig');
const definedGlobalsConfig = require('./build/definedGlobalsConfig');

const base = (env) => {
    let buildEnvConfig = Object.assign({
        dir: {
            src: path.resolve('./', 'src'),
            dist: path.resolve('./', 'dist', 'assets'),
            root: path.resolve('./')
        },
        dev: false, // dev will trigger logging verbosity, minification etc
        configset: 'production' // configset defines values like api endpoints, titles, etc, resolves to a file in ./config/*.conf.js
    }, env);

    let webpackConfig = {};

    webpackConfig = entryOutputConfig(webpackConfig, buildEnvConfig);
    webpackConfig = resolveConfig(webpackConfig, buildEnvConfig);
    webpackConfig = devToolsConfig(webpackConfig, buildEnvConfig);
    webpackConfig = pluginConfig(webpackConfig, buildEnvConfig);
    webpackConfig = moduleConfig(webpackConfig, buildEnvConfig);
    webpackConfig = definedGlobalsConfig(webpackConfig, buildEnvConfig);

    return webpackConfig;
};

module.exports = base;
