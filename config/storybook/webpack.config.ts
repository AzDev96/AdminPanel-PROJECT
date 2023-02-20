import webpack from 'webpack'
import path from 'path'
import { BuildPath } from '../build/types/config'
import { BuildCssLoader } from '../build/loaders/BuildCssLoader'
export default ({config}: {config: webpack.Configuration}) => {

    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')
    config.module.rules.push(BuildCssLoader(true))
    return config
}