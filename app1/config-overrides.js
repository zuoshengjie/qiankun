const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
    },
  }),
);
