var zlib=require('zlib')
const gzip=zlib.createGzip();
const fs=require('fs');
const r=fs.createReadStream('file.txt')
var w=fs.createWriteStream('new.gz');
r.pipe(gzip).pipe(w);
console.log("Zip File Created");
