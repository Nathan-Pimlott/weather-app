const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
    output: {
        publicPath: "./",
    },
    mode: "production",
});
