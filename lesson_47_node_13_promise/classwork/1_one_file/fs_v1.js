let http = require('http');
let fs = require('fs');
let fsPromises = fs.promises;


http.createServer(function(req, res){
    fsPromises.open('index.html', 'r')
        .then((fileHandler)=>{
            return fileHandler.readFile({ encoding: 'utf8' });
        })
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