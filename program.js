// lesson #4
// static

var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);


// lesson #3
// good old form

var express = require('express');
var bodyparser = require('body-parser');

var app = express();
var urlencodedParser = bodyparser.urlencoded({extended: false});

app.post('/form', urlencodedParser, function(req, res) {
	res.end(req.body.str.split('').reverse().join(''));
})

app.listen(process.argv[2]);


// lesson #2
// jade

var express = require('express');
// var path = require('path');
var app = express();

app.set('views', process.argv[3]);
app.set('view engine', 'jade')

app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()});
})

app.listen(process.argv[2]);


// lesson #1
// hello world

var express = require('express');
var app = express();

app.get('/home', function(req, res) {
	res.end('Hello World!');
})

app.listen(process.argv[2]);