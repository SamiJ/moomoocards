
/**
 * Module dependencies.
 */

var express = require('express')
var path = require('path')
var favicon = require('static-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var api = require('./routes/api')
var http = require('http')

var mongo = require('mongodb')
var monk = require('monk')
var db = monk('localhost:27017/moomoocards')

var app = express()
var env = process.env.NODE_ENV || 'development';

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(function(req,res,next) {
    req.db = db
    next()
})

// dev environment
if ('development' == env) {
}

app.use('/', index)
app.use('/api', api)

app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
})
