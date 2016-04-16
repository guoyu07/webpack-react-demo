var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var config = {
    entry: {
        app: path.resolve(__dirname, 'app/main.js'),
        // 当 React 作为一个 node 模块安装的时候，
        // 我们可以直接指向它，就比如 require('react')
        vendors: ['react']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'multi.js'
    },
    module:{
        loaders:[{
            test:/\.jsx?$/,
            loader:'babel'
        },{
            test:/\.css$/,
            loader:'style!css'
        },{
            test:/\.less$/,
            loader:'style!css!less'
        },{
            test:/\.sass$/,
            loader:'style!css!sass'
        },{
            //url-loader 传入的 limit 参数是告诉它图片或字体如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串。
            test:/\.(png|jpg|woff)$/,
            loader:'url?limit=25000'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
module.exports = config;