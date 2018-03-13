var webpack = require('webpack');

var environments = {
  development: {
    context: __dirname + '/src',
    entry: {
      javascript: './app.js',
      html: './index.html',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
        },
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
          loader: 'url-loader?limit=100000',
        },
        {
          test: /\.(jpeg|jpg|png|gif|svg)$/i,
          loaders: [
            'url-loader?limit=10000',
            'img-loader'
          ]
        },
      ]
    },
    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    },
    devServer: {
      port: 9000
    }
  },

  production: {
    context: __dirname + '/src',
    entry: {
      javascript: './app.js',
      html: './index.html',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel'],
        },
        {
          test: /\.html$/,
          loader: 'file?name=[name].[ext]',
        },
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
          loader: 'url-loader?limit=100000',
        },
        {
          test: /\.(jpeg|jpg|png|gif|svg)$/i,
          loaders: [
            'url-loader?limit=10000',
            'img-loader'
          ]
        },
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    output: {
      filename: 'app.js',
      path: __dirname + '/dist',
    }
  }
};

module.exports = environments[process.env.NODE_ENV] || environments.development;
