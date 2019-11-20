var fs=require('fs');
	fs.rename('index.txt','anil.txt',function(err){

		if(err){
			throw err;
		}
		else{
			console.log('file renamed');
		}
	});