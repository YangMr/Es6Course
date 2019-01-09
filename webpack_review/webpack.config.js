
const PATH = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool : "eval-source-map",
    entry : "./src/js/index.js",
    output : {
        filename : "js/bundle.js",
        path : PATH.resolve(__dirname,"public")
    },
    devServer : {
        contentBase : "./public",
        inline : true,
        port : 8000,
        historyApiFallback : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                loader : "babel-loader",
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                use:ExtractTextPlugin.extract({

                    fallback:"style-loader",
                    use:[{
                        loader:'css-loader',
                        options:{
                          minimize:true
                          //css压缩
                        }
                    }],
                    publicPath:"../"
                })
            },
            {
                test : /\.(png|jpeg|jpg|gif|svg)$/,
                use : ["file-loader?limit=1024&name=./img/[name].[ext]"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?limit=1024&name=./fonts/[name].[ext]',
                    "url-loader"
                ]
            },
            {
                test : /\.html$/,
                use : ["html-withimg-loader"]
            }
        ]
    },
    plugins : [
        new ExtractTextPlugin('./css/[name].css'),
        new HtmlWebpackPlugin({
            title : "webpack",
            template : "./src/index.html",
            minify: {
                removeAttributeQuotes: true, // 移除属性的引号
                removeComments:true,//去除注释
                removeEmptyAttributes:true,//去除空属性
                collapseWhitespace:true//去除空格

            }
        })
    ]

};
