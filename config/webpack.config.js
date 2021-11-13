// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const commonPlugins = require('./plugins');
const commonLoaders = require('./loaders');
const commonBabelOptions = require('./babelOptions');
const generalConfig = require('./generalConfigs');
const paths = require('./paths');

// eslint-disable-next-line func-names
module.exports = function (arg) {
   const plugins = [
      ...commonPlugins,
      new HtmlWebPackPlugin({
         template: './public/index.html',
         filename: './index.html',
      }),
   ];


   const prodConf = {};

   let devConf = {};

   if (arg.mode === 'development') {
      devConf = {
         devtool: 'eval-source-map',
      };
   }

   return {
      mode: arg.mode,
      entry: './src/index.tsx',
      output: {
         path: path.resolve(__dirname, '../dist'),
         filename: 'react-typescript-boilerplate.js',
         chunkFilename: '[name].js',
      },
      devServer: {
         contentBase: paths.appPublic,
         compress: true,
         clientLogLevel: 'none',
         host: '0.0.0.0',
         public: `localhost:8080`,
         port: 8080,
         hot: true,
         quiet: true,
         overlay: true,
         disableHostCheck: true,
         watchContentBase: true,
      },
      ...generalConfig,
      ...prodConf,
      ...devConf,
      plugins,
      resolve: {
         extensions: ['.ts', '.tsx', '.js', '.json', '.svg', '.json'],
         alias: {
            '@': path.resolve(__dirname, '../src'),
         },
      },
      module: {
         rules: [
            ...commonLoaders,
            {
               test: /\.(ts|js)x?$/,
               include: [paths.appSrc],
               loader: require.resolve('babel-loader'),
               options: commonBabelOptions,
            },
         ],
      },
   };
};