const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
    output: {
        publicPath: "/",
    },
    mode: "development",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "src"),
        hot: true,
        port: 8080,
        proxy: {
            "*": "http://[::1]:3000",
            secure: false,
            changeOrigin: true,
        },
    },
});
