var fs=require('fs');
var data="";
var writeObj=fs.createWriteStream('file.txt');


writeObj.write("this is writing to stream \n",'utf8');

writeObj.end();

writeObj.on('finish',function(){
	console.log('writing completed');
});