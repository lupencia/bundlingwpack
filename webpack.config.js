var HtmlWebpackplugin = require('html-webpack-plugin');
var MiniCssExtractlugin = require('mini-css-extract-plugin');
var webpack =require('webpack');

module.exports = {
    stats: 'errors-only',
    entry: {
        app: './favColor.js',
        appStyles: './style.css',

        vendor: [
            '@babel/polyfill',
            'jquery',
        ]
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name:'vendor',
                    test: 'vendor',
                    enforce: true,
                }
            }    
        }
    },
    devServer: {
        port:8081,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractlugin.loader,              
                    },
                    {
                        loader: 'css-loader',              
                    }
                ]

            }
        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            filename: 'index.html', //este está en dist
            template: 'index.html',
            hash: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new MiniCssExtractlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}