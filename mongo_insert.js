var m=require('mongodb').MongoClient;
m.connect("mongodb://localhost:27017/db",{useUnifiedTopology: true},function(err,db){
	if(err){
		console.log("error in connecting Mongoclient");
	}
	else{
		console.log('database created successfully');
	}
	var dbo = db.db("mydb");
	var myobj =[{ name: "private", address: "Highway 39" },
				{ name: "Juju", address: "Highway 38" },
				{ name: "classic", address: "Wolf road" },
				{ name: 'Michael', address: 'Valley 345'},
			    { name: 'Sandy', address: 'Ocean blvd 2'},
			    { name: 'Betty', address: 'Green Grass 1'},
			    { name: 'Richard', address: 'Sky st 331'},
			    { name: 'Susan', address: 'One way 98'},];
  	dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
	});
    dbo.collection('customers').find({name:'classic'}).toArray(function(err,data){
    	console.log(data);
    	data.forEach(element=>{
    		console.log(element.name)
    	})
    });
    db.close();
});