const path = require("path");

module.exports = async ({ config, mode }) => {
  config.resolve.alias = {
    ...config.resolve.alias
  };

  // Return the altered config
  return config;
};
