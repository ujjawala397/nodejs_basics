var express=require('express');
var app=express();
app.use('/',function(req,res,next){
console.log("req");
next();
});
app.use('/',function(req,res,next){
console.log("hello");
next();
});

app.get('/',(req,res,next)=>{
	res.send("Home Page");
});
app.listen(8000);
console.log("Server running at 8000");