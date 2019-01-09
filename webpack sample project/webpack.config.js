const PATH = require('path');
module.exports = {
    devtool : "eval-source-map",
    entry : "./app/main.js",
    output : {
        path : PATH.resolve(__dirname,"public"),
        filename : "bundle.js"
    },
    devServer : {
        contentBase : "./public",
        historyApiFallback : true,
        inline : true,
        port : 8888
    },
    module : {
        rules : [
            {
                test : /(\.jsx|\.js)$/,
                use : {
                    loader : "babel-loader"
                },
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                use : [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                    "url-loader"
                ]
            }
        ]
    }
}
