const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/app.js'),
  output: {
    path: path.join(__dirname, '/public/lib/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
