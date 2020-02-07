**Block-Chain-Shop**
---------------------------

> **webpack配置部分**

----------
版本: webpack 4
支持功能:
         - *sass*
         - *vue*
         - *vuex*
         - *vue-router*
         - *axios*
         - *jquery*
         - *静态资源目录*
         - *支持es6/7/8语法*
优点:    
 1. *热更新服务*
 2. *跨域请求处理*
 3. *抽离第三方库（提高打包速度）*
 4. *优化js压缩速度*
 5. *提高热更新速度*
 6. *视图逻辑封层处理*  

目录结构:
 
    ├─ .cache                       #缓存
    │  ├─ 69eca41827abeed9218b2482f5716be18228e0029f21faad2024111752740c68.js
    │  └─ f0fb92d21fb8a6c3ac55a80018760902600b84dbcaa42f77986b02845d0a787d.js
    ├─ .gitignore                   #git忽略文件
    ├─ build
    │  ├─ vendor-manifest.json      #提取出的三方库
    │  ├─ webpack.config.js         #基础配置
    │  ├─ webpack.dev.js            #开发配置
    │  ├─ webpack.dll.config.js     #第三方库提取,需升级三方库时,执行相应命令
    │  └─ webpack.prod.js           #生产配置
    ├─ config
    │  └─ index.js                  #热更新及跨域处理
    ├─ index.html                   #主页面
    ├─ package-lock.json
    ├─ package.json                 #配置文件
    ├─ src
    │  ├─ App.vue                   #主文件
    │  ├─ BlackVueTemplate.vue      #空vue文件,仅结构
    │  ├─ main.js                   #入口文件
    │  ├─ model                     #模型层
    │  │  └─ test.js                #测试文件
    │  ├─ permission.js             #权限文件
    │  ├─ router                    #vue-router配置
    │  │  └─ index.js
    │  ├─ store                     #vuex配置
    │  │  ├─ index.js
    │  │  ├─ mutation.js
    │  │  └─ state.js
    │  ├─ utils                     #工具库
    │  │  └─ http.js                #axios封装http库
    │  └─ view                      #视图层
    │     └─ Login
    │        └─ index.vue
    └─ static                       #静态资源文件
       └─ vendor.dll.js             #提取出来三方库文件    

----------
> **axios封装请求库**
    


----------


> 待续还有优化...（生产环境打包文件位置可调整）