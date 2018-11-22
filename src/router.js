const path = require('path');
const fs = require('fs');
const handlers=require('./handler.js')

const router= (request, response)=>{
  var endpoint = request.url;
  console.log(endpoint);
   if(endpoint === '/'){
     handlers.homerouterhandler(request, response);
    }
   else if(endpoint.includes('/public/')){
     handlers.publichandler(request, response);
   }
   else if(endpoint.includes('/search')){
     handlers.searchhandler(request, response);
   }
   else {
       response.writeHead(404, {'Content-Type': 'text/html'})
       response.end('<h1>Page Not Found</h1>')
   }
};
module.exports = router;
