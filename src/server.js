const http = require('http');
const path = require('path');
const fs = require('fs');

const handlers=require('./handlar.js')
const PORT = process.env.PORT || 9000;


const server = http.createServer(handlers);

server.listen(PORT, function(handler){
    console.log("server is up and running on port 9000!")
})
