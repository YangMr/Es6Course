const PATH = require('path');
module.exports = {
    entry : "./app/main.js",
    output : {
        path : PATH.resolve(__dirname,"public"),
        filename : "bundle.js"
    }
}
