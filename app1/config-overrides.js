const { name } = require("./package");
const { override, addLessLoader, overrideDevServer } = require("customize-cra");

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
    config.output.publicPath = "/children/app1-history/";
  }
  config.output.library = `${name}-[name]`;
  config.output.libraryTarget = "umd";
  config.output.jsonpFunction = `webpackJsonp_${name}`;
  config.output.globalObject = "window";
  return config;
};

module.exports = {
  webpack: override(addCustomize()),
  devServer: overrideDevServer(devServerConfig()),
};
