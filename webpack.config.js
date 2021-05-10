const path = require("path");
const ENTRY = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT = path.join(__dirname, "static");

const MODE = process.env.WEBPACK_ENV;

const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: MODE,
  entry: ENTRY,
  output: {
    path: OUTPUT,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [[autoprefixer]],
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
};

module.exports = config;
