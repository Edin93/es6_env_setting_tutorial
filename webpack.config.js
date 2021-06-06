const path = require('path'); // NodeJS module, to work with absolute paths.

module.exports = {
  entry: path.resolve(__dirname, 'src'), // which folder to look at for JS files to bundle
  output : { // where to generated the bundled code
    path: path.resolve(__dirname, 'dist'), // folder
    filename: 'bundle.js' // file
  },
  devServer: {
    hot: true, // to reload the server after code update
    port: 5000, // port on which the server is running
    contentBase: path.resolve(__dirname, 'dist') // the directory to serve from.
  },
  module: {
    rules: [ // an array of rules as objects
      { // configure babel on which files it should convert.
        test: /\.js$/, // to target all files that ends with '.js'
        exclude: /node_modules/, // exclude everything in the node_modules.
        use: ['babel-loader'] // the loaders used in this rule.
      }
    ]
  }
};
