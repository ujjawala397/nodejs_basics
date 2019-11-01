var m=require('mongodb').MongoClient;
m.connect("mongodb://localhost:27017/db",{useUnifiedTopology: true},function(err,db){
	if(err){
		console.log('error in connecting MongoClient');
	}
	else{
		console.log('database connected');
	}
	var dbo=db.db("mydb");
	dbo.collection('customers').updateMany({name:"Susan"},{ $set: {address: "One way 97" }},function(err,res){
 	if (err) throw err;
    console.log("1 document updated");
	});
	 dbo.collection('customers').find({}).toArray(function(err,data){
    	console.log(data);
    	data.forEach(element=>{
    		console.log(element.name)
    	})
    });
    db.close();

})