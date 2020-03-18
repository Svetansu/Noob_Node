var http = require('http');
var url = require('url');
var fs = require("fs");

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = "."+q.pathname;
	if (filename=="./"){
		filename = "./navbar";
	}
	filename = filename + ".html";
	//console.log(q);
	fs.readFile(filename, function(err, data) {
		if (err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("40404040404");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log("...Incoming request: " + req.url);
		return res.end();	
	})	
}).listen(8080);

console.log("Server running on port 8080. Press CTRL+C to end running...");