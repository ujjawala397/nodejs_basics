var events=require('events')

var E= new events.E()
E.on('add',function(x,y){
	z=x+y;
	console.log(z)
})
E.emit('add',(2,3))
