/* config-overrides.js */
const path = require('path');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    Object.assign(config, {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src')
            }
        }
    })
    return config;
  }