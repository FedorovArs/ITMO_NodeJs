let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('index.html', 'utf8', (err, data)=>{
        if(err){
            res.statusCode = 500;
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        }
    })
}).listen(8080);
