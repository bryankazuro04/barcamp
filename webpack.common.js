const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/function.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function() {
                  return [require("autoprefixer")];
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        use: [{
          loader: "file-loader",
        }, ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./src/media/bryi.ico",
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
