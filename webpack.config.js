/* global __dirname */

var path = require('path');

var webpack = require('webpack');


module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: __dirname,
        library: 'session',   
        filename: 'build/jquery-crate.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: { 
                presets: ["stage-3"],
                plugins: [
                  ["transform-es2015-modules-commonjs"],
                  ["babel-plugin-transform-builtin-extend", {
                      "globals": ["Map"]
                  }],
                  ["transform-class-properties"]
              ]
                }
          }
        }
      ]
      },
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};