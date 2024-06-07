const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@styled': path.resolve(__dirname, 'src/styled'),
        '@redux': path.resolve(__dirname, 'src/redux'),
        '@routes': path.resolve(__dirname, 'src/routes'),
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource'
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      historyApiFallback: true,
      hot: true,
      open: true,
      port: 3000
    },
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin()],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: path.resolve(__dirname, './src/assets/icons/favicon.svg'),
      }),
      new Dotenv()
    ]
  };
};
