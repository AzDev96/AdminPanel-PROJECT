import path from 'path'
import webpack from 'webpack'
// типи 
import { BuildPath } from './config/build/types/config';

// Дикомпозици
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

// Пути 
const paths:BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',             // Production or Develoment
    paths: paths,
    isDev
})

module.exports = config