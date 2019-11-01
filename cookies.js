var express = require('Express');
// Pass reference of cookie parser
var cookieparser = require('cookie-parser');
 
var app = express();
app.use(cookieparser());
app.get("/", function(req, res){
    // Create cookie without expiration time 
//res.cookie('mycookie', 'yogesh sharma').send('Cookies has been set now');
// Set cookies with expiration time 
//res.cookie('mycookie2', "sharma", {expire : Date.now()+ 36000 }).send('cookie has been set');
// Set Cookies expiration using maxAge
res.cookie('mycookie3', "sharma1", {maxAge :  36000 }).send('cookie has been set');
 
 
})
app.get("/showcookie", function(req, res){
    res.send(req.cookies);
    
    })
    app.get("/clearcookie", function(req, res){
     res.clearCookie('mycookie2').send('cookie has been deleted');
        
        })
    
 
 
app.listen(3000);