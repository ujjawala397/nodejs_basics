var m=require('mongodb').MongoClient;
m.connect("mongodb://localhost:27017/db",{useUnifiedTopology: true},function(err,db){
	if(err){
		console.log("error in connecting Mongoclient");
	}
	else{
		console.log('database created successfully');
	}
var dbo = db.db("mydb");
var myquery = { name: 'Betty' };
dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log("document deleted");
  });
 dbo.collection('customers').find({}).toArray(function(err,data){
    	console.log(data);
    	data.forEach(element=>{
    		console.log(element.name)
    	})
    });
 db.close();
});