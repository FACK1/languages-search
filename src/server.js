const http = require('http');
const router = require('./rauter.js');
const PORT = 9000;
const server = http.createServer(router);

server.listen(PORT, function(){
    console.log("server is up and running on port 9000!")
})
