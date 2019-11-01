
var  http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var adr=req.url;
	var q=url.parse(adr);
	var fileName='.'+ q.pathname;
	fs.readFile(fileName,'utf-8',function(err,data){
		res.write(data);
	})

}).listen(8080);
