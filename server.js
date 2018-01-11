const express = require('express');
const path = require('path');

// Init express module
const app = express();

// Init port number for server
const port = 3000 || process.env.PORT;

// views Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Home route handler
app.get('/', function (req, res) {
	res.render('index');
});

// Add articles route handler
app.get('/articles/add', function (req, res) {
	res.render('addArticle');
});

// Init server on port 3000 || process.env.PORT
app.listen(port, 'localhost', function () {
	console.log('Running on localhost:' + port);
});

