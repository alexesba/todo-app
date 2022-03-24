const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const path = require('path');
module.exports = (env, argsv) => {
  const { mode } = argsv;

  const isProduction = mode === 'production';

  const jsxConfigRule = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-react',
          { runtime: 'automatic' }
        ],
      ]
    }
  }

  const cssConfigRule = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader"],
  }
  return {
    entry: path.resolve(__dirname,'src/index.jsx'),
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    module: {
      rules: [
        jsxConfigRule,
        cssConfigRule
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html')}),
      !isProduction && new ReactRefreshWebpackPlugin(),

    ].filter(Boolean),
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      hot: true
    }

  }
}
