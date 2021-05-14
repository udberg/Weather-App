const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode,
  entry: ['babel-polyfill', './src/index.js'],
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  experiments: {
    topLevelAwait: true,
  },
};
