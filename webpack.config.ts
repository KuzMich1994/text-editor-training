import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const MODE = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = MODE === 'development';
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  return buildWebpackConfig({
    mode: MODE,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  });
};
