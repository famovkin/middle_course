import { BuildOptions } from '../types/config';

export const buildBabelLoaders = ({ isDev }: BuildOptions) => ({
  test: /\.(js|jsx|ts)/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }],
        isDev && require.resolve('react-refresh/babel'),
      ].filter(Boolean),
    },
  },
});
