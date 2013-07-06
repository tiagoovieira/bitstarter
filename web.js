var express = require('express');
var fs = require('fs');
var buf = new Buffer('index.html');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	fs.readFileSync('index.html', function(err, contents){
		response.send(contents);
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
