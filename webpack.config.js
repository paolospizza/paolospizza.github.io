const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: './assets/index.css',
    output: {
        path: path.resolve(__dirname, './docs/'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[id].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                ]
            },
            { test: /\.hbs$/, loader: "handlebars-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: '!!handlebars-loader!./assets/template-index.hbs',
            templateParameters: require('./assets/content.json')
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ],
        }),
    ],
};