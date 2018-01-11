const express = require('express');

// Init express module
const app = express();

// Init port number for server
const port = 3000 || process.env.PORT;

// Home route handler
app.get('/', function (req, res) {
	res.send('Hello, worold');
});

// Init server on port 3000 || process.env.PORT
app.listen(port, 'localhost', function () {
	console.log('Running on localhost:' + port);
});

