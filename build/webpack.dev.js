const Webpack = require('webpack')
const WebpackBasicConfig = require('./webpack.config')
const WebpackMerge = require('webpack-merge')
const config = require('../config')

module.exports = WebpackMerge(WebpackBasicConfig,{
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    devServer:{
        host: config.host,
        port: config.port,
        hot:true,
        proxy:config.proxyTable,
        clientLogLevel: "none", //浏览器打印信息
        progress: true,//进度条
        contentBase:'../dist',
        stats:{
            modules: false,
            assets: false, //静态信息
            builtAt: false, //构建信息,
            entrypoints: false, //入口文件
            hash:false,
            version: false,
        }
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin(), //热更新
    ]
})