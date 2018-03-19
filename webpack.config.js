// process.env.BABEL_ENV = 'development';
// process.env.NODE_ENV = 'development';
var path = require('path');
var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
      rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(css|scss)$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              // {
              //   loader: 'sass-loader'
              // },
              // {
              //   loader: 'postcss-loader',
              //   options: {
              //     // Necessary for external CSS imports to work
              //     // https://github.com/facebookincubator/create-react-app/issues/2677
              //     ident: 'postcss',
              //     plugins: () => [
              //       require('postcss-flexbugs-fixes'),
              //       autoprefixer({
              //         browsers: [
              //           '>1%',
              //           'last 4 versions',
              //           'Firefox ESR',
              //           'not ie < 9' // React doesn't support IE8 anyway
              //         ],
              //         flexbox: 'no-2009'
              //       })
              //     ]
              //   }
              // }
            ]
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true,
                },
              },
            ],
          }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
