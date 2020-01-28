const path = require("path");
module.exports = {
  entry: "./src/commonjs/index.js",
  devtool: "none",
  mode: "development",
  target: "node",
  output: {
    filename: "[name].[hash:8].js",
    path: path.join(__dirname, "dist")
  }
};
