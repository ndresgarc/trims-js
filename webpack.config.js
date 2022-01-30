const path = require("path");

module.exports = {

    mode: 'development',

  entry: {
    "trims.global.prefix": "./src/trims.global.prefix.ts",
    "trims.global": "./src/trims.global.ts"
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
  },

  // devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  }
  
};