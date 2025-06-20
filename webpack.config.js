const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|jpg|jpeg|png|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      minify: true,
    }),
    new CleanWebpackPlugin(),
    new EslintPlugin({ extensions: 'js' }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicon.png',
      favicons: {
        icons: {
          favicons: true,
          appleIcon: false,
          appleStartup: false,
          android: false,
          firefox: false,
          windows: false,
          yandex: false,
          coast: false,
        },
      },
    }),
  ],
  optimization: {
    minimize: true,
  },
};
