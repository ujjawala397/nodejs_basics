var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
	fs.readFile('newFile.txt',function(err,data){
		res.writeHead(200,{'Content-type':'text/html'});

		fs.writeFile('file.txt',data,function(err){
			if(err) throw err;
			console.log('Saved');
		});
	});
}).listen(8080);