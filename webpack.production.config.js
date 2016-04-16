var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            // 这里再也不需通过任何第三方来加载
            exclude: [node_modules_dir],
            loader: 'babel'
        },{
            test:/\.css$/,
            loader:'style!css'
        },{
            test:/\.less$/,
            loader:'style!css!less'
        }]
    }
};
module.exports = config;