const express =require('express');
const Joi=require('joi');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
app.use(express.json());
//app.use('/public', express.static(__dirname,'static')))
app.use(bodyParser.urlencoded({extended: false}));
app.get('/',(req,res)=>{
res.sendFile(__dirname+"/"+'joiform.html')
});



app.post('/',(req,res)=>{
console.log(req.body);
const schema=Joi.object().keys({
	email:Joi.string().trim().email().required(),
	phone:Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
	birthdate:Joi.date().max('1-1-2004').iso()
	});

Joi.validate(req.body,schema,(err,result)=>{
	if(err){
	res.send('an error has occured');
	}
	else{
	console.log(result);
	res.send('successfully posted data');
	}
})
});
app.listen(3000);