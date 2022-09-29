/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config();
const common = require('./webpack.common');

module.exports = common({
  mode: 'production',
  port: process.env.PORT,
  publicPath: `${process.env.PUBLIC_PATH}:${process.env.PORT}`
});
