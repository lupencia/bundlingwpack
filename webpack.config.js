var HtmlWebpackplugin = require('html-webpack-plugin');
var webpack =require('webpack');

module.exports = {
    entry: [
        '@babel/polyfill',
        './students.js'
    ],
    output: {
        filename: 'bundle.js',
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
            $: "jquery",
            jQuery: "jquery",
        })
    ]
}