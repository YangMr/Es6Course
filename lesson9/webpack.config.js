const PATH = require('path');
module.exports={
    //入口
    entry : "./src/index.js",
    //出口
    output : {
        path :PATH.resolve(__dirname,"dist"),
        filename : "bundle.js"
    }
}
