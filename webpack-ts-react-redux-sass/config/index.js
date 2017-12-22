const config = Object.assign({}, require('./default.conf.js'), require('./'+ (TRX_CONFIGSET || 'production') + '.conf.js'));

export const TRX_ENDPOINT = config.TRX_ENDPOINT;
