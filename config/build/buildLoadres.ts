import webpack from 'webpack'

export function buildLoadres(): webpack.RuleSetRule[] {
    const typescriptLoadre = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        typescriptLoadre
    ]
}