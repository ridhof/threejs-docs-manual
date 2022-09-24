// @ts-check
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/** @type { import("webpack").Configuration } */
const config = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Three.js Management - Learning'
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
