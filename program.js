// lesson #8
// json me
var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(err, data) {
		if (err) return res.send(500);

		try {
			books = JSON.parse(data);
		} catch (e) {
			res.send(500);
		}

		res.json(books);
	})
})

app.listen(process.argv[2]);


// lesson #7
// what's in query

var express = require('express');
var app = express();

app.get('/search', function(req, res) {
	res.send(req.query);
})

app.listen(process.argv[2]);


// lesson #6
// param pam pam

var express = require('express');
var crypt = require('crypto');
var app = express();

app.post('/message/:id', function(req, res) {
	var response = crypt.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex');
	
	res.send(response);
})

app.listen(process.argv[2]);


// lesson #5
// stylish css

var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);


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