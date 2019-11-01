console.log(process.arch);


console.log('PROCESS id = '+process.pid);
console.log(`Process arch ${process.arch} `);//Similar like line 1


console.log(process.env);

console.log(process.version);
console.log(process.release);
console.log(process.versions);
console.log(process.platform);



//exit function at the end but its function will never be invoked because process has ended
process.on('exit',function(){
	setTimeout(function(){
		console.log('exit function');
	});
	console.log('exit');
})


//beforeExit function function is invoked and run endless bcs before ending process fucntion is invoked again
/* process.on('beforeExit',function(){
	setTimeout(function(){
		console.log('exit function');
	});
	console.log('exit');
 })
*/
process.argv.forEach(function(value,index){
	console.log("Arg["+index+"]:"+value);
})