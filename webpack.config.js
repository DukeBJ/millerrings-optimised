// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    // mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: ['./assets/js/main.js', './assets/scss/main.scss', './index.html'],
    output: {
        filename: `./assets/js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        // open: true,
        hot: true,
        port: 6000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: false
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./assets/css/${filename('css')}`
        }),
        // new copyWebpackPlugin({
        //     patterns: {
        //         from: path.resolve(__dirname, 'src/assets/images'),
        //         to: path.resolve(__dirname, 'dist/assets/images')
        //     }
        // })
        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    }
                ]
            },
            {
                test: /\\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(?:|svg|png|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `./assets/images/${filename('[ext]')}`
                        }
                    }
                ]
            },
            {
                test: /\.(?:|woff|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `fonts/[name].[ext]`,
                            publicPath: '../'
                        }
                    }
                ]
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};
