var events=require('events');
var EventEmitter=new events.EventEmitter();

EventEmitter.on('logging',function(){
	console.log('Log Message');
})
EventEmitter.emit('logging',{});