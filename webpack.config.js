var path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/")
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: path.join(__dirname, "node_modules")
      }
    ]
  }
}