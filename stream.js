var fs=require('fs');
var data="";
var readObj=fs.createReadStream('file.txt');
readObj.on('data',function(c){
	data=data+c;
});
readObj.on('error',function(err){
	console.log("Error event called:"+err.stack);
})
readObj.on('end',function(){
	console.log(data);
});
console.log("reading finished");