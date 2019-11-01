var m=require('mongodb').MongoClient;
m.connect("mongodb://localhost:27017/db",{useUnifiedTopology: true},function(err,db){
	if(err){
		console.log("error in connecting Mongoclient");
	}
	else{
		console.log('database created successfully');
	}
	var dbo = db.db("mydb");
	var myobj = { name: "Company Inc", address: "Highway 37" };
  	dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
	});
});