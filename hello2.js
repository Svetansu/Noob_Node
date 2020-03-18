var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<center><h1>Hello World! yoyoyoyoo</h1></center>');
}).listen(8080);

console.log("Server running on port 8080. Press CTRL+C to end running...");