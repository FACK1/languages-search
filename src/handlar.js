const http = require('http');
const path = require('path');
const fs = require('fs');

function handler(request, response){
    var endpoint = request.url;
    console.log(endpoint);
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
      }
         else if(endpoint.includes('/public/')){
             const filePath =  path.join(__dirname, '..', request.url);
             const extension = request.url.split('.')[1];
             const contentTypeMapping = {
                'js': 'application/js',
                'css': 'text/css',
                'html': 'text/html'
                }
            fs.readFile(filePath, (error, file) => {
                if(error){
                    response.writeHeader(500, {'content-Type': 'text/css'});
                    response.end('<h1> Server error! sorry</h1>');
                }
                response.writeHead(200, {'content-Type': contentTypeMapping[extension]})
                response.end(file)
            })
      }
         else if(endpoint.includes('/search')){
           console.log(endpoint.split('=')[1]);

           var allData = '';
           request.on('data', function(query) {
             allData += query;
           })
           request.on('end', function() {
             var filePath = path.join(__dirname, 'languages.txt');
             var data = fs.readFileSync(filePath);
             var arrayoflang=[]
             arrayoflang=  data.toString().toLowerCase().split('\n');
             var JSONResults = JSON.stringify(arrayoflang);

             response.writeHead(200,{"content-type":"text/javascript"});
             response.end(JSONResults);
           })
      }
         else {
             response.writeHead(404, {'Content-Type': 'text/html'})
             response.end('<h1>Page Not Found</h1>')
         }
 }


 module.exports=handler;
