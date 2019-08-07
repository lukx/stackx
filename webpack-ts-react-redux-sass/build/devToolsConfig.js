module.exports = function devToolsConfig(previousWebpackConfig, buildEnvConfig) {

    const devServerConfig = buildEnvConfig.dev ? { // or empty object, in case you missed the : {} in a couple of lines
        devServer: {
            clientLogLevel: 'none',
            https: true,
            historyApiFallback: {
                index: ''
            },
            stats: 'minimal',
            watchOptions: {
                ignored: '/node_modules/'
            }
        }
    } : {};

    const devToolConfig = {
        devtool: buildEnvConfig.dev ? 'inline-source-map' : 'source-map',
        mode: buildEnvConfig.dev ? 'development' : 'production'
    };


    return Object.assign(previousWebpackConfig, devServerConfig, devToolConfig);
};