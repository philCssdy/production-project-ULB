import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader, //css-loader
      {
        // Translates CSS into CommonJS
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? `[path][name]__[local]--[hash:base64:5]`
              : `[hash:base64:8]`,
            namedExport: true,
            exportLocalsConvention: "as-is",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  // Если не используем тайпскрипт нужен babel-loader
  const typescriptLoaders = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoaders, cssLoaders];
}
