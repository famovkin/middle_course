/* eslint-disable no-param-reassign */
import path from 'path';
import webpack from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');

  if (config.module && config.module.rules) {
    config.module.rules.push(buildCssLoader(true));
    config.module.rules = config.module.rules.map((rule) => {
      if (rule && rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
  }

  config.plugins?.push(
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  );

  return config;
};
