let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');

let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html'
}

http.createServer(function(req, res){
    console.log(req.method);
    console.log(req.url);
    if(req.method == 'GET'){
        let pathname = url.parse(req.url).path;
        if(pathname == '/'){
            pathname = '/index.html';
        }
        let extname = path.extname(pathname);
        let mimeType = mimeTypes[extname];
        pathname =
            pathname.substring(1, pathname.length);
        res.writeHead(200, {
            'Content-Type':mimeType
        });
        let newFileStream = fs.createReadStream(pathname);
        newFileStream.pipe(res);
        newFileStream.on('error', function(err){
            console.log(err);
        });
    } else {
        let pathname = url.parse(req.url).path;
        pathname =
            pathname.substring(1, pathname.length);

        let newFileStream = fs.createWriteStream(pathname);


        req.on('close', function(){
            res.statusCode = 200;
            res.end('<h1>Hello</h1>');
        });

        req.pipe(newFileStream);
    }
}).listen(8080);