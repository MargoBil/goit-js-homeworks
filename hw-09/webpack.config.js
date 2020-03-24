const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loadModeConfig = env => require(`./build-utils/${env.mode}.config`)(env);
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
      { test: /\.js$/, exclude: /node_modules/, use:['babel-loader']}
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}, loadModeConfig(env));