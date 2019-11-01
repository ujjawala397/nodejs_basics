const express=require('express');
const app=express();
app.get('/',function(req,res){
res.send("Hello node js");
res.end();
});
app.get('/api/courses',function(req,res){
res.send(JSON.stringify([1,2,3,4,5]));
res.end()
});
//app.listen(8000)
var port=process.env.PORT || 8000
app.listen(port);

console.log('Server Started at port');