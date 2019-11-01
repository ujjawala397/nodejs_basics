var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/', function(req,res){
        res.sendfile(__dirname+'/form1.html')
});
var i=0;
        
io.on('connection',function(socket){
        i++;
        console.log("Connection made"+i);
        
         setTimeout(function(){
            io.send("yes message has been sent successfully");},3000);
      
        io.on('disconnect',function(){
         i--;
                console.log("users left"+i)
        })
});
http.listen(8000,function(){
        console.log("server running at 8000....");
})