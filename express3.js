const http=require('http')
const server=http.createServer((req,res)=>{
if(req.url,'/')
{
res.write('Welcome to Home Page');
res.end();
}
if(req.url,'/api/courses'){
res.write(JSON.stringify([1,2,3,4,5]))
res.end()
}
});
server.listen(8000);