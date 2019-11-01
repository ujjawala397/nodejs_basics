var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var obj='hfvcjhcikerk';

  res.end(obj);
}).listen(8080);


