const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
module.exports = env => ({
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
    ],
  },
  plugins: [new HtmlWebpackPlugin ({template: './index.html'})],
  devServer: {
    contentBase: path.join (__dirname, 'dist'),
    historyApiFallback: true,
    clientLogLevel: 'warning',
    compress: true,
    port: 4040,
    stats: 'errors-only',
  },
});
