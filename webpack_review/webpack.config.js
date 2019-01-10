const PATH = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const  MiniCssExtractPlugin  =  require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    mode : "development",
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
    watchOptions: {
       aggregateTimeout: 300,
       poll: 1000,
       ignored: /node_modules/
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
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      // you can specify a publicPath here
                      // by default it use publicPath in webpackOptions.output
                      publicPath: '../'
                    }
                  },
                  "css-loader"
              ]
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
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
          filename: "css/[name].css",
          chunkFilename: "[id].css"
        }),
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
