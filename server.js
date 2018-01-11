require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./models/articles');

// connection uri
const url = process.env.MONGO_URI;

mongoose.connect(url, { useMongoClient: true });
let db = mongoose.connection;

// check if connect is a success
db.once('open', function () {
	console.log('Connection to db successfull');
});

// check if connect encounters error
db.on('error', function (err) {
	console.log(err);
});

// deprecated mongoose Promise Middleware
mongoose.Promise = global.Promise;

// Init express module
const app = express();

// Init port number for server
const port = 3000 || process.env.PORT;

// views Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Home route handler
app.get('/', function (req, res) {
	Article.find({}, function (err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.render('index', {
				title: 'Articles',
				articles: doc
			});
		}
	});
});

// Add articles route handler
app.get('/articles/add', function (req, res) {
	res.render('addArticle');
});

// post articles route handler
app.post('/articles/add', function (req, res) {
	let article = new Article();
	article.title = req.body.title;
	article.author = req.body.author;
	article.content = req.body.content;

	article.save(function (err) {
		if (err) {
			console.log(err);
			return;
		} else {
			res.redirect('/');
		}
	});
});

// Init server on port 3000 || process.env.PORT
app.listen(port, 'localhost', function () {
	console.log('Running on localhost:' + port);
});

