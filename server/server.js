var compression = require('compression')
var express = require('express');
var app = express();
const mysql = require('mysql')
const randomNum = require('string-random')
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
let bodyParser = require('body-parser')

app.use(compression());
//解析表单
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended:true})) // for parsing application/x-www-form-urlencoded

// 跨域封装
app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headers',"X-Requested-With");
    res.header('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE,OPTIONS");
    res.header('X-Powered-By','3.2.1');
    res.header('Content-Type','application/json;charset=utf-8');
    next();
});

//连接数据库
const conDB = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    port:3306,
    database:'blockChainDB'
});


conDB.connect((err) => {
    if (err) throw err;
    console.log('数据库连接成功')
});




//数据库操作


// form-data 操作
app.post('/profile', upload.array(), function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});


//验证用户名是否被占用
app.post('/api/checkUserName',(req,res) => {
    console.log(req.body.userName);
    let reqParam = req.body.userName;
    let sqlWord = 'select * from userInfo where userName = ?';
    conDB.query(sqlWord,reqParam,(err,result) => {
        if (err){
            return res.json({err_code:406,message:'获取失败'})
        }
        if(result.length > 0){
            res.json({
                code:202,
                message:'已存在该用户名',
            })
        } else{
            res.json({
                code:200,
                message:'该用户名有效',
            })
        }
    });
});

// 注册
app.post('/api/register',(req,res) => {
    let registeUser = {};
    registeUser = req.body;
    registeUser.userId = randomNum(5,{letters:false});
    console.log(registeUser);
    let sql = 'insert into userInfo SET ?';
    conDB.query(sql,registeUser,(err,result) => {
        if (err){
            return res.json({err_code:406,message:'数据插入失败'})
        }
        res.json({
            code:200,
            message:'注册成功',
        })
    })
});

// 登陆
app.post('/api/login',(req,res) => {
    let sqlWord = 'select * from userInfo where email= '
        + `'${req.body.email}'`
        + ' and password = '
        + `'${req.body.password}'`;
    conDB.query(sqlWord,(err, result) => {
        if (err) {
            return res.json({err_code:406,message:'获取失败'})
        }
        console.log('登陆',result)
        res.json({
            code:200,
            message:'登陆成功',
            user:result
        })
    })

});

//通过userId获取用户信息
app.post('/api/getUserInfo',(req,res) => {
    let sqlWord = 'select * from userInfo where userId = ' + `'${req.body.userId}'`;
    conDB.query(sqlWord,(err,result) => {
        if (err) {
            return res.json({err_code:406,message:'获取失败'})
        }
        console.log('获取用户信息',result)
        res.json({
            code:200,
            message:'查找成功',
            user:result
        })
    })
});

//关于我们 批量加入数据库操作
// app.post('/api/aboutUs',(req,res) => {
//     let sqlWord = 'insert into teamMember SET ? ';
//     req.body.teamMember.forEach((item,index) => {
//         conDB.query(sqlWord,item, (err,results) => {
//             console.log(results)
//         })
//     })
// });

//关于我们
app.get('/api/aboutUs',(req,res) => {
    let sqlWord = 'select * from teamMember';
    conDB.query(sqlWord, (err,results) => {
        if(err) return res.json({err_code:1,message:'获取失败',affectedRows:0})
        res.json({
            code:200,
            pArr:results
        });
        console.log(results)
    })
});


//商品插入记录
// app.post('/api/products',(req,res) => {
//     let sqlWord = 'insert into goods SET ? ';
//     req.body.productList.forEach((item,index) => {
//         item.productID = randomNum(5,{letters:false});
//         conDB.query(sqlWord,item, (err,results) => {
//             console.log(results)
//         })
//     })
// });

//商品展示部分
app.get('/api/goodList',(req,res) => {
    console.log(req.query)
    if (req.query.page > 0 && req.query.num > 0) {
        let num = parseInt((req.query.page) * parseInt(req.query.num));
        let page = parseInt(req.query.num);
        let sqlWord = "select * from goods LIMIT" +` ${page} ` + `, ${num} `;
        console.log(sqlWord)
        conDB.query(sqlWord, (err,results) => {
            if(err) return res.json({err_code:1,message:'获取失败',affectedRows:0})
            res.json({
                code:200,
                goodList:results
            });
            console.log(results)
        })
    }
})


//商品详情
app.get('/api/goodDetail',(req,res) => {
    if (req.query.productId) {
        let sqlWord = "select * from goods where productID = " +` ${req.query.productId} `;
        conDB.query(sqlWord, (err,results) => {
            if(err) return res.json({err_code:1,message:'获取失败',affectedRows:0})
            res.json({
                code:200,
                goodDetail:results[0]
            });
            console.log(results)
        })
    }
})

//获得筛选条件
app.get('/api/getFilterList',(req,res) => {
    let sqlArr = ['openDate','productKind','productBrand'];
    var filterCollection = {};
    sqlArr.forEach((item,index) => {
        let sqlWord = 'select distinct '+`${item}`+' from goods Limit 4';
        conDB.query(sqlWord,(err,results) => {
                if(err) return res.json({err_code:1,message:'获取失败',affectedRows:0})
                let result = getList();
                if (results.length > 0){
                    result.then(function () {
                        filterCollection[`${item}`] = results;
                        if (index >= sqlArr.length-1){
                            console.log(filterCollection,'----->')
                            res.json({
                                code:200,
                                filterArr:filterCollection
                            })
                        }
                    },function () {
                        console.log('异步出现错误');
                    })
                }
            })
    });
    function getList() {
        return new Promise((resolve,reject) => {
            resolve();
            reject();
        })
    }
});

//筛选条件
app.post('/api/filterGood',(req,res) => {
    console.log(req.body)
    let time = req.body.filterTime;
    let kind = req.body.filterKind;
    let brand = req.body.filterBrand;
    let sqlWord = 'select * from goods'
        + `${time||kind||brand ? ' where ':''}`
        + `${time ? `${joint('openDate', ' = ', time)}` : ''}`
        +`${time&&kind ? ' And ' : ''}`
        +`${kind ? `${joint('productKind', ' = ', kind)}` : ''}`
        +`${(time||kind)&&brand? ' And ' : ''}`
        +`${brand ? `${joint('productBrand', ' = ', brand)}` : ''}`;
    console.log(sqlWord)
    conDB.query(sqlWord,(err,results) => {
            if (err) return res.json({err_code:1,message:'获取失败',affectedRows:0})
            res.json({
                code:200,
                filterResults:results
            })
        })
    function joint(nameTag,operate, valueTag) {
        return valueTag ? `${nameTag}${operate}'${valueTag}'`:''
    }
});




//查
app.get('/api/user',(req,res) => {
    // 定义SQL语句
    const sqlStr = 'select * from userInfo';
    conDB.query(sqlStr,(err,results) => {
        console.log(results)
        if(err) return res.json({err_code:1,message:'获取失败',affectedRows:0})
        res.json({
            err_code:0,message:results,affectedRows:0
        })
    })
});


var server = app.listen(8271,function(req,res){
    console.log('server running at http://localhost:8271');
})


