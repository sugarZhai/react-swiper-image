const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: __dirname + "/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader'

                    }
                ]
            }, {
                test: /\.(jpg|png|gif|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
    ],
    devServer: {
        inline:true
    },
}