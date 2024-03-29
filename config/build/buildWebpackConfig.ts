import webpack from 'webpack'
import path from 'path'
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoadres } from './buildLoadres';
import { buildresolvers } from './buildresolvers';
import { bildDevServer } from './bildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options
    return {
        mode: mode,  // development
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoadres(options),
        },
        resolve: buildresolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? bildDevServer(options) : undefined
    }
}
