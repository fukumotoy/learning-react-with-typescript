/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, { mode }) => {
  /* eslint-disable no-underscore-dangle */
  const __IS_PRODUCTION__ = mode === 'production';
  const __IS_DEVELOPMENT__ = mode === 'development';
  /* eslint-enable no-underscore-dangle */

  const config = {
    mode,

    devtool: __IS_DEVELOPMENT__ ? 'cheap-module-source-map' : false,

    entry: path.join(__dirname, './src/index.tsx'),

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },

    module: {
      rules: [
        // TypeScript
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [
                ['@babel/plugin-proposal-class-properties', { loose: true }],
              ],
            },
          },
        },

        // Sass
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                ident: 'postcss',
                plugins: () => [
                  /* eslint-disable global-require */
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    autoprefixer: {
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  }),
                  /* eslint-enable global-require */
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
      }),
    ],
  };

  return config;
};
