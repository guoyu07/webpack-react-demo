{
  "name": "webpack-react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {

    //在终端直接执行webpack和npm run build的效果是一样的
    //这样写的好处就是便于全部使用npm来进行统一管理
    //但是总是npm run build也是不够人性化
    //因此我们接下来需要安装webpack-dev-server这个包

    "build":"webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "webpack": "^1.12.14"
  }
}

