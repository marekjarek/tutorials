var express = require("express");
var app = express();
var path = require('path');
var http = require('http');

var publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.get('/',function(req, res) {
	res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(8888, function(req, res){
	console.log("App started on port 8888");
});