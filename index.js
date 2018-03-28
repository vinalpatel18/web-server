var express =require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.get('/about',middleware.logger,function (req,res) {
	res.send('About us!');
	// body...
})

app.get('/home',middleware.logger ,function (req,res) {
	res.send('home page!');
	// body...
})

app.listen(PORT,function () {
	console.log('Express server started on '+PORT);
	// body...
});


/*var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});*/