const http = require('http')  //'http' is module

const server = http.createServer((req,res)=>{   //rep and res are object
   if(req.url === '/'){
    res.end('Welcome to our home page')
   }
   if(req.url === '/about'){
    res.end('Here is our short history')
   }
 

   //if user is requesting a contact page that we don't have then a default response 
   res.end(`
   <h1>Opps!</h1>
   <p>csn't seem to find the page you are looking for</p>
   <a href="/">back home</a>
   `)
})
server.listen(5000)