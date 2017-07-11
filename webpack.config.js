var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "cheap-eval-source-map",
  
  entry: {
    index: './src/index.js'
  },
   plugins: [
     new HTMLWebpackPlugin({
        title: 'Web Chat',
        template: './src/index.html',
     }),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'common' // Specify the common bundle's name.
     })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  module: {
      loaders: [
       { 
           test: /\.js$/, 
           exclude: /node_modules/, 
           loaders: [
               'babel-loader'
           ]
          // loader: "" 
       },
       {
         test: /\.css$/,
         loaders: [
           'style-loader',
           'css-loader'
         ]
       },
       {
          test: /\.(png|svg|jpg|gif)$/,
          loaders: [
            'file-loader'
          ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         loaders: [
           'file-loader'
         ]
       }
     ]
   },
   
 
};