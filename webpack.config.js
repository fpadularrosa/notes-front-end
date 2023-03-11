const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const srcDir = path.resolve(__dirname, 'src');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ESLintPlugin = require('eslint-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.[contenthash].js",
        publicPath: '',
    },
    module: {
        rules: [
        {
            test: /\.js|jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        },
        { 
            test: /\.txt$/, 
            use: {
                loader: 'raw-loader' 
            }
        },
        {
            test: /\.ico$/, 
            use: {
                loader: 'favicon-loader' 
            }
        },
        {
            exclude: /node_modules/,
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            type: 'asset',
            test: /\.(png|svg|jpg|jpeg|gif)$/
        }
        ]
    },
    plugins: [
        new ESLintPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin( {
            template: "./src/index.html", 
            filename:'webpackPlugin.html', 
            favicon: `${srcDir}/favicon.ico` 
        } )
    ],
    devServer: {
        setupMiddlewares: (middlewares, devServer) => {
            if (!devServer) {
              throw new Error('webpack-dev-server is not defined');
            }
            return middlewares;
        },
        static: {
          directory: path.join(__dirname, '/dist'),
        },
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    //code split
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    performance: {
        maxAssetSize: 50000,
        maxEntrypointSize: 50000,
        hints: 'error',
        assetFilter: function(assetFilename) {
            return !assetFilename.endsWith('.js');
        },
    }
};