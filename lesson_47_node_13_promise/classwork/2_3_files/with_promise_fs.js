let http = require('http');
let fs = require('fs');
let fsPromises = fs.promises;

http.createServer(function(req, res){
    let promise = promiseReadFile('header.html');
    let allData = '';

    promise
        .then((data)=>{
            allData += data;
            return promiseReadFile('body.html');
        })
        .then((data)=>{
            allData += data;
            return promiseReadFile('footer.html');
        })
        .then((data)=>{
            allData += data;
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(allData);
        }).catch((err)=>{
        console.log(err);
        res.statusCode = 500;
        res.end();
    });
}).listen(8080);

function promiseReadFile(filename){
    return fsPromises.readFile(filename, { encoding: 'utf8', flag: 'r' })
}