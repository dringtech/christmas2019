const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
    contentBase: 'docs',
  },
  plugins: [
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      title: 'Merry Dringlemas 2018!',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new StyleExtHtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ '@babel/preset-env', {
                targets: '> 0.25%, not dead',
                useBuiltIns: 'entry',
              } ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
          { loader: 'image-webpack-loader' },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [ 'file-loader' ],
      },
      { test: /\.svg$/, loader: 'svg-inline-loader' },
    ],
  },
}
