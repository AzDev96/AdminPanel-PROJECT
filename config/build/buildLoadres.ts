import webpack from 'webpack'
import { BuildOptions } from './types/config';
import { BuildCssLoader } from './loaders/BuildCssLoader';

export function buildLoadres({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
    const cssLoader = BuildCssLoader(isDev)
    const typescriptLoadre = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        typescriptLoadre,
        cssLoader,
        fileLoader,
        svgLoader
    ]
}