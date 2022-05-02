const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('hello , welcome to node js')
}).listen(3001)
