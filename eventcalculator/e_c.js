var events = require('events');
var eventEmitter = new events.EventEmitter();
var fs=require("fs");
var http= require("http");

var func=function func()
{
	http.createServer(function (req,res){
	res.writeHead(200, {'Content-Type':'text/html'});
	fs.readFile("21_1.html",function(err,data){
		if(err){
			console.log(err.stack);
			return;
		}
		else
		{
			res.write(data);
		}
	});
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
}
eventEmitter.on('text', func);
eventEmitter.emit('text');