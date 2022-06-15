const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
  output: {
    publicPath: '/',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new ModuleFederationPlugin({
      name: 'details',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Details': './src/containers/Details/index.jsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/favicon.ico' },
        { from: 'public/logo192.png' },
        { from: 'public/logo512.png' },
        { from: 'public/manifest.json' },
        { from: 'public/serve.json' },
        { from: 'public/robots.txt' },
        {
          from: 'public/assets/back_icon.webp',
          to: 'assets/',
        },
      ],
    }),
  ],
};
