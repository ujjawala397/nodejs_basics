const express=require('express');
const app=express();
app.use('/abc',express.static('public'));
var validation=function(req,res,next){
	console.log("hello");
	next();
}
var uservalidation=function(req,res,next){
	if(req.params.username=='juju')
		console.log('User Validated');
	else
		console.log('Not Validated');
	//next();
}
//app.use(validation);

app.get('/',validation,(req,res)=>{
	res.send("Hello Tutorial");
})
app.get('/users/:username',uservalidation,(req,res)=>{
	res.send("users profile");
})

app.listen(3000,()=>console.log('server running at 3000'));
