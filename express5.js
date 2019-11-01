var express=require('express');
var app=express();
app.get('/',function(req,res){
	
	res.send(process.argv);
});
app.listen(3000);