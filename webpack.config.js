var path = require('path');

var HtmlWebPackPlugin = require("html-webpack-plugin");
var htmlPlugin = new HtmlWebPackPlugin({
    template: "./assets/template/index.html"
    // filename: "./assets/template/index.html"
});

module.exports = {
    mode: 'development',
    entry: ['./assets/main.ts', './assets/scss/app.scss'],

    module: {
        rules: [
            /**
             * JSX Rules
             */
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            /**
             *  Sass Rules
             */
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
};