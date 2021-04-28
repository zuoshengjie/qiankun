const { name } = require("./package");
const {
  override,
  addLessLoader,
  overrideDevServer,
  addWebpackPlugin,
} = require("customize-cra");
const CopysPlugin = require("copys-plugin");

// 跨域配置
const devServerConfig = () => (config) => {
  config.headers = {
    "Access-Control-Allow-Origin": "*",
  };
  config.historyApiFallback = true;
  config.hot = false;
  config.watchContentBase = false;
  config.liveReload = false;
  return config;
};

// 打包配置
const addCustomize = () => (config) => {
  if (process.env.NODE_ENV !== "development") {
    config.output.publicPath = "/app2-history/";
  }
  config.output.library = `${name}-[name]`;
  config.output.libraryTarget = "umd";
  config.output.jsonpFunction = `webpackJsonp_${name}`;
  config.output.globalObject = "window";
  return config;
};

module.exports = {
  webpack: override(
    addCustomize(),
    addWebpackPlugin(
      new CopysPlugin({
        from: "./build/static",
        to: "./build/app2-history/static",
      })
    )
  ),
  devServer: overrideDevServer(devServerConfig()),
};
