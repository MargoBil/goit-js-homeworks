const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'production',
  entry: './index.js',
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
    new CleanWebpackPlugin(), new HtmlWebpackPlugin({template: './index.html'}),
    new MiniCssExtractPlugin({filename: 'style.css'})
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4040,
    stats: 'errors-only'
  },
  devtool: 'cheap-eval-source-map'
};