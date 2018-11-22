const http = require('http');
const router = require('./router.js');
const PORT =  process.env.PORT ||9000;
const server = http.createServer(router);

server.listen(PORT, function(){
    console.log("server is up and running on port 9000!")
})
