import webpack, { RuleSetRule } from "webpack";
import path from "path";
import { fileURLToPath } from "url";
import { buildcssloaders } from "../build/loaders/buildcssloaders";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({ config }: { config: webpack.Configuration }) => {
  const srcPath = path.resolve(__dirname, "..", "..", "src"); // корень src

  // ✅ Aliases
  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    app: path.resolve(srcPath, "app"),
    shared: path.resolve(srcPath, "shared"),
  };

  // ✅ Extensions
  config.resolve.extensions = [
    ...(config.resolve.extensions || []),
    ".ts",
    ".tsx",
    ".js",
    ".jsx",
  ];

  // ✅ Modules
  config.resolve.modules = [...(config.resolve.modules || []), srcPath];

  // ✅ SCSS loader
  config.module = config.module || { rules: [] };
  config.module.rules = config.module.rules || [];
  config.module.rules.push(buildcssloaders(true));

  // ✅ Исключаем SVG из стандартных loaders
  config.module.rules = config.module.rules.map((rule) => {
    if (!rule || typeof rule !== "object") return rule;
    const r = rule as RuleSetRule;
    if (r.test instanceof RegExp && r.test.test(".svg")) {
      return { ...r, exclude: /\.svg$/i };
    }
    return r;
  });

  // ✅ Добавляем loader для SVG как React-компоненты
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  });

  // ✅ Плагины
  config.plugins = [...(config.plugins || [])];

  return config;
};
