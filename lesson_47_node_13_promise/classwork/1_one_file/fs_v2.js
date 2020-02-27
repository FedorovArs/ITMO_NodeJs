let http = require('http');
let fs = require('fs');
let fsPromises = fs.promises;


http.createServer(function(req, res){
    fsPromises.readFile('index.html', { encoding: 'utf8', flag: 'r' })
        .then((data)=>{
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        }).catch((err)=>{
        console.log(err);
        res.statusCode = 500;
        res.end();
    });
}).listen(8080);