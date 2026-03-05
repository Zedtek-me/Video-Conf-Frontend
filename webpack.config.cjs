const path = require("node:path");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    mode:  "development",
    devtool: "eval-source-map",
    entry: path.resolve(__dirname, `./src/index.tsx`),
    output: {
        path: path.join(__dirname, "public"),
        filename: "index.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/i,
                exclude: /node_modules/,
                use: [
                  {
                    loader: "babel-loader",
                    options: {
                        presets: [
                          "@babel/preset-env",
                          "@babel/preset-react",
                          "@babel/preset-typescript"
                        ],
                        plugins: [
                            "@babel/plugin-transform-runtime"
                          ],
                        sourceType: "module"
                    },
                  }
                ],
            },
            {
                test: /\.(css|scss)$/i,
                use: [
                    "style-loader", {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                type: "asset/resource",
            }
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
          historyApiFallback:true,
          hot:true,
          port: 8002,
    },
    plugins: [
        new Dotenv(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html",
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    }
}
