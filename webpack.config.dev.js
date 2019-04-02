const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const precss = require('precss')
const autoprefixer = require('autoprefixer')

const common = require('./webpack.config.common')
const appVersion = require('./package.json').version

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: path.resolve(__dirname, 'src'),
    devServer: {
        stats: 'minimal',
        open: true, // auto open dev-server on browser
        overlay: true,
        historyApiFallback: true,
        // disableHostCheck: true, // this is dangerous 
        headers: { 'Access-Control-Allow-Origin': '*' }, // this is also dangerous
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            APP_VERSION: appVersion
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /(node_modules)/,
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: true,
                            localIdentName: '[path][name]__[local]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [ precss, autoprefixer ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: ['file-loader']
            }
        ]
    }
})
