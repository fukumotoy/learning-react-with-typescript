const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
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
      {
        loader: require.resolve('react-docgen-typescript-loader')
      },
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
