import path from 'path'
import webpack from 'webpack'
// типи 
import { BuildEnv, BuildPath } from './config/build/types/config';

// Дикомпозици
import { buildWebpackConfig } from './config/build/buildWebpackConfig';


module.exports = (env: BuildEnv) => {
    // Пути 
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,             // Production or Develoment
        paths: paths,
        isDev,
        port: PORT
    })

    return config
}