var events=require('events');

var E = new events.EventEmitter();
E.on('add',function(x,y){
	var x=2,y=3;
	var z=x+y;
	console.log(z);
})
E.emit('add',{});
E.on('sub',function(x,y){
	var x=2,y=3;
	var z=x-y;
	console.log(z);
})
E.emit('sub',{});
E.on('mul',function(x,y){
	var x=2,y=3;
	var z=x*y;
	console.log(z);
})
E.emit('mul',{});
E.on('div',function(x,y){
	var x=2,y=3;
	var z=x/y;
	console.log(z);
})
E.emit('div',{});