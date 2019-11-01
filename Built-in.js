var http=require('http');
//creating server object
http.createServer(function(req,res){
	res.write("Hello World"); //writing response to client
	res.end(); //ending response
}).listen(8080); //server listen on localhost:8080