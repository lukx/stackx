
module.exports = function resolveConfig(previousWebpackConfig, buildEnvConfig) {
    return Object.assign(previousWebpackConfig, {
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss', '.woff', 'json'],
            modules: [buildEnvConfig.dir.root, 'node_modules'],
            alias: {
                src: buildEnvConfig.dir.src
            }
        }
    });
};

