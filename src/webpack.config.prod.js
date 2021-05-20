const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(['js', 'style'], {
      root: path.join(__dirname, '../'),
      verbose: true,
      dry: false,
    }),
  ],
})
