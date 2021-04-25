const { name } = require("./package");
const path = require("path");

module.exports = {
  webpack: (config) => {
    if (process.env.NODE_ENV !== "development") {
      config.output.publicPath = "/children/app1-history/";
    }
    config.output.path = path.resolve(__dirname, "build/app1-history");
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = "window";
    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
