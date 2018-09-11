
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookieSession=require('cookie-session');
var bodyParser=require('body-parser');
let mysql=require('mysql');


var users = require('./routes/users');
var index = require('./routes/index');
var login = require('./routes/login');
var reg = require('./routes/reg');


var cors=require('cors');

//配置cors中间件

var app = express();
app.use(cors({
  "origin": ["http://localhost:8001","http://localhost:5000","http://localhost:8080","http://localhost:3000"],  //允许所有前端域名
  "credentials":true,//允许携带凭证 
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cookieSession({
  keys:['aa','bb'],
  name:'hahahahahha'
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

let db= mysql.createPool({//创建连接池 不用频繁创建连接
  host:'localhost',
  port:3306,
  user:'root',
  password:'123',
  database:'user'
})

app.use('/',index);
app.use('/users',users);
app.use('/login',login(db));
app.use('/reg',reg(db))



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
