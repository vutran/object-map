const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.join(__dirname, 'index.js'),
  ],
  output: {
    publicPath: '/',
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
  resolve: {
    alias: {
      'es6-module-starter': path.resolve('src'),
    },
  },
};
