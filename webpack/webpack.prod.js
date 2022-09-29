/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config();
const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  mode: 'production',
  port: process.env.PORT,
  output: {
    clean: true,
    publicPath: process.env.PUBLIC_PATH,
    chunkFilename: '[id].[contenthash].js'
  }
});
