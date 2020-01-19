const path = require('path')
const Webpack = require('webpack')
const WebpackBasicConfig = require('./webpack.config')
const WebpackMerge = require('webpack-merge')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = WebpackMerge(WebpackBasicConfig,{
    mode:'production',
    devtool:'cheap-module-source-map',
    plugins:[
         //公共第三方库，查看webpack.dll.config配置
         new Webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./vendor-manifest.json')
        }),
    ],
    optimization:{
        minimizer:[
            // 压缩js
            // new UglifyJsPlugin({
            //     cache:true,
            //     parallel:true,
            //     sourceMap:true
            // }),
            //优化压缩时间，进行缓存处理
            new ParallelUglifyPlugin({
                cacheDir:'.cache/',
                uglifyJS:{
                    output:{
                        comments:false,
                        beautify:false
                    },
                    compress:{
                        drop_console:true,
                        collapse_vars:true,
                        reduce_vars:true
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({})
        ],
        // 分割代码 拆分包
        splitChunks:{
            chunks:"all",
            cacheGroups:{
                libs:{
                    name:"chunks-libs",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks:"initial"  //打包初始时依赖的第三方
                }
            }
        }
    }
})