var path = require('path');
var node_modules=path.resolve(__dirname,'node_modules');
var pathToReact=path.resolve(node_modules,'react/dist/react.min.js');
module.exports = {
    //打包入口文件
    entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/main.js')],
    //当 "react" 在代码中被引入，它会使用压缩后的 React JS 文件，而不是到 node_modules 中找。
    resolve:{
        alias:{
            'react':pathToReact
        }
    },
    //打包输出文件
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    //loader加载器,全程是*-loader,可省去
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
        }],
        //每当 Webpack 尝试去解析那个压缩后的文件，我们阻止它，因为这不必要
        noParse:[pathToReact]
    }
};