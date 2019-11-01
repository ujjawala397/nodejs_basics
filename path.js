var path=require('path');

// console.log(__dirname);
// console.log(__filename);
console.log(path);
var ob=path.parse(__filename);
// console.log(ob);

//////////////////////////////////

var os=require('os');
var memo=os.freemem();
var memos=os.totalmem();
var a=memos-memo;
console.log("Free mem:"+memo);
console.log("Used mem :"+a);