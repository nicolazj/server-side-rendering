const webpack = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = function override(config, env) {
  config.plugins.unshift(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest'],
      filename: 'static/js/[name].js',
      minChunks: Infinity,
    })
  );

  config.plugins.push(
    new ReactLoadablePlugin({
      filename: './build/react-loadable.json',
    })
  );

  return config;
};
