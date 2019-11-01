const express=require('express')
const app=express();
app.get('/',function(req,res){
res.send("Hello node js");
res.end()
});
app.listen(8000)
console.log("Server Started at port…")