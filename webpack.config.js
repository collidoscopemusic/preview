var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/javascripts/root.jsx",
  output: {
    path: path.join(__dirname, '/src/javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        },
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx" ]
  }
};
