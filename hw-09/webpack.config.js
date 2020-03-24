const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = env => webpackMerge({
  context: path.resolve(__dirname, 'src'),
  mode: env.mode,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      { test: /\.js$/, exclude: /node_modules/, use:['babel-loader']},
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path]/[name].[ext]',
              limit: 5000
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      { test: /\.hbs$/, use: "handlebars-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), new FriendlyErrorsWebpackPlugin(), new ProgressBarPlugin()
  ]
}, loadModeConfig(env));