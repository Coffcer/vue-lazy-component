var webpackConf = require('../build/webpack.base.config');

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha'],
        reporters: ['spec'],
        files: ['./index.js'],
        preprocessors: {
          './index.js': ['webpack']
        },
        singleRun: true
    })
}