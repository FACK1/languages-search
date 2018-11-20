const http = require('http');
const path = require('path');
const fs = require('fs');

function handler(request, response){
    var endpoint = request.url;
     if(endpoint === '/'){
             const htmlPath =  path.join(__dirname, '../public/index.html')
             fs.readFile(htmlPath, (error, html) => {
                 if(error){
                    response.writeHead(500, {'content-Type': 'text/html'})
                    response.end('<h1> Server error! sorry</h1>')
                 }
                 response.writeHead(200, {'Content-Type': 'text/html'})
                 response.end(html)
             })
         }else if(endpoint==='/public'){
 
         }else if(endpoint==='/search'){
 
         }
         else {
             response.writeHead(404, {'Content-Type': 'text/html'})
             response.end('<h1>Page Not Found</h1>')
         }      
 }


 module.exports=handler;