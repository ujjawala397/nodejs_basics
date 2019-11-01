const express = require('express'); // using express 
const socketIO = require('socket.io'); 
const http = require('http'); // setting the port 
let app = express(); 
let server = http.createServer(app);
let io = socketIO(server) 

io.on('connection', (socket)=>{
  console.log('New user connected');
});
app.listen(3000); 
