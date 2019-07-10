const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env, { mode }) => {
  const __IS_PRODUCTION__ = mode === 'production';
  const __IS_DEVELOPMENT__ = mode === 'development';

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
      ],
    },

    plugins: [
      new ForkTsCheckerWebpackPlugin(),
    ],
  };

  return config;
};
