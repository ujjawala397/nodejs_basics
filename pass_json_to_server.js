var http = require('http');
http.createServer(function(req,res){
res.writeHead(200, {'Context-Type' : 'html/text'});
var obj={"name":"Node js", "code":"INT222"}
var jsonParsed=JSON.stringify(obj) //parse the obj into string
res.end(jsonParsed)
}).listen(8000);
console.log('saved');