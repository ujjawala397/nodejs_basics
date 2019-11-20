function myFunc(arg) {
  console.log(arg);
}
setTimeout(myFunc, 1500, '1.5');



function myFunc(arg) {
  console.log(arg);
}
setTimeout(myFunc, 0000, '000');



console.log('before immediate');
function myFunc(arg){
	console.log(arg);
}
setImmediate(myFunc,'funky');
console.log('after immediate');



function myFunc(arg) {
  console.log(arg);
}
setInterval(myFunc, 2000, '000');
