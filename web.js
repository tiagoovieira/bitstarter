var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer('index.html');
app.get('/', function(request, response) {
	fs.readFileSync('index.html', function(err, contents){
		buf.toString('utf8',0, buf.length);
		response.send(contents);
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
