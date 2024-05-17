const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.tsx",
  resolve: {
    extensions: [".tsx", ".js", ".jsx", ".ts", ".json"], // 根据需要添加或调整
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // { test: /\.css$/, use: ["style-loader", "css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]"] },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                // 自定义生成的类名模式
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
  ],
};
