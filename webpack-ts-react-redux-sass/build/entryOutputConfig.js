
module.exports = function entryOutputConfig(previousWebpackConfig, buildEnvConfig) {
    return Object.assign(previousWebpackConfig, {
        entry: {
            app: ['core-js/stable', buildEnvConfig.dir.src + '/app.tsx']
        },
        output: {
            path: buildEnvConfig.dir.dist,
            filename: buildEnvConfig.dev ? '[name].bundle.js' : '[name].[chunkhash].js',
            publicPath: buildEnvConfig.appContextRoot
        },
        target: 'web'
    });
};

