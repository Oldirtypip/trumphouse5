//NodeJS server
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('/', path.join(__dirname, '/'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Use some default routes
app.use(express.static(path.join(__dirname, 'node_modules')));
// directory you started the server in. Normally, you'll want to make this something else, e.g. 'public'
app.use('/', express.static(__dirname + '/public'));

var port = 4000;
app.listen(process.env.PORT || port);
console.log('server listening at port:' + port);

module.exports = app;

/*
app.mime.type['.fx'] = 'application/fx';

app.mime.type['.babylon'] = 'application/babylon';

app.mime.type['.babylonmeshdata'] = 'application/babylonmeshdata';
*/
