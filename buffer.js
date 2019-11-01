var buf=Buffer.from(' Node js is open source')
var buf1=Buffer.from("This is cool dhvxghfhjfghbdj")
console.log(buf1.toString())
console.log(buf1.byteLength)
var arr=[buf1,buf]
console.log(Buffer.concat(arr).toString())



buf.copy(buf1,3,8);
console.log(buf1.toString())