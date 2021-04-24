const path = require('path');
const webpack = require('webpack');

const regex = /firebase\/(app|firestore)/;

module.exports = {
  entry: {  server: './server.ts' },
  resolve: { extensions: ['.js', '.ts'] },
  target: 'node',
  mode: 'none',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/node_modules/, function(context, request, callback) {

    // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
    // https://github.com/firebase/firebase-js-sdk/issues/1455#issuecomment-455712500
    if(regex.test(request)) {
      return callback(null, 'commonjs ' + request);
    }
    callback();
  }],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: "./resources/assets/ts/tsconfig.server.json"
        }
      }
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    ),
    // workaround for https://github.com/angular/angular-cli/issues/9975
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)common(\\|\/)locales/,
      /(de-AT|de-CH|de|en-AU|en-CA|en-GB|en-IE|en-NZ|en|es-CL|es|es-MX|fr-BE|fr-CA|fr|it|nl-BE|nl|pl|pt)$/
    )
  ]
}
