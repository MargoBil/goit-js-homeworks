const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      { test: /\.js$/, exclude: /node_modules/, use:['babel-loader']},
      { test: /\.css$/, use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']},
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), new HtmlWebpackPlugin({template: './src/index.html'}),
    new MiniCssExtractPlugin({filename: 'style.css'})
  ],
  devServer: {
    port: 4040
  },
  devtool: 'cheap-eval-source-map'
};