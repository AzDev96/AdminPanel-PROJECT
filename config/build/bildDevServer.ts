import { Configuration as DevServerConfigurations } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function bildDevServer(options: BuildOptions): DevServerConfigurations {
    return {
      port : options.port,
      open: true,
      historyApiFallback: true  
    }
}