let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){
    let promise = new Promise((resolve, reject)=>{
        fs.readFile('index.html', 'utf8', (err, data)=>{
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    });

    promise.then((data)=>{
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