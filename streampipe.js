var fs=require('fs');
var readObj=fs.createReadStream('file.txt');
var writeObj=fs.createWriteStream('output.txt')
readObj.pipe(writeObj)
console.log("File Copy Done");