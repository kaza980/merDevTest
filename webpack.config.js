const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/screens/MainScreen/MainScreen.jsx"],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg|woff|ttf)$/,
        use: "file-loader"
      }
      /*  {
        test: /\.(jpg|png|svg|woff|ttf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/"
          }
        }
      },
      {
        loader: "file-loader",
        options: {
          name: "index.html",
          outputPath: "/"
        }
      }*/
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};
