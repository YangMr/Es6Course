const PATH = require('path');
module.exports = {
    entry : "./src/index.js",
    output : {
        path : PATH.resolve(__dirname,"dist"),
        filename : "bundle.js"
    }
}
