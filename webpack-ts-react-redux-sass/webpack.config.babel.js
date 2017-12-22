import path from 'path';

// config imports
import entryOutputConfig from './build/entryOutputConfig';
import devToolsConfig from './build/devToolsConfig';
import pluginConfig from './build/pluginConfig';
import moduleConfig from './build/loaderConfig';
import resolveConfig from './build/resolveConfig';
import definedGlobalsConfig from './build/definedGlobalsConfig';

const base = (env) => {
    let buildEnvConfig = Object.assign({
        dir: {
            src: path.resolve('./', 'src'),
            dist: path.resolve('./', 'dist', 'assets'),
            root: path.resolve('./')
        },
        dev: false,
        configset: 'production',
        appContextRoot: '/'
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

export default base;
