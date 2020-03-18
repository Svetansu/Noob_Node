var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var d = q.year + " " + q.month;
	//res.write(req.url)
	res.end(d);
}).listen(8080);

console.log("Server running on port 8080. Press CTRL+C to end running...");