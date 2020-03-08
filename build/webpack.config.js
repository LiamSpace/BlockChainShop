const path = require('path')
const Webpack = require('webpack')
const HappyPack = require('happypack') //js 为单线程，其分解多个子进程并行处理
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({size:os.cpus().length})
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const currentMode =  process.argv.indexOf('--mode=production') === -1; //1 为 开发环境 -1为生产环境

module.exports = {
    entry:[
         //进行新api的转换 => @babel/polyfill
        "@babel/polyfill",path.resolve(__dirname,'../src/main.js'),
    ],
    output:{
        filename:'js/[name].[hash:8].js',
        path:path.resolve(__dirname,'../dist'),
        chunkFilename:'js/[name].[hash:8].js'
    },
    module:{
        rules:[
            //缓存，比较当前修改与缓存是否有变化，无变化即可使用缓存,变换则只更新修改部分
            {
                test:/\.ext$/,
                use:[
                    'cache-loader'
                ],
                include:path.resolve(__dirname,'../src')
            },
            {
                test:/\.vue$/,
                use:[{
                    loader:'vue-loader',
                    options:{
                        compilerOptions:{
                          preserveWhitespace:false
                        }
                    },
                }],
                include:[path.resolve(__dirname,"../src")],
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {   loader: currentMode ? 'vue-style-loader': MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'../',
                            hmr:currentMode
                        }
                    },
                    'css-loader',
                    {
                        //添加前缀
                        loader:'postcss-loader',
                        options:{
                            plugin:[require('autoprefixer')]
                    }
                }], //执行顺序，都是从右向左解析
                include:[path.resolve(__dirname,"../src")],
                exclude:/node_modules/
            },
            {
                test:/\.s[ac]ss$/,
                use:[
                    {loader:currentMode?'vue-style-loader':MiniCssExtractPlugin.loader,
                    options:{
                        publicPath:'../',
                        hmr:currentMode
                    }
                },'css-loader',{
                    //添加前缀
                    loader:'postcss-loader',
                    options:{
                        plugin:[require('autoprefixer')]
                    }
                },'sass-loader'],
                include:[path.resolve(__dirname,"../src")],
                exclude:/node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i, //图片文件
                use: [
                    {
                        //url 转换成base64 ,超过限制使用file-loader
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'img/[name].[hash:8].[ext]'
                                    }
                                },
                            //启用CommonJS模版语法
                            esModule: false
                        },
                    }
                ],
                include:[path.resolve(__dirname,"../src/assets/")],
                exclude:/node_modules/
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'media/[name].[hash:8].[ext]',
                                    },
                                },
                            esModule: false
                        },

                    }
                ],
                exclude:/node_modules/
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10240,
                      fallback: {
                        loader: 'file-loader',
                        options: {
                          name: 'fonts/[name].[hash:8].[ext]'
                        }
                      }
                    }
                  }
                ],
                include:[path.resolve(__dirname,"../src/assets/")],
                exclude:/node_modules/
            },
            // {
            //     test:/\.js$/,
            //     use:{
            //         //进行语法转换
            //         loader:'babel-loader',
            //         options:{
            //             presets:['@babel/preset-env']
            //         }
            //     },
            //     exclude:/node_modules/
            // },
            {
                test:/\.js$/,
                use:[{
                    //将js文件处理交给id为happyBabel的happypck实例进行执行
                    loader:'happypack/loader?id=happyBabel'
                }],
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        alias:{
          'vue$':'vue/dist/vue.runtime.esm.js',
          '@':path.resolve(__dirname,'../src'),
          'assets':path.resolve(__dirname,'../assets'),
          'components':path.resolve(__dirname,'../src/components')
        },
        extensions:['*','.js','.json','.vue']
   },
    plugins:[
        // 拼接组装html,打包出来的文件插入模版
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../index.html'),
            filename:'index.html'
        }),
        //打包，清除一次dist目录
        new CleanWebpackPlugin(),
        new vueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: currentMode? '[name].css':'[name].[hash].css',
            chunkFilename:currentMode ? 'css/[id].css':'css/[id].[hash].css'
        }),
        //单线程变多线程并行运行,提升串行执行的速度
        new HappyPack({
            id:'happyBabel',
            loaders:[
                {
                    loader:'babel-loader',
                    options:{
                        presets:[
                            ['@babel/preset-env',{modules:false}] //清除代码中无用部分tree-shaking
                        ],
                        cacheDirectory:true
                    }
                }
            ],
            threadPool:happyThreadPool //共享进程池
        }),
        // 拷贝静态资源
        new CopyWebpackPlugin([{
            from:path.resolve(__dirname,"../static"),
            to:path.resolve(__dirname,"../dist/static")
        }]),
        //全局配置第三方库
        new Webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            jquery:'jquery',
            anime:'animejs'
        })
    ],

}
