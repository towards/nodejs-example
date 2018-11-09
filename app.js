var express = require('express');
var app = express();

app.get('/', function (req, res) {
	  res.send('Hello World from the Gleis PaaS!');
});

app.listen(5000, function () {
	  console.log('Gleis example app for Node.js listening on port 5000');
});
