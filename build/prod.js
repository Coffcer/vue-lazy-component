var path = require('path')
var config = require('./base');
var webpack = require('webpack')

module.exports = Object.assign({}, config, {
    entry: './src/vue-lazy-component.js',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'vue-lazy-component.js',
      library: ['vue-lazy-component'],
      libraryTarget: 'umd'
    },
    devtool: false,
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin()
    ]
});